import z from "zod";

export const createStatusSchema = z
  .object({
    status_name: z.string().min(1).meta({
      description: "Status name",
      example: "Active",
    }),
  })
  .meta({
    id: "CreateStatusDTO",
    description: "Schema for creating a new status",
  });

export const updateStatusSchema = z
  .object({
    id: z.number().int().positive().meta({
      description: "Status ID",
      example: 1,
    }),
    status_name: z.string().min(1).meta({
      description: "Status name",
      example: "Inactive",
    }),
  })
  .meta({
    id: "UpdateStatusDTO",
    description: "Schema for updating a status",
  });

export const statusSchema = z
  .object({
    id: z.number().int().positive().meta({
      description: "Status ID",
      example: 1,
    }),
    status_name: z.string().meta({
      description: "Status name",
      example: "Active",
    }),
  })
  .meta({
    id: "Status",
    description: "Status response object",
  });
