import { Router } from 'express';
import { validateBody } from '../../../common/middlewares/validateRequest.middleware.js';
import { createSkillSchema, updateSkillSchema, createProfileSkillSchema } from '../../../common/schemas/skill.schemas.js';
import {
  getAllSkills,
  getSkillById,
  createSkill,
  updateSkill,
  deleteSkill,
  getAllProfileSkills,
  getProfileSkillById,
  getProfileSkillsByProfileId,
  createProfileSkill,
  deleteProfileSkill
} from '../controllers/skill.controller.js';

const skillRouter = Router();

// Skills routes
skillRouter.get('/skills', getAllSkills);
skillRouter.get('/skills/:id', getSkillById);
skillRouter.post('/skills', validateBody(createSkillSchema), createSkill);
skillRouter.put('/skills/:id', validateBody(updateSkillSchema), updateSkill);
skillRouter.delete('/skills/:id', deleteSkill);

// Profile Skills routes
skillRouter.get('/profile-skills', getAllProfileSkills);
skillRouter.get('/profile-skills/:id', getProfileSkillById);
skillRouter.get('/profiles/:profileId/skills', getProfileSkillsByProfileId);
skillRouter.post('/profile-skills', validateBody(createProfileSkillSchema), createProfileSkill);
skillRouter.delete('/profile-skills/:id', deleteProfileSkill);

export default skillRouter;
