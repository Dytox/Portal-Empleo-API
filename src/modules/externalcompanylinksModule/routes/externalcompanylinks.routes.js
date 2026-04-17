import { Router } from 'express';
import { validateBody } from '../../../common/middlewares/validateRequest.middleware.js';
import { createExternalCompanyLinksSchema, updateExternalCompanyLinksSchema } from '../../../common/schemas/externalcompanylinks.schemas.js';
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
externalcompanylinksRouter.post('/external-company-links', validateBody(createExternalCompanyLinksSchema), createExternalCompanyLinks);
externalcompanylinksRouter.put('/external-company-links/:id', validateBody(updateExternalCompanyLinksSchema), updateExternalCompanyLinks);
externalcompanylinksRouter.delete('/external-company-links/:id', deleteExternalCompanyLinks);

export default externalcompanylinksRouter;
