import z from "zod";

export const createAdditionalInfoSchema = z
  .object({
    info_type: z.string().min(1).max(100).meta({
      description: "Info type",
      example: "mission",
    }),
    info_value: z.string().optional().meta({
      description: "Info value",
      example: "To innovate and deliver quality solutions",
    }),
  })
  .meta({
    id: "CreateAdditionalInfoDTO",
    description: "Schema for creating additional company information",
  });

export const updateAdditionalInfoSchema = z
  .object({
    info_type: z.string().min(1).max(100).optional().meta({
      description: "Info type",
      example: "vision",
    }),
    info_value: z.string().optional().meta({
      description: "Info value",
      example: "To be the leading company in our industry",
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
    info_type: z.string().meta({
      description: "Info type",
      example: "mission",
    }),
    info_value: z.string().nullable().meta({
      description: "Info value",
      example: "To innovate and deliver quality solutions",
    }),
    created_at: z.string().datetime().meta({
      description: "Creation timestamp",
      example: "2024-01-01T00:00:00Z",
    }),
  })
  .meta({
    id: "AdditionalInfo",
    description: "Additional info response object",
  });
