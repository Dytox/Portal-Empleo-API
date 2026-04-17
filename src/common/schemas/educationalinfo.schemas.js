import z from "zod";

export const createEducationalInfoSchema = z
  .object({
    profile_id: z.number().int().positive().meta({
      description: "Profile ID",
      example: 1,
    }),
    degree_id: z.number().int().positive().meta({
      description: "Degree ID",
      example: 1,
    }),
    start_date: z.string().datetime().optional().meta({
      description: "Start date",
      example: "2018-01-01T00:00:00Z",
    }),
    end_date: z.string().datetime().optional().meta({
      description: "End date",
      example: "2022-01-01T00:00:00Z",
    }),
  })
  .meta({
    id: "CreateEducationalInfoDTO",
    description: "Schema for creating educational information",
  });

export const updateEducationalInfoSchema = z
  .object({
    degree_id: z.number().int().positive().optional().meta({
      description: "Degree ID",
      example: 1,
    }),
    start_date: z.string().datetime().optional().meta({
      description: "Start date",
      example: "2018-01-01T00:00:00Z",
    }),
    end_date: z.string().datetime().optional().meta({
      description: "End date",
      example: "2022-01-01T00:00:00Z",
    }),
  })
  .meta({
    id: "UpdateEducationalInfoDTO",
    description: "Schema for updating educational information",
  });

export const educationalInfoSchema = z
  .object({
    id: z.number().int().positive().meta({
      description: "Educational info ID",
      example: 1,
    }),
    profile_id: z.number().int().positive().meta({
      description: "Profile ID",
      example: 1,
    }),
    degree_id: z.number().int().positive().meta({
      description: "Degree ID",
      example: 1,
    }),
    start_date: z.string().datetime().nullable().meta({
      description: "Start date",
      example: "2018-01-01T00:00:00Z",
    }),
    end_date: z.string().datetime().nullable().meta({
      description: "End date",
      example: "2022-01-01T00:00:00Z",
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
    id: "EducationalInfo",
    description: "Educational info response object",
  });
