import z from "zod";

export const createDegreeSchema = z
  .object({
    degree_name: z.string().min(1).meta({
      description: "Degree name",
      example: "Bachelor of Science in Computer Science",
    }),
  })
  .meta({
    id: "CreateDegreeDTO",
    description: "Schema for creating a new degree",
  });

export const updateDegreeSchema = z
  .object({
    id: z.number().int().positive().meta({
      description: "Degree ID",
      example: 1,
    }),
    degree_name: z.string().min(1).meta({
      description: "Degree name",
      example: "Master of Science in Computer Science",
    }),
  })
  .meta({
    id: "UpdateDegreeDTO",
    description: "Schema for updating a degree",
  });

export const degreeSchema = z
  .object({
    id: z.number().int().positive().meta({
      description: "Degree ID",
      example: 1,
    }),
    degree_name: z.string().meta({
      description: "Degree name",
      example: "Bachelor of Science in Computer Science",
    }),
  })
  .meta({
    id: "Degree",
    description: "Degree response object",
  });
