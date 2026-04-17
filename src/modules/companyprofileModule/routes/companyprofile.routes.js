import { Router } from 'express';
import { validateBody } from '../../../common/middlewares/validateRequest.middleware.js';
import { createCompanyProfileSchema, updateCompanyProfileSchema } from '../../../common/schemas/companyprofile.schemas.js';
import {
  getAllCompanyProfiles,
  getCompanyProfileById,
  getCompanyProfileByUserId,
  createCompanyProfile,
  updateCompanyProfile,
  deleteCompanyProfile
} from '../controllers/companyprofile.controller.js';

const companyprofileRouter = Router();

companyprofileRouter.get('/company-profiles', getAllCompanyProfiles);
companyprofileRouter.get('/company-profiles/:id', getCompanyProfileById);
companyprofileRouter.get('/users/:userId/company-profile', getCompanyProfileByUserId);
companyprofileRouter.post('/company-profiles', validateBody(createCompanyProfileSchema), createCompanyProfile);
companyprofileRouter.put('/company-profiles/:id', validateBody(updateCompanyProfileSchema), updateCompanyProfile);
companyprofileRouter.delete('/company-profiles/:id', deleteCompanyProfile);

export default companyprofileRouter;
