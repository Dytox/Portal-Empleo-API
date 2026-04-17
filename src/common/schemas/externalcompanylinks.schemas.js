import z from "zod";

export const createExternalCompanyLinksSchema = z
  .object({
    id: z.number().int().positive().meta({
      description: "External links ID",
      example: 1,
    }),
    link: z.string().meta({
      description: "External company link",
      example: "https://linkedin.com/company/techcorp",
    }),
  })
  .meta({
    id: "CreateExternalCompanyLinksDTO",
    description: "Schema for creating external company links",
  });

export const updateExternalCompanyLinksSchema = z
  .object({
    link: z.string().meta({
      description: "External company link",
      example: "https://linkedin.com/company/techcorp",
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
    link: z.string().url().meta({
      description: "External company link",
      example: "https://linkedin.com/company/techcorp",
    }),
  })
  .meta({
    id: "ExternalCompanyLinks",
    description: "External company links response object",
  });
