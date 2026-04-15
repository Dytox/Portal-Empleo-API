import z from "zod";

export const createAdditionalInfoSchema = z
  .object({
    about_company: z.string().optional().meta({
      description: "About company",
      example: "We are a leading tech company",
    }),
    company_size_id: z.number().int().positive().meta({
      description: "Company size ID",
      example: 1,
    }),
    industry_id: z.number().int().positive().meta({
      description: "Industry ID",
      example: 1,
    }),
    mision: z.string().optional().meta({
      description: "Company mission",
      example: "To innovate technology",
    }),
    vision: z.string().optional().meta({
      description: "Company vision",
      example: "To be the leading tech company",
    }),
    culture: z.string().optional().meta({
      description: "Company culture",
      example: "Innovative and collaborative",
    }),
  })
  .meta({
    id: "CreateAdditionalInfoDTO",
    description: "Schema for creating additional company information",
  });

export const updateAdditionalInfoSchema = z
  .object({
    id: z.number().int().positive().meta({
      description: "Additional info ID",
      example: 1,
    }),
    about_company: z.string().optional().meta({
      description: "About company",
      example: "We are a leading tech company",
    }),
    company_size_id: z.number().int().positive().optional().meta({
      description: "Company size ID",
      example: 1,
    }),
    industry_id: z.number().int().positive().optional().meta({
      description: "Industry ID",
      example: 1,
    }),
    mision: z.string().optional().meta({
      description: "Company mission",
      example: "To innovate technology",
    }),
    vision: z.string().optional().meta({
      description: "Company vision",
      example: "To be the leading tech company",
    }),
    culture: z.string().optional().meta({
      description: "Company culture",
      example: "Innovative and collaborative",
    }),
  })
  .meta({
    id: "UpdateAdditionalInfoDTO",
    description: "Schema for updating additional company information",
  });

export const additionalInfoSchema = z
  .object({
    id: z.number().int().positive().meta({
      description: "Additional info ID",
      example: 1,
    }),
    about_company: z.string().nullable().meta({
      description: "About company",
      example: "We are a leading tech company",
    }),
    company_size_id: z.number().int().positive().meta({
      description: "Company size ID",
      example: 1,
    }),
    industry_id: z.number().int().positive().meta({
      description: "Industry ID",
      example: 1,
    }),
    mision: z.string().nullable().meta({
      description: "Company mission",
      example: "To innovate technology",
    }),
    vision: z.string().nullable().meta({
      description: "Company vision",
      example: "To be the leading tech company",
    }),
    culture: z.string().nullable().meta({
      description: "Company culture",
      example: "Innovative and collaborative",
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
    id: "AdditionalInfo",
    description: "Additional info response object",
  });
