import z from "zod";

export const createResourceSchema = z
  .object({
    title: z.string().min(1).max(150).meta({
      description: "Resource title",
      example: "JavaScript Best Practices",
    }),
    description: z.string().optional().meta({
      description: "Resource description",
      example: "A comprehensive guide to JavaScript best practices",
    }),
    resource_type: z.string().optional().meta({
      description: "Resource type (e.g., article, video, course)",
      example: "article",
    }),
    url: z.string().url().meta({
      description: "Resource URL",
      example: "https://example.com/resource",
    }),
    image_url: z.string().url().optional().meta({
      description: "Resource image URL",
      example: "https://example.com/image.jpg",
    }),
  })
  .meta({
    id: "CreateResourceDTO",
    description: "Schema for creating a resource",
  });

export const updateResourceSchema = z
  .object({
    title: z.string().min(1).max(150).optional().meta({
      description: "Resource title",
      example: "JavaScript Best Practices",
    }),
    description: z.string().optional().meta({
      description: "Resource description",
      example: "A comprehensive guide to JavaScript best practices",
    }),
    resource_type: z.string().optional().meta({
      description: "Resource type (e.g., article, video, course)",
      example: "article",
    }),
    url: z.string().url().optional().meta({
      description: "Resource URL",
      example: "https://example.com/resource",
    }),
    image_url: z.string().url().optional().meta({
      description: "Resource image URL",
      example: "https://example.com/image.jpg",
    }),
  })
  .meta({
    id: "UpdateResourceDTO",
    description: "Schema for updating a resource",
  });

export const resourceSchema = z
  .object({
    id: z.number().int().positive().meta({
      description: "Resource ID",
      example: 1,
    }),
    title: z.string().meta({
      description: "Resource title",
      example: "JavaScript Best Practices",
    }),
    description: z.string().nullable().meta({
      description: "Resource description",
      example: "A comprehensive guide to JavaScript best practices",
    }),
    resource_type: z.string().nullable().meta({
      description: "Resource type (e.g., article, video, course)",
      example: "article",
    }),
    url: z.string().url().meta({
      description: "Resource URL",
      example: "https://example.com/resource",
    }),
    image_url: z.string().url().nullable().meta({
      description: "Resource image URL",
      example: "https://example.com/image.jpg",
    }),
    created_at: z.string().datetime().meta({
      description: "Creation timestamp",
      example: "2024-01-01T00:00:00Z",
    }),
  })
  .meta({
    id: "Resource",
    description: "Resource response object",
  });
