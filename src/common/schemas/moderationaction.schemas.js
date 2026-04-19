import z from "zod";

export const createModerationActionSchema = z
  .object({
    report_id: z.number().int().positive().meta({
      description: "ID of the forum report",
      example: 1,
    }),
    admin_user_id: z.number().int().positive().meta({
      description: "ID of the admin taking the action",
      example: 5,
    }),
    target_user_id: z.number().int().positive().nullable().optional().meta({
      description: "ID of the user affected by the action (if applicable)",
      example: 3,
    }),
    action_type: z
      .enum([
        "dismiss_report",
        "hide_post",
        "hide_comment",
        "delete_post",
        "delete_comment",
        "block_user",
        "unblock_user",
        "warn_user",
      ])
      .meta({
        description: "Type of moderation action taken",
        example: "warn_user",
      }),
    action_notes: z.string().optional().meta({
      description: "Notes about the action taken",
      example: "User warned for inappropriate language",
    }),
  })
  .meta({
    id: "CreateModerationActionDTO",
    description: "Schema for creating a moderation action",
  });

export const moderationActionSchema = z
  .object({
    id: z.number().int().positive().meta({
      description: "Moderation Action ID",
      example: 1,
    }),
    report_id: z.number().int().positive().meta({
      description: "ID of the forum report",
      example: 1,
    }),
    admin_user_id: z.number().int().positive().meta({
      description: "ID of the admin taking the action",
      example: 5,
    }),
    target_user_id: z.number().int().positive().nullable().meta({
      description: "ID of the user affected by the action (if applicable)",
      example: 3,
    }),
    action_type: z
      .enum([
        "dismiss_report",
        "hide_post",
        "hide_comment",
        "delete_post",
        "delete_comment",
        "block_user",
        "unblock_user",
        "warn_user",
      ])
      .meta({
        description: "Type of moderation action taken",
        example: "warn_user",
      }),
    action_notes: z.string().nullable().meta({
      description: "Notes about the action taken",
      example: "User warned for inappropriate language",
    }),
    created_at: z.string().datetime().meta({
      description: "Creation timestamp",
      example: "2024-01-01T00:00:00Z",
    }),
  })
  .meta({
    id: "ModerationAction",
    description: "Moderation Action response object",
  });
