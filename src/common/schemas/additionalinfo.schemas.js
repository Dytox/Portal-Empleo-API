import z from "zod";

export const createAdditionalInfoSchema = z
  .object({
    about_company: z.string().min(1).max(2000).optional().nullable().meta({
      description: "About company",
      example: "We are a company that...",
    }),
    mission: z.string().optional().nullable().meta({
      description: "Mission",
      example: "To deliver great products",
    }),
    vision: z.string().optional().nullable().meta({
      description: "Vision",
      example: "Be a market leader",
    }),
    culture: z.string().optional().nullable().meta({
      description: "Culture",
      example: "Collaborative and inclusive",
    }),
  })
  .meta({
    id: "CreateAdditionalInfoDTO",
    description: "Schema for creating company additional information",
  });

export const updateAdditionalInfoSchema = z
  .object({
    about_company: z.string().optional().nullable().meta({
      description: "About company",
      example: "We are a company that...",
    }),
    mission: z.string().optional().nullable().meta({
      description: "Mission",
      example: "To deliver great products",
    }),
    vision: z.string().optional().nullable().meta({
      description: "Vision",
      example: "Be a market leader",
    }),
    culture: z.string().optional().nullable().meta({
      description: "Culture",
      example: "Collaborative and inclusive",
    }),
  })
  .meta({
    id: "UpdateAdditionalInfoDTO",
    description: "Schema for updating company additional information",
  });

export const additionalInfoSchema = z
  .object({
    id: z.number().int().positive().meta({
      description: "Additional info ID",
      example: 1,
    }),
    about_company: z.string().nullable().meta({
      description: "About company",
      example: "We are a company that...",
    }),
    mission: z.string().nullable().meta({
      description: "Mission",
      example: "To deliver great products",
    }),
    vision: z.string().nullable().meta({
      description: "Vision",
      example: "Be a market leader",
    }),
    culture: z.string().nullable().meta({
      description: "Culture",
      example: "Collaborative and inclusive",
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
    id: "AdditionalInfo",
    description: "Additional info response object",
  });
