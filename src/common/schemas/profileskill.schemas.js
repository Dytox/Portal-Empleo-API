import z from "zod";

// Para trabajo skills/habilidades asociadas a un perfil
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
      description: "Profile Skill ID",
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
    created_at: z.string().datetime().meta({
      description: "Creation timestamp",
      example: "2024-01-01T00:00:00Z",
    }),
  })
  .meta({
    id: "ProfileSkill",
    description: "Profile Skill response object",
  });
