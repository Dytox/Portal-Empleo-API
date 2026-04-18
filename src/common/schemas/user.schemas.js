import z from "zod";

export const createUserSchema = z
  .object({
    email: z.string().email("Email must be valid").meta({
      description: "User email address",
      example: "juan@example.com",
    }),
    password_hash: z.string().min(6).meta({
      description: "Password hash",
      example: "$2b$10$...",
    }),
    external_id: z.string().optional().meta({
      description: "External identifier for the user (e.g., from an auth provider)",
      example: "auth0|1234567890",
    }),
    is_blocked: z.boolean().optional().default(false).meta({
      description: "Whether the user is blocked",
      example: false,
    }),
    role_id: z.number().int().positive().meta({
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
    email: z.string().email("Email must be valid").optional().meta({
      description: "User email address",
      example: "newemail@example.com",
    }),
    password_hash: z.string().min(6).optional().meta({
      description: "Password hash",
      example: "$2b$10$...",
    }),
    external_id: z.string().optional().meta({
      description: "External identifier",
      example: "auth0|1234567890",
    }),
    is_blocked: z.boolean().optional().meta({
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
    password_hash: z.string().meta({
      description: "Hashed password",
      example: "$2b$10$...",
    }),
    external_id: z.string().nullable().meta({
      description: "External identifier for the user",
      example: "auth0|1234567890",
    }),
    is_blocked: z.boolean().meta({
      description: "Whether the user is blocked",
      example: false,
    }),
    role_id: z.number().int().positive().meta({
      description: "Role ID",
      example: 1,
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

