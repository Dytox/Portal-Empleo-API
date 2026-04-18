import z from "zod";

export const createJobPostSchema = z
  .object({
    company_profile_id: z.number().int().positive().meta({
      description: "Company profile ID",
      example: 1,
    }),
    title: z.string().min(1).max(150).meta({
      description: "Job title",
      example: "Senior Developer",
    }),
    description: z.string().meta({
      description: "Job description",
      example: "Looking for a senior developer with 5+ years of experience",
    }),
    location: z.string().max(150).optional().meta({
      description: "Job location",
      example: "San Salvador, El Salvador",
    }),
    modality: z.enum(["remote", "onsite", "hybrid"]).optional().meta({
      description: "Work modality",
      example: "remote",
    }),
    job_type: z.string().max(50).optional().meta({
      description: "Job type",
      example: "full-time",
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
    status_id: z.number().int().positive().meta({
      description: "Status ID",
      example: 1,
    }),
  })
  .meta({
    id: "CreateJobPostDTO",
    description: "Schema for creating a job post",
  });

export const updateJobPostSchema = z
  .object({
    title: z.string().min(1).max(150).optional().meta({
      description: "Job title",
      example: "Senior Developer",
    }),
    description: z.string().optional().meta({
      description: "Job description",
      example: "Looking for a senior developer with 5+ years of experience",
    }),
    location: z.string().max(150).optional().meta({
      description: "Job location",
      example: "San Salvador, El Salvador",
    }),
    modality: z.enum(["remote", "onsite", "hybrid"]).optional().meta({
      description: "Work modality",
      example: "hybrid",
    }),
    job_type: z.string().max(50).optional().meta({
      description: "Job type",
      example: "part-time",
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
    company_profile_id: z.number().int().positive().meta({
      description: "Company profile ID",
      example: 1,
    }),
    title: z.string().meta({
      description: "Job title",
      example: "Senior Developer",
    }),
    description: z.string().meta({
      description: "Job description",
      example: "Looking for a senior developer with 5+ years of experience",
    }),
    location: z.string().nullable().meta({
      description: "Job location",
      example: "San Salvador, El Salvador",
    }),
    modality: z.string().nullable().meta({
      description: "Work modality",
      example: "remote",
    }),
    job_type: z.string().nullable().meta({
      description: "Job type",
      example: "full-time",
    }),
    experience_required_timelapse_id: z.number().int().positive().nullable().meta({
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
    id: "JobPost",
    description: "Job post response object",
  });
