import z from "zod";

export const createCompanySizeSchema = z
  .object({
    size_name: z.string().min(1).meta({
      description: "Company size name",
      example: "Small (1-50 employees)",
    }),
  })
  .meta({
    id: "CreateCompanySizeDTO",
    description: "Schema for creating a new company size category",
  });

export const updateCompanySizeSchema = z
  .object({
    id: z.number().int().positive().meta({
      description: "Company size ID",
      example: 1,
    }),
    size_name: z.string().min(1).meta({
      description: "Company size name",
      example: "Medium (50-500 employees)",
    }),
  })
  .meta({
    id: "UpdateCompanySizeDTO",
    description: "Schema for updating a company size category",
  });

export const companySizeSchema = z
  .object({
    id: z.number().int().positive().meta({
      description: "Company size ID",
      example: 1,
    }),
    size_name: z.string().meta({
      description: "Company size name",
      example: "Small (1-50 employees)",
    }),
  })
  .meta({
    id: "CompanySize",
    description: "Company size response object",
  });
