import z from "zod";

export const createJobPostApplicationSchema = z
  .object({
    profile_id: z.number().int().positive().meta({
      description: "Profile ID",
      example: 1,
    }),
    job_post_id: z.number().int().positive().meta({
      description: "Job Post ID",
      example: 1,
    }),
    application_status: z.enum(["submitted", "reviewed", "interview", "rejected", "accepted"]).optional().default("submitted").meta({
      description: "Application status",
      example: "submitted",
    }),
    notes: z.string().optional().meta({
      description: "Additional notes",
      example: "Great opportunity",
    }),
  })
  .meta({
    id: "CreateJobPostApplicationDTO",
    description: "Schema for creating a job application",
  });

export const updateJobPostApplicationSchema = z
  .object({
    application_status: z.enum(["submitted", "reviewed", "interview", "rejected", "accepted"]).optional().meta({
      description: "Application status",
      example: "reviewed",
    }),
    notes: z.string().optional().meta({
      description: "Additional notes",
      example: "Pending interview",
    }),
  })
  .meta({
    id: "UpdateJobPostApplicationDTO",
    description: "Schema for updating a job application",
  });

export const jobPostApplicationSchema = z
  .object({
    id: z.number().int().positive().meta({
      description: "Application ID",
      example: 1,
    }),
    profile_id: z.number().int().positive().meta({
      description: "Profile ID",
      example: 1,
    }),
    job_post_id: z.number().int().positive().meta({
      description: "Job Post ID",
      example: 1,
    }),
    application_status: z.string().meta({
      description: "Application status",
      example: "submitted",
    }),
    application_date: z.string().datetime().meta({
      description: "Application date",
      example: "2024-01-01T00:00:00Z",
    }),
    notes: z.string().nullable().meta({
      description: "Additional notes",
      example: "Great opportunity",
    }),
  })
  .meta({
    id: "JobPostApplication",
    description: "Job Post Application response object",
  });
