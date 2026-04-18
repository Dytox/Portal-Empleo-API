import z from "zod";

export const createExternalCompanyLinksSchema = z
  .object({
    company_profile_id: z.number().int().positive().meta({
      description: "Company profile ID",
      example: 1,
    }),
    link_type: z.string().min(1).max(50).meta({
      description: "Link type",
      example: "linkedin",
    }),
    link_url: z.string().url().meta({
      description: "Link URL",
      example: "https://linkedin.com/company/techcorp",
    }),
  })
  .meta({
    id: "CreateExternalCompanyLinksDTO",
    description: "Schema for creating external company links",
  });

export const updateExternalCompanyLinksSchema = z
  .object({
    link_type: z.string().min(1).max(50).optional().meta({
      description: "Link type",
      example: "twitter",
    }),
    link_url: z.string().url().optional().meta({
      description: "Link URL",
      example: "https://twitter.com/techcorp",
    }),
  })
  .meta({
    id: "UpdateExternalCompanyLinksDTO",
    description: "Schema for updating external company links",
  });

export const externalCompanyLinksSchema = z
  .object({
    id: z.number().int().positive().meta({
      description: "External links ID",
      example: 1,
    }),
    company_profile_id: z.number().int().positive().meta({
      description: "Company profile ID",
      example: 1,
    }),
    link_type: z.string().meta({
      description: "Link type",
      example: "linkedin",
    }),
    link_url: z.string().url().meta({
      description: "Link URL",
      example: "https://linkedin.com/company/techcorp",
    }),
    created_at: z.string().datetime().meta({
      description: "Creation timestamp",
      example: "2024-01-01T00:00:00Z",
    }),
  })
  .meta({
    id: "ExternalCompanyLinks",
    description: "External company links response object",
  });
