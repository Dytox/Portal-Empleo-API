import z from "zod";

export const createWorkExperienceSchema = z
  .object({
    profile_id: z.number().int().positive().meta({
      description: "Profile ID",
      example: 1,
    }),
    job_title: z.string().min(1).max(120).meta({
      description: "Job title",
      example: "Senior Software Engineer",
    }),
    company_name: z.string().min(1).max(120).meta({
      description: "Company name",
      example: "Tech Company Inc",
    }),
    description: z.string().optional().meta({
      description: "Job description",
      example: "Responsible for developing and maintaining applications...",
    }),
    start_date: z.string().date().meta({
      description: "Start date",
      example: "2020-01-15",
    }),
    end_date: z.string().date().optional().meta({
      description: "End date",
      example: "2023-12-31",
    }),
    is_current: z.boolean().optional().default(false).meta({
      description: "Is this the current job",
      example: true,
    }),
  })
  .meta({
    id: "CreateWorkExperienceDTO",
    description: "Schema for creating work experience",
  });

export const updateWorkExperienceSchema = z
  .object({
    job_title: z.string().min(1).max(120).optional().meta({
      description: "Job title",
      example: "Lead Software Engineer",
    }),
    company_name: z.string().min(1).max(120).optional().meta({
      description: "Company name",
      example: "Tech Company Inc",
    }),
    description: z.string().optional().meta({
      description: "Job description",
      example: "Updated responsibilities...",
    }),
    start_date: z.string().date().optional().meta({
      description: "Start date",
      example: "2020-01-15",
    }),
    end_date: z.string().date().optional().meta({
      description: "End date",
      example: "2024-06-30",
    }),
    is_current: z.boolean().optional().meta({
      description: "Is this the current job",
      example: false,
    }),
  })
  .meta({
    id: "UpdateWorkExperienceDTO",
    description: "Schema for updating work experience",
  });

export const workExperienceSchema = z
  .object({
    id: z.number().int().positive().meta({
      description: "Work Experience ID",
      example: 1,
    }),
    profile_id: z.number().int().positive().meta({
      description: "Profile ID",
      example: 1,
    }),
    job_title: z.string().meta({
      description: "Job title",
      example: "Senior Software Engineer",
    }),
    company_name: z.string().meta({
      description: "Company name",
      example: "Tech Company Inc",
    }),
    description: z.string().nullable().meta({
      description: "Job description",
      example: "Responsible for developing and maintaining applications...",
    }),
    start_date: z.string().meta({
      description: "Start date",
      example: "2020-01-15",
    }),
    end_date: z.string().nullable().meta({
      description: "End date",
      example: "2023-12-31",
    }),
    is_current: z.boolean().meta({
      description: "Is this the current job",
      example: false,
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
    id: "WorkExperience",
    description: "Work Experience response object",
  });
