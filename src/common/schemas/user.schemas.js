import z from "zod";

export const createUserSchema = z
  .object({
    email: z.string().email("Email must be valid").meta({
      description: "User email address",
      example: "juan@example.com",
    }),
    external_id: z.string().meta({
      description: "External identifier for the user (e.g., from an auth provider)",
      example: "auth0|1234567890",
    }),
    is_bloqued: z.boolean().optional().meta({
      description: "Whether the user is blocked",
      example: false,
    }),
    role_id: z.number().int().positive().optional().meta({
      description: "Role ID",
      example: 1,
    }),
  })
  .meta({
    id: "CreateUserDTO",
    description: "Schema for creating a new user",
  });

export const updateUserSchema = z
  .object({
    id: z.number().int().positive().meta({
      description: "User ID",
      example: 1,
    }),
    email: z.string().email("Email must be valid").optional().meta({
      description: "User email address",
      example: "newemail@example.com",
    }),
    is_bloqued: z.boolean().optional().meta({
      description: "Whether the user is blocked",
      example: false,
    }),
    role_id: z.number().int().positive().optional().meta({
      description: "Role ID",
      example: 1,
    }),
  })
  .meta({
    id: "UpdateUserDTO",
    description: "Schema for updating a user",
  });

export const getUserParamsSchema = z
  .object({
    email: z.string().email("Email must be valid").meta({
      description: "Email used to identify the user",
      example: "juan@example.com",
    }),
  })
  .meta({
    id: "GetUserParamsDTO",
    description: "Path parameters for finding a user by email",
  });

export const userSchema = z
  .object({
    id: z.number().int().positive().meta({
      description: "Unique user identifier",
      example: 1,
    }),
    email: z.string().email().meta({
      description: "User email address",
      example: "juan@example.com",
    }),
    external_id: z.string().meta({
      description: "External identifier for the user",
      example: "auth0|1234567890",
    }),
    is_bloqued: z.boolean().meta({
      description: "Whether the user is blocked",
      example: false,
    }),
    role_id: z.number().int().positive().meta({
      description: "Role ID",
      example: 1,
    }),
    creation_date: z.string().datetime().meta({
      description: "Creation date",
      example: "2024-01-01T00:00:00Z",
    }),
  })
  .meta({
    id: "User",
    description: "User response object",
  });

export const errorResponseSchema = z
  .object({
    error: z.string().meta({
      description: "Error message",
      example: "User not found",
    }),
  })
  .meta({
    id: "ErrorResponse",
    description: "Standard error response",
  });
