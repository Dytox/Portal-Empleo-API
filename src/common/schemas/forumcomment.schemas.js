import z from "zod";

export const createForumCommentSchema = z
  .object({
    post_id: z.number().int().positive().meta({
      description: "Forum Post ID",
      example: 1,
    }),
    user_id: z.number().int().positive().meta({
      description: "User ID",
      example: 1,
    }),
    content: z.string().meta({
      description: "Comment content",
      example: "Great post! Here's my perspective...",
    }),
  })
  .meta({
    id: "CreateForumCommentDTO",
    description: "Schema for creating a forum comment",
  });

export const updateForumCommentSchema = z
  .object({
    content: z.string().optional().meta({
      description: "Comment content",
      example: "Great post! Here's my perspective...",
    }),
  })
  .meta({
    id: "UpdateForumCommentDTO",
    description: "Schema for updating a forum comment",
  });

export const forumCommentSchema = z
  .object({
    id: z.number().int().positive().meta({
      description: "Forum Comment ID",
      example: 1,
    }),
    post_id: z.number().int().positive().meta({
      description: "Forum Post ID",
      example: 1,
    }),
    user_id: z.number().int().positive().meta({
      description: "User ID",
      example: 1,
    }),
    content: z.string().meta({
      description: "Comment content",
      example: "Great post! Here's my perspective...",
    }),
    created_at: z.string().datetime().meta({
      description: "Creation timestamp",
      example: "2024-01-01T00:00:00Z",
    }),
  })
  .meta({
    id: "ForumComment",
    description: "Forum Comment response object",
  });
