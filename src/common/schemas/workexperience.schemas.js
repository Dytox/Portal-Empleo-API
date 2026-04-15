import z from "zod";

export const createWorkExperienceSchema = z
  .object({
    profile_id: z.number().int().positive().meta({
      description: "Profile ID",
      example: 1,
    }),
    title: z.string().min(1).meta({
      description: "Job title",
      example: "Senior Developer",
    }),
    description: z.string().optional().meta({
      description: "Job description",
      example: "Led development of new features",
    }),
    company: z.string().min(1).meta({
      description: "Company name",
      example: "TechCorp",
    }),
    start_date: z.string().datetime().meta({
      description: "Start date",
      example: "2020-01-01T00:00:00Z",
    }),
    end_date: z.string().datetime().optional().meta({
      description: "End date",
      example: "2023-01-01T00:00:00Z",
    }),
  })
  .meta({
    id: "CreateWorkExperienceDTO",
    description: "Schema for creating a new work experience",
  });

export const updateWorkExperienceSchema = z
  .object({
    id: z.number().int().positive().meta({
      description: "Work experience ID",
      example: 1,
    }),
    title: z.string().min(1).optional().meta({
      description: "Job title",
      example: "Senior Developer",
    }),
    description: z.string().optional().meta({
      description: "Job description",
      example: "Led development of new features",
    }),
    company: z.string().min(1).optional().meta({
      description: "Company name",
      example: "TechCorp",
    }),
    start_date: z.string().datetime().optional().meta({
      description: "Start date",
      example: "2020-01-01T00:00:00Z",
    }),
    end_date: z.string().datetime().optional().meta({
      description: "End date",
      example: "2023-01-01T00:00:00Z",
    }),
  })
  .meta({
    id: "UpdateWorkExperienceDTO",
    description: "Schema for updating work experience",
  });

export const workExperienceSchema = z
  .object({
    id: z.number().int().positive().meta({
      description: "Work experience ID",
      example: 1,
    }),
    profile_id: z.number().int().positive().meta({
      description: "Profile ID",
      example: 1,
    }),
    title: z.string().meta({
      description: "Job title",
      example: "Senior Developer",
    }),
    description: z.string().nullable().meta({
      description: "Job description",
      example: "Led development of new features",
    }),
    company: z.string().meta({
      description: "Company name",
      example: "TechCorp",
    }),
    start_date: z.string().datetime().nullable().meta({
      description: "Start date",
      example: "2020-01-01T00:00:00Z",
    }),
    end_date: z.string().datetime().nullable().meta({
      description: "End date",
      example: "2023-01-01T00:00:00Z",
    }),
    creation_date: z.string().datetime().nullable().meta({
      description: "Creation date",
      example: "2024-01-01T00:00:00Z",
    }),
    update_date: z.string().datetime().nullable().meta({
      description: "Update date",
      example: "2024-01-01T00:00:00Z",
    }),
  })
  .meta({
    id: "WorkExperience",
    description: "Work experience response object",
  });
