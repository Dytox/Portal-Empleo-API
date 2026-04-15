import z from "zod";

export const createCompanyProfileSchema = z
  .object({
    user_id: z.number().int().positive().meta({
      description: "User ID",
      example: 1,
    }),
    company_name: z.string().min(1).max(100).meta({
      description: "Company name",
      example: "TechCorp Inc",
    }),
    tel: z.number().int().optional().meta({
      description: "Company phone number",
      example: 23456789,
    }),
    external_links_id: z.number().int().positive().meta({
      description: "External links ID",
      example: 1,
    }),
    additional_info_id: z.number().int().positive().meta({
      description: "Additional info ID",
      example: 1,
    }),
  })
  .meta({
    id: "CreateCompanyProfileDTO",
    description: "Schema for creating a new company profile",
  });

export const updateCompanyProfileSchema = z
  .object({
    id: z.number().int().positive().meta({
      description: "Company profile ID",
      example: 1,
    }),
    company_name: z.string().min(1).max(100).optional().meta({
      description: "Company name",
      example: "TechCorp Inc",
    }),
    tel: z.number().int().optional().meta({
      description: "Company phone number",
      example: 23456789,
    }),
    external_links_id: z.number().int().positive().optional().meta({
      description: "External links ID",
      example: 1,
    }),
    additional_info_id: z.number().int().positive().optional().meta({
      description: "Additional info ID",
      example: 1,
    }),
  })
  .meta({
    id: "UpdateCompanyProfileDTO",
    description: "Schema for updating a company profile",
  });

export const companyProfileSchema = z
  .object({
    id: z.number().int().positive().meta({
      description: "Company profile ID",
      example: 1,
    }),
    user_id: z.number().int().positive().meta({
      description: "User ID",
      example: 1,
    }),
    company_name: z.string().meta({
      description: "Company name",
      example: "TechCorp Inc",
    }),
    tel: z.number().int().nullable().meta({
      description: "Company phone number",
      example: 23456789,
    }),
    external_links_id: z.number().int().positive().meta({
      description: "External links ID",
      example: 1,
    }),
    additional_info_id: z.number().int().positive().meta({
      description: "Additional info ID",
      example: 1,
    }),
    update_date: z.string().datetime().meta({
      description: "Update date",
      example: "2024-01-01T00:00:00Z",
    }),
    creation_date: z.string().datetime().meta({
      description: "Creation date",
      example: "2024-01-01T00:00:00Z",
    }),
  })
  .meta({
    id: "CompanyProfile",
    description: "Company profile response object",
  });
