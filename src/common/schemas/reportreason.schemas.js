import z from "zod";

export const createReportReasonSchema = z
  .object({
    reason_name: z.string().min(1).max(80).meta({
      description: "Name of the report reason",
      example: "Spam",
    }),
  })
  .meta({
    id: "CreateReportReasonDTO",
    description: "Schema for creating a report reason",
  });

export const reportReasonSchema = z
  .object({
    id: z.number().int().positive().meta({
      description: "Report Reason ID",
      example: 1,
    }),
    reason_name: z.string().meta({
      description: "Name of the report reason",
      example: "Spam",
    }),
  })
  .meta({
    id: "ReportReason",
    description: "Report Reason response object",
  });
