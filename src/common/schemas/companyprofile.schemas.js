import z from "zod";

export const createCompanyProfileSchema = z
  .object({
    user_id: z.number().int().positive().meta({
      description: "User ID",
      example: 1,
    }),
    company_name: z.string().min(1).max(150).meta({
      description: "Company name",
      example: "TechCorp Inc",
    }),
    phone: z.string().max(30).optional().meta({
      description: "Company phone number",
      example: "+1-234-567-8900",
    }),
    location: z.string().max(120).optional().meta({
      description: "Company location",
      example: "San Francisco, CA",
    }),
    website_url: z.string().url().optional().meta({
      description: "Company website URL",
      example: "https://techcorp.com",
    }),
    logo_url: z.string().url().optional().meta({
      description: "Company logo URL",
      example: "https://techcorp.com/logo.png",
    }),
    cover_image_url: z.string().url().optional().meta({
      description: "Company cover image URL",
      example: "https://techcorp.com/cover.jpg",
    }),
    industry_id: z.number().int().positive().optional().meta({
      description: "Industry ID",
      example: 1,
    }),
    company_size_id: z.number().int().positive().optional().meta({
      description: "Company size ID",
      example: 1,
    }),
    additional_info_id: z.number().int().positive().optional().meta({
      description: "Additional info ID",
      example: 1,
    }),
  })
  .meta({
    id: "CreateCompanyProfileDTO",
    description: "Schema for creating a company profile",
  });

export const updateCompanyProfileSchema = z
  .object({
    company_name: z.string().min(1).max(150).optional().meta({
      description: "Company name",
      example: "TechCorp Inc",
    }),
    phone: z.string().max(30).optional().meta({
      description: "Company phone number",
      example: "+1-234-567-8900",
    }),
    location: z.string().max(120).optional().meta({
      description: "Company location",
      example: "San Francisco, CA",
    }),
    website_url: z.string().url().optional().meta({
      description: "Company website URL",
      example: "https://techcorp.com",
    }),
    logo_url: z.string().url().optional().meta({
      description: "Company logo URL",
      example: "https://techcorp.com/logo.png",
    }),
    cover_image_url: z.string().url().optional().meta({
      description: "Company cover image URL",
      example: "https://techcorp.com/cover.jpg",
    }),
    industry_id: z.number().int().positive().optional().meta({
      description: "Industry ID",
      example: 1,
    }),
    company_size_id: z.number().int().positive().optional().meta({
      description: "Company size ID",
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
    phone: z.string().nullable().meta({
      description: "Company phone number",
      example: "+1-234-567-8900",
    }),
    location: z.string().nullable().meta({
      description: "Company location",
      example: "San Francisco, CA",
    }),
    website_url: z.string().nullable().meta({
      description: "Company website URL",
      example: "https://techcorp.com",
    }),
    logo_url: z.string().nullable().meta({
      description: "Company logo URL",
      example: "https://techcorp.com/logo.png",
    }),
    cover_image_url: z.string().nullable().meta({
      description: "Company cover image URL",
      example: "https://techcorp.com/cover.jpg",
    }),
    industry_id: z.number().int().positive().nullable().meta({
      description: "Industry ID",
      example: 1,
    }),
    company_size_id: z.number().int().positive().nullable().meta({
      description: "Company size ID",
      example: 1,
    }),
    additional_info_id: z.number().int().positive().nullable().meta({
      description: "Additional info ID",
      example: 1,
    }),
    created_at: z.string().datetime().meta({
      description: "Creation timestamp",
      example: "2024-01-01T00:00:00Z",
    }),
    updated_at: z.string().datetime().nullable().meta({
      description: "Last update timestamp",
      example: "2024-01-02T00:00:00Z",
    }),
  })
  .meta({
    id: "CompanyProfile",
    description: "Company profile response object",
  });
