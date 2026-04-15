import { Router } from 'express';
import {
  getAllExternalCompanyLinks,
  getExternalCompanyLinksById,
  createExternalCompanyLinks,
  updateExternalCompanyLinks,
  deleteExternalCompanyLinks
} from '../controllers/externalcompanylinks.controller.js';

const externalcompanylinksRouter = Router();

externalcompanylinksRouter.get('/external-company-links', getAllExternalCompanyLinks);
externalcompanylinksRouter.get('/external-company-links/:id', getExternalCompanyLinksById);
externalcompanylinksRouter.post('/external-company-links', createExternalCompanyLinks);
externalcompanylinksRouter.put('/external-company-links/:id', updateExternalCompanyLinks);
externalcompanylinksRouter.delete('/external-company-links/:id', deleteExternalCompanyLinks);

export default externalcompanylinksRouter;
