import z from "zod";

export const createProfileSchema = z
  .object({
    user_id: z.number().int().positive().meta({
      description: "User ID",
      example: 1,
    }),
    first_name: z.string().min(1).max(80).meta({
      description: "First name",
      example: "Juan",
    }),
    last_name: z.string().min(1).max(80).meta({
      description: "Last name",
      example: "Perez",
    }),
    phone: z.string().optional().meta({
      description: "Phone number",
      example: "+50323456789",
    }),
    location: z.string().optional().meta({
      description: "Location",
      example: "San Salvador, El Salvador",
    }),
    external_link: z.string().url().optional().meta({
      description: "External profile link",
      example: "https://linkedin.com/in/juan-perez",
    }),
    cv_url: z.string().url().optional().meta({
      description: "CV file URL",
      example: "https://storage.example.com/cv.pdf",
    }),
    profile_image_url: z.string().url().optional().meta({
      description: "Profile image URL",
      example: "https://storage.example.com/profile.jpg",
    }),
    about_me: z.string().optional().meta({
      description: "About me section",
      example: "I am a software developer",
    }),
    professional_title: z.string().optional().meta({
      description: "Professional title",
      example: "Senior Software Engineer",
    }),
  })
  .meta({
    id: "CreateProfileDTO",
    description: "Schema for creating a new profile",
  });

export const updateProfileSchema = z
  .object({
    first_name: z.string().min(1).max(80).optional().meta({
      description: "First name",
      example: "Juan",
    }),
    last_name: z.string().min(1).max(80).optional().meta({
      description: "Last name",
      example: "Perez",
    }),
    phone: z.string().optional().meta({
      description: "Phone number",
      example: "+50323456789",
    }),
    location: z.string().optional().meta({
      description: "Location",
      example: "San Salvador, El Salvador",
    }),
    external_link: z.string().url().optional().meta({
      description: "External profile link",
      example: "https://linkedin.com/in/juan-perez",
    }),
    cv_url: z.string().url().optional().meta({
      description: "CV file URL",
      example: "https://storage.example.com/cv.pdf",
    }),
    profile_image_url: z.string().url().optional().meta({
      description: "Profile image URL",
      example: "https://storage.example.com/profile.jpg",
    }),
    about_me: z.string().optional().meta({
      description: "About me section",
      example: "I am a software developer",
    }),
    professional_title: z.string().optional().meta({
      description: "Professional title",
      example: "Senior Software Engineer",
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
    first_name: z.string().meta({
      description: "First name",
      example: "Juan",
    }),
    last_name: z.string().meta({
      description: "Last name",
      example: "Perez",
    }),
    phone: z.string().nullable().meta({
      description: "Phone number",
      example: "+50323456789",
    }),
    location: z.string().nullable().meta({
      description: "Location",
      example: "San Salvador, El Salvador",
    }),
    external_link: z.string().url().nullable().meta({
      description: "External profile link",
      example: "https://linkedin.com/in/juan-perez",
    }),
    cv_url: z.string().url().nullable().meta({
      description: "CV file URL",
      example: "https://storage.example.com/cv.pdf",
    }),
    profile_image_url: z.string().url().nullable().meta({
      description: "Profile image URL",
      example: "https://storage.example.com/profile.jpg",
    }),
    about_me: z.string().nullable().meta({
      description: "About me section",
      example: "I am a software developer",
    }),
    professional_title: z.string().nullable().meta({
      description: "Professional title",
      example: "Senior Software Engineer",
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
    id: "Profile",
    description: "Profile response object",
  });
