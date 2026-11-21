-- =====================================================
-- CUSTOMERS TABLE FOR SYGENT
-- =====================================================
-- Tracks unique customers by email with auto-incrementing customer IDs
-- =====================================================

-- Create customers table
CREATE TABLE IF NOT EXISTS customers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id TEXT UNIQUE NOT NULL,
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  first_enquiry_date TIMESTAMPTZ NOT NULL,
  last_enquiry_date TIMESTAMPTZ NOT NULL,
  total_enquiries INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT email_format CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$')
);

-- Create sequence for customer IDs
CREATE SEQUENCE IF NOT EXISTS customer_id_seq START WITH 1;

-- Function to generate customer ID (SYG001, SYG002, etc.)
CREATE OR REPLACE FUNCTION generate_customer_id()
RETURNS TEXT AS $$
DECLARE
  next_id INTEGER;
  customer_id_text TEXT;
BEGIN
  -- Get next sequence value
  next_id := nextval('customer_id_seq');
  
  -- Format as SYG001, SYG002, etc.
  customer_id_text := 'SYG' || LPAD(next_id::TEXT, 3, '0');
  
  RETURN customer_id_text;
END;
$$ LANGUAGE plpgsql;

-- Function to find or create customer
CREATE OR REPLACE FUNCTION upsert_customer(
  p_name TEXT,
  p_email TEXT,
  p_phone TEXT,
  p_company TEXT
)
RETURNS TABLE (
  customer_id TEXT,
  is_new_customer BOOLEAN,
  enquiry_count INTEGER
) AS $$
DECLARE
  v_customer_id TEXT;
  v_is_new BOOLEAN;
  v_count INTEGER;
BEGIN
  -- Normalize email to lowercase
  p_email := LOWER(TRIM(p_email));
  
  -- Try to find existing customer
  SELECT c.customer_id, c.enquiry_count INTO v_customer_id, v_count
  FROM customers c
  WHERE LOWER(c.email) = p_email;
  
  IF FOUND THEN
    -- Existing customer - update their info
    v_is_new := FALSE;
    v_count := v_count + 1;
    
    UPDATE customers
    SET 
      name = p_name,
      company = COALESCE(p_company, company),
      phone = COALESCE(p_phone, phone),
      last_enquiry_date = NOW(),
      total_enquiries = v_count,
      updated_at = NOW()
    WHERE LOWER(email) = p_email;
    
  ELSE
    -- New customer - create record
    v_is_new := TRUE;
    v_count := 1;
    v_customer_id := generate_customer_id();
    
    INSERT INTO customers (
      customer_id,
      email,
      name,
      company,
      phone,
      first_enquiry_date,
      last_enquiry_date,
      total_enquiries
    ) VALUES (
      v_customer_id,
      p_email,
      p_name,
      p_company,
      p_phone,
      NOW(),
      NOW(),
      1
    );
  END IF;
  
  RETURN QUERY SELECT v_customer_id, v_is_new, v_count;
END;
$$ LANGUAGE plpgsql;

-- Enable Row Level Security
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;

-- Policy: Authenticated users can read customers
CREATE POLICY "Staff can read customers"
ON customers
FOR SELECT
TO authenticated
USING (true);

-- Policy: System can insert/update customers (for server functions)
CREATE POLICY "System can manage customers"
ON customers
FOR ALL
TO anon
USING (true)
WITH CHECK (true);

-- =====================================================
-- INDEXES FOR PERFORMANCE
-- =====================================================

CREATE INDEX IF NOT EXISTS idx_customers_email ON customers(LOWER(email));
CREATE INDEX IF NOT EXISTS idx_customers_customer_id ON customers(customer_id);
CREATE INDEX IF NOT EXISTS idx_customers_last_enquiry_date ON customers(last_enquiry_date DESC);

-- =====================================================
-- COMMENTS
-- =====================================================

COMMENT ON TABLE customers IS 'Master customer database tracking unique customers by email';
COMMENT ON COLUMN customers.customer_id IS 'Human-readable customer ID (SYG001, SYG002, etc.)';
COMMENT ON COLUMN customers.email IS 'Unique customer email (normalized to lowercase)';
COMMENT ON COLUMN customers.total_enquiries IS 'Total number of enquiries from this customer';
COMMENT ON COLUMN customers.first_enquiry_date IS 'Date of first enquiry';
COMMENT ON COLUMN customers.last_enquiry_date IS 'Date of most recent enquiry';
