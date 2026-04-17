import z from "zod";

export const createRoleSchema = z
  .object({
    id: z.number().int().positive().meta({
      description: "Role ID",
      example: 1,
    }),
    name: z.string().min(1).max(50).meta({
      description: "Role name",
      example: "Admin",
    }),
  })
  .meta({
    id: "CreateRoleDTO",
    description: "Schema for creating a new role",
  });

export const updateRoleSchema = z
  .object({
    name: z.string().min(1).max(50).meta({
      description: "Role name",
      example: "Editor",
    }),
  })
  .meta({
    id: "UpdateRoleDTO",
    description: "Schema for updating a role",
  });

export const roleSchema = z
  .object({
    id: z.number().int().positive().meta({
      description: "Role ID",
      example: 1,
    }),
    name: z.string().meta({
      description: "Role name",
      example: "Admin",
    }),
  })
  .meta({
    id: "Role",
    description: "Role response object",
  });
