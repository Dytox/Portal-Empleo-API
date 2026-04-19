import z from "zod";

export const createForumReportSchema = z
  .object({
    reporter_user_id: z.number().int().positive().meta({
      description: "ID of the user reporting",
      example: 1,
    }),
    post_id: z.number().int().positive().nullable().optional().meta({
      description: "ID of the reported forum post (if applicable)",
      example: null,
    }),
    comment_id: z.number().int().positive().nullable().optional().meta({
      description: "ID of the reported forum comment (if applicable)",
      example: null,
    }),
    reason_id: z.number().int().positive().meta({
      description: "ID of the report reason",
      example: 1,
    }),
    details: z.string().optional().meta({
      description: "Additional details about the report",
      example: "This comment contains offensive language",
    }),
  })
  .meta({
    id: "CreateForumReportDTO",
    description: "Schema for creating a forum report",
  });

export const updateForumReportSchema = z
  .object({
    status: z
      .enum(["pending", "reviewed", "dismissed", "action_taken"])
      .optional()
      .meta({
        description: "Status of the report",
        example: "reviewed",
      }),
    review_notes: z.string().optional().meta({
      description: "Notes from the reviewer",
      example: "User has been warned",
    }),
    reviewed_by_user_id: z.number().int().positive().nullable().optional().meta({
      description: "ID of the moderator who reviewed the report",
      example: 5,
    }),
  })
  .meta({
    id: "UpdateForumReportDTO",
    description: "Schema for updating a forum report",
  });

export const forumReportSchema = z
  .object({
    id: z.number().int().positive().meta({
      description: "Forum Report ID",
      example: 1,
    }),
    reporter_user_id: z.number().int().positive().meta({
      description: "ID of the user reporting",
      example: 1,
    }),
    post_id: z.number().int().positive().nullable().meta({
      description: "ID of the reported forum post (if applicable)",
      example: null,
    }),
    comment_id: z.number().int().positive().nullable().meta({
      description: "ID of the reported forum comment (if applicable)",
      example: null,
    }),
    reason_id: z.number().int().positive().meta({
      description: "ID of the report reason",
      example: 1,
    }),
    details: z.string().nullable().meta({
      description: "Additional details about the report",
      example: "This comment contains offensive language",
    }),
    status: z
      .enum(["pending", "reviewed", "dismissed", "action_taken"])
      .meta({
        description: "Status of the report",
        example: "pending",
      }),
    created_at: z.string().datetime().meta({
      description: "Creation timestamp",
      example: "2024-01-01T00:00:00Z",
    }),
    reviewed_at: z.string().datetime().nullable().meta({
      description: "Timestamp when the report was reviewed",
      example: null,
    }),
    reviewed_by_user_id: z.number().int().positive().nullable().meta({
      description: "ID of the moderator who reviewed the report",
      example: null,
    }),
    review_notes: z.string().nullable().meta({
      description: "Notes from the reviewer",
      example: null,
    }),
  })
  .meta({
    id: "ForumReport",
    description: "Forum Report response object",
  });
