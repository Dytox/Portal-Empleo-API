import z from "zod";

export const createExperienceRequiredTimelapsesSchema = z
  .object({
    experience_timelapse_name: z.string().min(1).meta({
      description: "Experience timelapse name",
      example: "2-3 years",
    }),
  })
  .meta({
    id: "CreateExperienceRequiredTimelapsesDTO",
    description: "Schema for creating experience required timelapse",
  });

export const updateExperienceRequiredTimelapsesSchema = z
  .object({
    id: z.number().int().positive().meta({
      description: "Experience timelapse ID",
      example: 1,
    }),
    experience_timelapse_name: z.string().min(1).meta({
      description: "Experience timelapse name",
      example: "3-5 years",
    }),
  })
  .meta({
    id: "UpdateExperienceRequiredTimelapsesDTO",
    description: "Schema for updating experience required timelapse",
  });

export const experienceRequiredTimelapsesSchema = z
  .object({
    id: z.number().int().positive().meta({
      description: "Experience timelapse ID",
      example: 1,
    }),
    experience_timelapse_name: z.string().meta({
      description: "Experience timelapse name",
      example: "2-3 years",
    }),
  })
  .meta({
    id: "ExperienceRequiredTimelapses",
    description: "Experience required timelapse response object",
  });
