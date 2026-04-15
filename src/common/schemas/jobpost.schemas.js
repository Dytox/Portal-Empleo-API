import z from "zod";

export const createJobPostSchema = z
  .object({
    company_id: z.number().int().positive().meta({
      description: "Company ID",
      example: 1,
    }),
    title: z.string().min(1).meta({
      description: "Job title",
      example: "Senior Developer",
    }),
    description: z.string().optional().meta({
      description: "Job description",
      example: "Looking for a senior developer with 5+ years of experience",
    }),
    experience_required_timelapse_id: z.number().int().positive().meta({
      description: "Experience required timelapse ID",
      example: 1,
    }),
    min_salary: z.number().positive().optional().meta({
      description: "Minimum salary",
      example: 1500.00,
    }),
    max_salary: z.number().positive().optional().meta({
      description: "Maximum salary",
      example: 3000.00,
    }),
    status_id: z.number().int().positive().meta({
      description: "Status ID",
      example: 1,
    }),
  })
  .meta({
    id: "CreateJobPostDTO",
    description: "Schema for creating a new job post",
  });

export const updateJobPostSchema = z
  .object({
    id: z.number().int().positive().meta({
      description: "Job post ID",
      example: 1,
    }),
    title: z.string().min(1).optional().meta({
      description: "Job title",
      example: "Senior Developer",
    }),
    description: z.string().optional().meta({
      description: "Job description",
      example: "Looking for a senior developer with 5+ years of experience",
    }),
    experience_required_timelapse_id: z.number().int().positive().optional().meta({
      description: "Experience required timelapse ID",
      example: 1,
    }),
    min_salary: z.number().positive().optional().meta({
      description: "Minimum salary",
      example: 1500.00,
    }),
    max_salary: z.number().positive().optional().meta({
      description: "Maximum salary",
      example: 3000.00,
    }),
    status_id: z.number().int().positive().optional().meta({
      description: "Status ID",
      example: 1,
    }),
  })
  .meta({
    id: "UpdateJobPostDTO",
    description: "Schema for updating a job post",
  });

export const jobPostSchema = z
  .object({
    id: z.number().int().positive().meta({
      description: "Job post ID",
      example: 1,
    }),
    company_id: z.number().int().positive().meta({
      description: "Company ID",
      example: 1,
    }),
    title: z.string().meta({
      description: "Job title",
      example: "Senior Developer",
    }),
    description: z.string().nullable().meta({
      description: "Job description",
      example: "Looking for a senior developer with 5+ years of experience",
    }),
    experience_required_timelapse_id: z.number().int().positive().meta({
      description: "Experience required timelapse ID",
      example: 1,
    }),
    min_salary: z.number().positive().nullable().meta({
      description: "Minimum salary",
      example: 1500.00,
    }),
    max_salary: z.number().positive().nullable().meta({
      description: "Maximum salary",
      example: 3000.00,
    }),
    status_id: z.number().int().positive().meta({
      description: "Status ID",
      example: 1,
    }),
    creation_date: z.string().datetime().meta({
      description: "Creation date",
      example: "2024-01-01T00:00:00Z",
    }),
    update_date: z.string().datetime().meta({
      description: "Update date",
      example: "2024-01-01T00:00:00Z",
    }),
  })
  .meta({
    id: "JobPost",
    description: "Job post response object",
  });
