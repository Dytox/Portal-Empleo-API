import z from "zod";

export const createForumPostSchema = z
  .object({
    user_id: z.number().int().positive().meta({
      description: "User ID",
      example: 1,
    }),
    title: z.string().min(1).max(150).meta({
      description: "Post title",
      example: "Tips for successful interviews",
    }),
    content: z.string().meta({
      description: "Post content",
      example: "Here are some tips for preparing for interviews...",
    }),
    category: z.string().optional().meta({
      description: "Post category",
      example: "interviews",
    }),
  })
  .meta({
    id: "CreateForumPostDTO",
    description: "Schema for creating a forum post",
  });

export const updateForumPostSchema = z
  .object({
    title: z.string().min(1).max(150).optional().meta({
      description: "Post title",
      example: "Tips for successful interviews",
    }),
    content: z.string().optional().meta({
      description: "Post content",
      example: "Here are some tips for preparing for interviews...",
    }),
    category: z.string().optional().meta({
      description: "Post category",
      example: "interviews",
    }),
    is_locked: z.boolean().optional().meta({
      description: "Whether the post is locked",
      example: false,
    }),
    is_hidden: z.boolean().optional().meta({
      description: "Whether the post is hidden",
      example: false,
    }),
  })
  .meta({
    id: "UpdateForumPostDTO",
    description: "Schema for updating a forum post",
  });

export const forumPostSchema = z
  .object({
    id: z.number().int().positive().meta({
      description: "Forum Post ID",
      example: 1,
    }),
    user_id: z.number().int().positive().meta({
      description: "User ID",
      example: 1,
    }),
    title: z.string().meta({
      description: "Post title",
      example: "Tips for successful interviews",
    }),
    content: z.string().meta({
      description: "Post content",
      example: "Here are some tips for preparing for interviews...",
    }),
    category: z.string().nullable().meta({
      description: "Post category",
      example: "interviews",
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
    id: "ForumPost",
    description: "Forum Post response object",
  });
