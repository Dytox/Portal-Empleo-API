import z from "zod";

export const createJobAlertSchema = z
  .object({
    profile_id: z.number().int().positive().meta({
      description: "Profile ID",
      example: 1,
    }),
    keywords: z.string().optional().meta({
      description: "Keywords to search for",
      example: "JavaScript, React",
    }),
    remote: z.boolean().optional().default(false).meta({
      description: "Alert for remote jobs",
      example: true,
    }),
    onsite: z.boolean().optional().default(false).meta({
      description: "Alert for onsite jobs",
      example: false,
    }),
    hybrid: z.boolean().optional().default(false).meta({
      description: "Alert for hybrid jobs",
      example: true,
    }),
    is_active: z.boolean().optional().default(true).meta({
      description: "Whether the alert is active",
      example: true,
    }),
  })
  .meta({
    id: "CreateJobAlertDTO",
    description: "Schema for creating a new job alert",
  });

export const updateJobAlertSchema = z
  .object({
    keywords: z.string().optional().meta({
      description: "Keywords to search for",
      example: "JavaScript, React",
    }),
    remote: z.boolean().optional().meta({
      description: "Alert for remote jobs",
      example: true,
    }),
    onsite: z.boolean().optional().meta({
      description: "Alert for onsite jobs",
      example: false,
    }),
    hybrid: z.boolean().optional().meta({
      description: "Alert for hybrid jobs",
      example: true,
    }),
    is_active: z.boolean().optional().meta({
      description: "Whether the alert is active",
      example: true,
    }),
  })
  .meta({
    id: "UpdateJobAlertDTO",
    description: "Schema for updating a job alert",
  });

export const jobAlertSchema = z
  .object({
    id: z.number().int().positive().meta({
      description: "Job Alert ID",
      example: 1,
    }),
    profile_id: z.number().int().positive().meta({
      description: "Profile ID",
      example: 1,
    }),
    keywords: z.string().nullable().meta({
      description: "Keywords to search for",
      example: "JavaScript, React",
    }),
    remote: z.boolean().meta({
      description: "Alert for remote jobs",
      example: true,
    }),
    onsite: z.boolean().meta({
      description: "Alert for onsite jobs",
      example: false,
    }),
    hybrid: z.boolean().meta({
      description: "Alert for hybrid jobs",
      example: true,
    }),
    is_active: z.boolean().meta({
      description: "Whether the alert is active",
      example: true,
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
    id: "JobAlert",
    description: "Job Alert response object",
  });
