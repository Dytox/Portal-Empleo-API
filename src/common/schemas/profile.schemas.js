import z from "zod";

export const createProfileSchema = z
  .object({
    user_id: z.number().int().positive().meta({
      description: "User ID",
      example: 1,
    }),
    name: z.string().min(1).max(50).meta({
      description: "First name",
      example: "Juan",
    }),
    last_name: z.string().min(1).max(50).meta({
      description: "Last name",
      example: "Perez",
    }),
    tel: z.number().int().optional().meta({
      description: "Phone number",
      example: 23456789,
    }),
    external_link: z.string().url().optional().meta({
      description: "External profile link",
      example: "https://linkedin.com/in/juan-perez",
    }),
    cv_uri: z.string().optional().meta({
      description: "CV file URI",
      example: "https://storage.example.com/cv.pdf",
    }),
    about_me: z.string().optional().meta({
      description: "About me section",
      example: "I am a software developer",
    }),
  })
  .meta({
    id: "CreateProfileDTO",
    description: "Schema for creating a new profile",
  });

export const updateProfileSchema = z
  .object({
    name: z.string().min(1).max(50).optional().meta({
      description: "First name",
      example: "Juan",
    }),
    last_name: z.string().min(1).max(50).optional().meta({
      description: "Last name",
      example: "Perez",
    }),
    tel: z.number().int().optional().meta({
      description: "Phone number",
      example: 23456789,
    }),
    external_link: z.string().optional().meta({
      description: "External profile link",
      example: "https://linkedin.com/in/juan-perez",
    }),
    cv_uri: z.string().optional().meta({
      description: "CV file URI",
      example: "https://storage.example.com/cv.pdf",
    }),
    about_me: z.string().optional().meta({
      description: "About me section",
      example: "I am a software developer",
    }),
  })
  .meta({
    id: "UpdateProfileDTO",
    description: "Schema for updating a profile",
  });

export const profileSchema = z
  .object({
    id: z.number().int().positive().meta({
      description: "Profile ID",
      example: 1,
    }),
    user_id: z.number().int().positive().meta({
      description: "User ID",
      example: 1,
    }),
    name: z.string().meta({
      description: "First name",
      example: "Juan",
    }),
    last_name: z.string().meta({
      description: "Last name",
      example: "Perez",
    }),
    tel: z.number().int().nullable().meta({
      description: "Phone number",
      example: 23456789,
    }),
    external_link: z.string().url().nullable().meta({
      description: "External profile link",
      example: "https://linkedin.com/in/juan-perez",
    }),
    cv_uri: z.string().nullable().meta({
      description: "CV file URI",
      example: "https://storage.example.com/cv.pdf",
    }),
    about_me: z.string().nullable().meta({
      description: "About me section",
      example: "I am a software developer",
    }),
    update_date: z.string().datetime().meta({
      description: "Last update date",
      example: "2024-01-01T00:00:00Z",
    }),
    creation_date: z.string().datetime().meta({
      description: "Creation date",
      example: "2024-01-01T00:00:00Z",
    }),
  })
  .meta({
    id: "Profile",
    description: "Profile response object",
  });
