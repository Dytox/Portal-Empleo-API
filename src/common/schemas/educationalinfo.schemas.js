import z from "zod";

export const createEducationalInfoSchema = z
  .object({
    profile_id: z.number().int().positive().meta({
      description: "Profile ID",
      example: 1,
    }),
    degree_id: z.number().int().positive().nullable().optional().meta({
      description: "Degree ID (optional)",
      example: 1,
    }),
    institution: z.string().optional().meta({
      description: "Institution name",
      example: "Universidad Nacional",
    }),
    custom_degree_name: z.string().optional().meta({
      description: "Custom degree name",
      example: "Especialización en TI",
    }),
    is_current: z.boolean().optional().meta({
      description: "Is current study",
      example: false,
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
    degree_id: z.number().int().positive().nullable().optional().meta({
      description: "Degree ID (optional)",
      example: 1,
    }),
    institution: z.string().optional().meta({
      description: "Institution name",
      example: "Universidad Nacional",
    }),
    custom_degree_name: z.string().optional().meta({
      description: "Custom degree name",
      example: "Especialización en TI",
    }),
    is_current: z.boolean().optional().meta({
      description: "Is current study",
      example: false,
    }),
    start_date: z.string().datetime().nullable().optional().meta({
      description: "Start date",
      example: "2018-01-01T00:00:00Z",
    }),
    end_date: z.string().datetime().nullable().optional().meta({
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
    institution: z.string().nullable().meta({
      description: "Institution name",
      example: "Universidad Nacional",
    }),
    custom_degree_name: z.string().nullable().meta({
      description: "Custom degree name",
      example: "Especialización en TI",
    }),
    is_current: z.boolean().meta({
      description: "Is current study",
      example: false,
    }),
    start_date: z.string().datetime().nullable().meta({
      description: "Start date",
      example: "2018-01-01T00:00:00Z",
    }),
    end_date: z.string().datetime().nullable().meta({
      description: "End date",
      example: "2022-01-01T00:00:00Z",
    }),
    updated_at: z.string().datetime().meta({
      description: "Update timestamp",
      example: "2024-01-01T00:00:00Z",
    }),
    created_at: z.string().datetime().meta({
      description: "Creation timestamp",
      example: "2024-01-01T00:00:00Z",
    }),
  })
  .meta({
    id: "EducationalInfo",
    description: "Educational info response object",
  });
