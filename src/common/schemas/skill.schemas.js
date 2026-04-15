import z from "zod";

export const createSkillSchema = z
  .object({
    skill_name: z.string().min(1).max(50).meta({
      description: "Skill name",
      example: "JavaScript",
    }),
  })
  .meta({
    id: "CreateSkillDTO",
    description: "Schema for creating a new skill",
  });

export const updateSkillSchema = z
  .object({
    id: z.number().int().positive().meta({
      description: "Skill ID",
      example: 1,
    }),
    skill_name: z.string().min(1).max(50).meta({
      description: "Skill name",
      example: "TypeScript",
    }),
  })
  .meta({
    id: "UpdateSkillDTO",
    description: "Schema for updating a skill",
  });

export const skillSchema = z
  .object({
    id: z.number().int().positive().meta({
      description: "Skill ID",
      example: 1,
    }),
    skill_name: z.string().meta({
      description: "Skill name",
      example: "JavaScript",
    }),
  })
  .meta({
    id: "Skill",
    description: "Skill response object",
  });

export const createProfileSkillSchema = z
  .object({
    profile_id: z.number().int().positive().meta({
      description: "Profile ID",
      example: 1,
    }),
    skill_id: z.number().int().positive().meta({
      description: "Skill ID",
      example: 1,
    }),
  })
  .meta({
    id: "CreateProfileSkillDTO",
    description: "Schema for adding a skill to a profile",
  });

export const profileSkillSchema = z
  .object({
    id: z.number().int().positive().meta({
      description: "Profile skill ID",
      example: 1,
    }),
    profile_id: z.number().int().positive().meta({
      description: "Profile ID",
      example: 1,
    }),
    skill_id: z.number().int().positive().meta({
      description: "Skill ID",
      example: 1,
    }),
    update_date: z.string().datetime().meta({
      description: "Update date",
      example: "2024-01-01T00:00:00Z",
    }),
    creation_date: z.string().datetime().meta({
      description: "Creation date",
      example: "2024-01-01T00:00:00Z",
    }),
  })
  .meta({
    id: "ProfileSkill",
    description: "Profile skill response object",
  });
