-- First, disable RLS temporarily to see all policies
-- Drop ALL existing policies on the table
DROP POLICY IF EXISTS "Allow anonymous contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Allow public contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Staff can read submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Staff can update submissions" ON contact_submissions;

-- Re-enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create a simple, permissive INSERT policy
CREATE POLICY "contact_submissions_insert_policy"
ON contact_submissions
FOR INSERT
TO public
WITH CHECK (true);

-- Create SELECT policy for authenticated users only
CREATE POLICY "contact_submissions_select_policy"
ON contact_submissions
FOR SELECT
TO authenticated
USING (true);

-- Create UPDATE policy for authenticated users only
CREATE POLICY "contact_submissions_update_policy"
ON contact_submissions
FOR UPDATE
TO authenticated
USING (true);

