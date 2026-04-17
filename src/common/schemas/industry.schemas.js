import z from "zod";

export const createIndustrySchema = z
  .object({
    id: z.number().int().positive().meta({
      description: "Industry ID",
      example: 1,
    }),
    industry_name: z.string().min(1).meta({
      description: "Industry name",
      example: "Technology",
    }),
  })
  .meta({
    id: "CreateIndustryDTO",
    description: "Schema for creating a new industry",
  });

export const updateIndustrySchema = z
  .object({
    industry_name: z.string().min(1).meta({
      description: "Industry name",
      example: "Finance",
    }),
  })
  .meta({
    id: "UpdateIndustryDTO",
    description: "Schema for updating an industry",
  });

export const industrySchema = z
  .object({
    id: z.number().int().positive().meta({
      description: "Industry ID",
      example: 1,
    }),
    industry_name: z.string().meta({
      description: "Industry name",
      example: "Technology",
    }),
  })
  .meta({
    id: "Industry",
    description: "Industry response object",
  });
