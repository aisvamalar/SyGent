import ExcelJS from "exceljs";

interface EnquiryData {
  enquiryId: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  website?: string | null;
  service: string;
  description: string;
  budget?: string | null;
  submittedAt: string;
}

export async function generateEnquiryExcel(
  data: EnquiryData
): Promise<{ buffer: Buffer; filename: string }> {
  // Create a new workbook
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Enquiry Details");

  // Set column widths
  worksheet.getColumn(1).width = 25; // Column A - Field names
  worksheet.getColumn(2).width = 50; // Column B - Values

  // Add header row with formatting
  const headerRow = worksheet.addRow(["Field", "Value"]);
  headerRow.font = { bold: true };
  headerRow.fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "FFD9D9D9" }, // Light grey fill
  };
  headerRow.border = {
    top: { style: "thin" },
    left: { style: "thin" },
    bottom: { style: "thin" },
    right: { style: "thin" },
  };

  // Freeze header row
  worksheet.views = [{ state: "frozen", ySplit: 1 }];

  // Format the submitted date
  const submittedDate = new Date(data.submittedAt);
  const formattedSubmittedAt = submittedDate.toLocaleString("en-US", {
    dateStyle: "full",
    timeStyle: "short",
  });

  // Add data rows
  const dataRows = [
    ["Enquiry ID", data.enquiryId],
    ["Customer Name", data.name],
    ["Email", data.email],
    ["Company", data.company || "N/A"],
    ["Phone", data.phone],
    ["Website", data.website || "N/A"],
    ["Service", data.service],
    ["Budget", data.budget || "N/A"],
    ["Description", data.description],
    ["Status", "New"],
    ["Submitted At", formattedSubmittedAt],
  ];

  dataRows.forEach((rowData, index) => {
    const row = worksheet.addRow(rowData);

    // Bold the field name (column A)
    row.getCell(1).font = { bold: true };

    // Apply borders to both cells
    row.eachCell((cell) => {
      cell.border = {
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" },
      };
    });

    // Enable text wrapping for Description field (row 9 in data, row 10 in worksheet)
    if (index === 8) {
      // Description is the 9th data row (0-indexed = 8)
      row.getCell(2).alignment = { wrapText: true };
    }
  });

  // Sanitize customer name for filename
  const sanitizedName = data.name
    .replace(/[^a-zA-Z0-9_-]/g, "_")
    .replace(/_+/g, "_") // Replace multiple underscores with single
    .replace(/^_|_$/g, ""); // Remove leading/trailing underscores

  const filename = `Enquiry_${data.enquiryId}_${sanitizedName}.xlsx`;

  // Convert workbook to buffer
  const buffer = Buffer.from(await workbook.xlsx.writeBuffer());

  return { buffer, filename };
}
