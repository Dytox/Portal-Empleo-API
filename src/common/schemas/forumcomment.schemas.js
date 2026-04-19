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
    parent_comment_id: z.number().int().positive().nullable().optional().meta({
      description: "Parent comment ID (for nested comments)",
      example: null,
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
    is_hidden: z.boolean().optional().meta({
      description: "Whether the comment is hidden",
      example: false,
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
    parent_comment_id: z.number().int().positive().nullable().meta({
      description: "Parent comment ID (for nested comments)",
      example: null,
    }),
    is_hidden: z.boolean().meta({
      description: "Whether the comment is hidden",
      example: false,
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
