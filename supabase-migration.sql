-- =====================================================
-- CONTACT FORM SUBMISSIONS TABLE
-- =====================================================
-- This migration creates the contact_submissions table
-- for storing website enquiries with proper RLS policies
-- =====================================================

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT NOT NULL,
  phone TEXT NOT NULL,
  website TEXT,
  budget TEXT,
  service TEXT NOT NULL,
  description TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new',
  notes TEXT,
  CONSTRAINT status_check CHECK (status IN ('new', 'contacted', 'qualified', 'converted'))
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- =====================================================
-- RLS POLICIES
-- =====================================================

-- Policy 1: Allow anonymous users to INSERT contact submissions
-- This allows public visitors to submit the contact form
CREATE POLICY "Allow anonymous contact submissions"
ON contact_submissions
FOR INSERT
TO anon
WITH CHECK (true);

-- Policy 2: Authenticated staff/admin can SELECT submissions
-- Note: You'll need to set up proper authentication and role assignment
-- For now, this allows any authenticated user to read submissions
-- In production, implement proper role-based access control
CREATE POLICY "Staff can read submissions"
ON contact_submissions
FOR SELECT
TO authenticated
USING (
  -- Adjust this based on your authentication system
  -- Example: auth.jwt() ->> 'role' = 'staff' OR auth.jwt() ->> 'role' = 'admin'
  true  -- Replace with proper role check in production
);

-- Policy 3: Authenticated staff/admin can UPDATE submissions
CREATE POLICY "Staff can update submissions"
ON contact_submissions
FOR UPDATE
TO authenticated
USING (
  -- Adjust this based on your authentication system
  true  -- Replace with proper role check in production
);

-- =====================================================
-- INDEXES FOR PERFORMANCE
-- =====================================================

-- Index for filtering by status
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status 
ON contact_submissions(status);

-- Index for sorting by submission date (most recent first)
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at 
ON contact_submissions(created_at DESC);

-- Index for searching by email
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email 
ON contact_submissions(email);

-- =====================================================
-- COMMENTS
-- =====================================================

COMMENT ON TABLE contact_submissions IS 'Stores contact form enquiries from the website';
COMMENT ON COLUMN contact_submissions.id IS 'Unique identifier for each submission';
COMMENT ON COLUMN contact_submissions.created_at IS 'Timestamp when the submission was created';
COMMENT ON COLUMN contact_submissions.name IS 'Customer full name';
COMMENT ON COLUMN contact_submissions.email IS 'Customer business email';
COMMENT ON COLUMN contact_submissions.company IS 'Customer company name';
COMMENT ON COLUMN contact_submissions.phone IS 'Customer phone number';
COMMENT ON COLUMN contact_submissions.website IS 'Customer website (optional)';
COMMENT ON COLUMN contact_submissions.budget IS 'Estimated project budget (optional)';
COMMENT ON COLUMN contact_submissions.service IS 'Requested service type';
COMMENT ON COLUMN contact_submissions.description IS 'Project description';
COMMENT ON COLUMN contact_submissions.status IS 'Current status: new, contacted, qualified, or converted';
COMMENT ON COLUMN contact_submissions.notes IS 'Internal notes (staff only, not exposed publicly)';
