import { Router } from 'express';
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
companyprofileRouter.post('/company-profiles', createCompanyProfile);
companyprofileRouter.put('/company-profiles/:id', updateCompanyProfile);
companyprofileRouter.delete('/company-profiles/:id', deleteCompanyProfile);

export default companyprofileRouter;
