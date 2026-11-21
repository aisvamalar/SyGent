import ExcelJS from "exceljs";
import { supabase } from "./supabase-client";

interface CustomerRow {
  customer_id: string;
  name: string;
  email: string;
  phone: string;
  company: string | null;
  first_enquiry_date: string;
  last_enquiry_date: string;
  total_enquiries: number;
  created_at: string;
  updated_at: string;
}

/**
 * Generates a complete customer database Excel file
 * Fetches ALL customers from Supabase and creates a professional Excel spreadsheet
 */
export async function generateCustomerDatabaseExcel(): Promise<Buffer> {
  console.log("[CustomerDB] Starting customer database Excel generation...");

  // Fetch all customers from the database
  const { data: customers, error } = await supabase
    .from("customers")
    .select("*")
    .order("customer_id", { ascending: true });

  if (error) {
    console.error("[CustomerDB] Error fetching customers:", error);
    throw new Error(`Failed to fetch customers: ${error.message}`);
  }

  console.log(`[CustomerDB] Fetched ${customers?.length || 0} customers from database`);

  // Create a new workbook
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Customer Database");

  // Set document metadata
  workbook.creator = "SYGENT Administration";
  workbook.lastModifiedBy = "SYGENT System";
  workbook.created = new Date();
  workbook.modified = new Date();
  workbook.subject = "SYGENT Customer Database";
  workbook.description = "Master customer database with automated tracking";

  // Define column widths
  worksheet.columns = [
    { key: "customer_id", width: 15 },
    { key: "name", width: 25 },
    { key: "email", width: 30 },
    { key: "phone", width: 18 },
    { key: "company", width: 25 },
    { key: "first_enquiry_date", width: 20 },
    { key: "last_enquiry_date", width: 20 },
    { key: "total_enquiries", width: 18 },
  ];

  // Add title row
  const titleRow = worksheet.addRow([
    "SYGENT CUSTOMER DATABASE",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  titleRow.font = { size: 16, bold: true, color: { argb: "FF1A1A1A" } };
  titleRow.alignment = { vertical: "middle", horizontal: "left" };
  titleRow.height = 30;

  // Add subtitle row with generation timestamp
  const subtitleRow = worksheet.addRow([
    `Generated on: ${new Date().toLocaleString("en-US", { dateStyle: "full", timeStyle: "short" })}`,
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  subtitleRow.font = { size: 11, italic: true, color: { argb: "FF6B7280" } };
  subtitleRow.alignment = { vertical: "middle", horizontal: "left" };

  // Add empty row for spacing
  worksheet.addRow([]);

  // Add header row
  const headerRow = worksheet.addRow([
    "Customer ID",
    "Customer Name",
    "Email Address",
    "Phone Number",
    "Company Name",
    "First Enquiry Date",
    "Last Enquiry Date",
    "Total Enquiries",
  ]);

  // Style header row
  headerRow.font = { bold: true, color: { argb: "FFFFFFFF" }, size: 11 };
  headerRow.fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "FF1A1A1A" },
  };
  headerRow.alignment = { vertical: "middle", horizontal: "center" };
  headerRow.height = 25;

  // Add borders to header
  headerRow.eachCell((cell) => {
    cell.border = {
      top: { style: "thin", color: { argb: "FF1A1A1A" } },
      left: { style: "thin", color: { argb: "FF1A1A1A" } },
      bottom: { style: "thin", color: { argb: "FF1A1A1A" } },
      right: { style: "thin", color: { argb: "FF1A1A1A" } },
    };
  });

  // Add customer data rows
  if (customers && customers.length > 0) {
    customers.forEach((customer: CustomerRow, index: number) => {
      const row = worksheet.addRow([
        customer.customer_id,
        customer.name,
        customer.email,
        customer.phone,
        customer.company || "N/A",
        new Date(customer.first_enquiry_date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
        new Date(customer.last_enquiry_date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
        customer.total_enquiries,
      ]);

      // Alternate row colors
      if (index % 2 === 0) {
        row.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: "FFF9FAFB" },
        };
      }

      // Style data cells
      row.font = { size: 10, color: { argb: "FF1A1A1A" } };
      row.alignment = { vertical: "middle", horizontal: "left" };
      row.height = 20;

      // Center align numeric columns
      if (row.getCell(8).value !== null) {
        row.getCell(8).alignment = { vertical: "middle", horizontal: "center" };
      }

      // Add borders to data cells
      row.eachCell((cell) => {
        cell.border = {
          top: { style: "thin", color: { argb: "FFE5E7EB" } },
          left: { style: "thin", color: { argb: "FFE5E7EB" } },
          bottom: { style: "thin", color: { argb: "FFE5E7EB" } },
          right: { style: "thin", color: { argb: "FFE5E7EB" } },
        };
      });
    });
  } else {
    // Add "No customers found" message
    const noDataRow = worksheet.addRow([
      "",
      "",
      "No customers found in the database",
      "",
      "",
      "",
      "",
      "",
    ]);
    noDataRow.font = { italic: true, color: { argb: "FF9CA3AF" }, size: 10 };
    noDataRow.alignment = { vertical: "middle", horizontal: "center" };
  }

  // Add footer row with spacing
  worksheet.addRow([]);
  const footerRow = worksheet.addRow([
    `Total Customers: ${customers?.length || 0}`,
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  footerRow.font = { bold: true, size: 11, color: { argb: "FF1A1A1A" } };
  footerRow.alignment = { vertical: "middle", horizontal: "left" };

  // Freeze the header row
  worksheet.views = [{ state: "frozen", ySplit: 4 }];

  // Generate buffer
  const buffer = await workbook.xlsx.writeBuffer();
  console.log("[CustomerDB] Customer database Excel file generated successfully");

  return Buffer.from(buffer);
}
