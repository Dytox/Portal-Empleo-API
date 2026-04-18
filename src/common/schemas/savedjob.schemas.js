import z from "zod";

export const createSavedJobSchema = z
  .object({
    profile_id: z.number().int().positive().meta({
      description: "Profile ID",
      example: 1,
    }),
    job_post_id: z.number().int().positive().meta({
      description: "Job Post ID",
      example: 1,
    }),
  })
  .meta({
    id: "CreateSavedJobDTO",
    description: "Schema for saving a job",
  });

export const savedJobSchema = z
  .object({
    id: z.number().int().positive().meta({
      description: "Saved Job ID",
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
    created_at: z.string().datetime().meta({
      description: "Creation timestamp",
      example: "2024-01-01T00:00:00Z",
    }),
  })
  .meta({
    id: "SavedJob",
    description: "Saved Job response object",
  });
