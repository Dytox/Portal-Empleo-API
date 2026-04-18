import z from "zod";

export const createNotificationSchema = z
  .object({
    user_id: z.number().int().positive().meta({
      description: "User ID",
      example: 1,
    }),
    title: z.string().min(1).max(120).meta({
      description: "Notification title",
      example: "New job match",
    }),
    message: z.string().meta({
      description: "Notification message",
      example: "A new job matching your profile has been posted",
    }),
    is_read: z.boolean().optional().default(false).meta({
      description: "Whether the notification has been read",
      example: false,
    }),
  })
  .meta({
    id: "CreateNotificationDTO",
    description: "Schema for creating a notification",
  });

export const updateNotificationSchema = z
  .object({
    is_read: z.boolean().optional().meta({
      description: "Whether the notification has been read",
      example: true,
    }),
  })
  .meta({
    id: "UpdateNotificationDTO",
    description: "Schema for updating a notification",
  });

export const notificationSchema = z
  .object({
    id: z.number().int().positive().meta({
      description: "Notification ID",
      example: 1,
    }),
    user_id: z.number().int().positive().meta({
      description: "User ID",
      example: 1,
    }),
    title: z.string().meta({
      description: "Notification title",
      example: "New job match",
    }),
    message: z.string().meta({
      description: "Notification message",
      example: "A new job matching your profile has been posted",
    }),
    is_read: z.boolean().meta({
      description: "Whether the notification has been read",
      example: false,
    }),
    created_at: z.string().datetime().meta({
      description: "Creation timestamp",
      example: "2024-01-01T00:00:00Z",
    }),
  })
  .meta({
    id: "Notification",
    description: "Notification response object",
  });
