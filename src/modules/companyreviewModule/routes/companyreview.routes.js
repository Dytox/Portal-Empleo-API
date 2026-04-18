import { Router } from 'express';
import { validateBody } from '../../../common/middlewares/validateRequest.middleware.js';
import { createCompanyReviewSchema, updateCompanyReviewSchema } from '../../../common/schemas/companyreview.schemas.js';
import {
  getAllCompanyReviews,
  getCompanyReviewById,
  getCompanyReviewsByCompanyId,
  getCompanyReviewsByProfileId,
  createCompanyReview,
  updateCompanyReview,
  deleteCompanyReview
} from '../controllers/companyreview.controller.js';

const companyreviewRouter = Router();

// Get all company reviews
companyreviewRouter.get('/company-reviews', getAllCompanyReviews);

// Get company review by ID
companyreviewRouter.get('/company-reviews/:id', getCompanyReviewById);

// Get company reviews by company ID
companyreviewRouter.get('/companies/:companyId/reviews', getCompanyReviewsByCompanyId);

// Get company reviews by profile ID
companyreviewRouter.get('/profiles/:profileId/company-reviews', getCompanyReviewsByProfileId);

// Create company review
companyreviewRouter.post('/company-reviews', validateBody(createCompanyReviewSchema), createCompanyReview);

// Update company review
companyreviewRouter.put('/company-reviews/:id', validateBody(updateCompanyReviewSchema), updateCompanyReview);

// Delete company review
companyreviewRouter.delete('/company-reviews/:id', deleteCompanyReview);

export default companyreviewRouter;
