import z from "zod";

export const createCompanyReviewSchema = z
  .object({
    profile_id: z.number().int().positive().meta({
      description: "Profile ID",
      example: 1,
    }),
    company_profile_id: z.number().int().positive().meta({
      description: "Company Profile ID",
      example: 1,
    }),
    rating: z.number().int().min(1).max(5).meta({
      description: "Rating from 1 to 5",
      example: 4,
    }),
    comment: z.string().optional().meta({
      description: "Review comment",
      example: "Great company to work for",
    }),
  })
  .meta({
    id: "CreateCompanyReviewDTO",
    description: "Schema for creating a company review",
  });

export const updateCompanyReviewSchema = z
  .object({
    rating: z.number().int().min(1).max(5).optional().meta({
      description: "Rating from 1 to 5",
      example: 5,
    }),
    comment: z.string().optional().meta({
      description: "Review comment",
      example: "Excellent company culture",
    }),
  })
  .meta({
    id: "UpdateCompanyReviewDTO",
    description: "Schema for updating a company review",
  });

export const companyReviewSchema = z
  .object({
    id: z.number().int().positive().meta({
      description: "Review ID",
      example: 1,
    }),
    profile_id: z.number().int().positive().meta({
      description: "Profile ID",
      example: 1,
    }),
    company_profile_id: z.number().int().positive().meta({
      description: "Company Profile ID",
      example: 1,
    }),
    rating: z.number().int().meta({
      description: "Rating from 1 to 5",
      example: 4,
    }),
    comment: z.string().nullable().meta({
      description: "Review comment",
      example: "Great company to work for",
    }),
    created_at: z.string().datetime().meta({
      description: "Creation timestamp",
      example: "2024-01-01T00:00:00Z",
    }),
  })
  .meta({
    id: "CompanyReview",
    description: "Company Review response object",
  });
