
import express from 'express';
import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config();

// Import all routers
import userRouter from './modules/userModule/routes/user.routes.js';
import roleRouter from './modules/roleModule/routes/role.routes.js';
import profileRouter from './modules/profileModule/routes/profile.routes.js';
import workexperienceRouter from './modules/workexperienceModule/routes/workexperience.routes.js';
import skillRouter from './modules/skillModule/routes/skill.routes.js';
import educationalinfoRouter from './modules/educationalinfoModule/routes/educationalinfo.routes.js';
import degreeRouter from './modules/degreeModule/routes/degree.routes.js';
import companyprofileRouter from './modules/companyprofileModule/routes/companyprofile.routes.js';
import externalcompanylinksRouter from './modules/externalcompanylinksModule/routes/externalcompanylinks.routes.js';
import additionalinfoRouter from './modules/additionalinfoModule/routes/additionalinfo.routes.js';
import companysizeRouter from './modules/companysizeModule/routes/companysize.routes.js';
import industryRouter from './modules/industryModule/routes/industry.routes.js';
import jobpostRouter from './modules/jobpostModule/routes/jobpost.routes.js';
import experiencerequiredtimelapseRouter from './modules/experiencerequiredtimelapseModule/routes/experiencerequiredtimelapse.routes.js';
import statusRouter from './modules/statusModule/routes/status.routes.js';
import jobalertRouter from './modules/jobalertModule/routes/jobalert.routes.js';
import savedjobRouter from './modules/savedjobsModule/routes/savedjob.routes.js';
import jobpostapplicationRouter from './modules/jobpostapplicationModule/routes/jobpostapplication.routes.js';
import notificationRouter from './modules/notificationModule/routes/notification.routes.js';
import forumpostRouter from './modules/forumpostModule/routes/forumpost.routes.js';
import forumcommentRouter from './modules/forumcommentModule/routes/forumcomment.routes.js';
import companyreviewRouter from './modules/companyreviewModule/routes/companyreview.routes.js';
import resourceRouter from './modules/resourceModule/routes/resource.routes.js';

import { swaggerUi, swaggerSpec } from './common/swagger.js';

const app = express();

// Configurar CORS para desarrollo local
const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:5173', 'http://localhost:5174', 'http://127.0.0.1:3000', 'http://127.0.0.1:3001', 'http://127.0.0.1:5173', 'http://127.0.0.1:8082'],
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req, res) => {
  res.send('¡Hola, mundo UNICAES! El servidor está funcionando correctamente.');
});

// Use all routers
app.use(userRouter);
app.use(roleRouter);
app.use(profileRouter);
app.use(workexperienceRouter);
app.use(skillRouter);
app.use(educationalinfoRouter);
app.use(degreeRouter);
app.use(companyprofileRouter);
app.use(externalcompanylinksRouter);
app.use(additionalinfoRouter);
app.use(companysizeRouter);
app.use(industryRouter);
app.use(jobpostRouter);
app.use(experiencerequiredtimelapseRouter);
app.use(statusRouter);
app.use(jobalertRouter);
app.use(savedjobRouter);
app.use(jobpostapplicationRouter);
app.use(notificationRouter);
app.use(forumpostRouter);
app.use(forumcommentRouter);
app.use(companyreviewRouter);
app.use(resourceRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Servidor corriendo en http://localhost:${process.env.PORT || 3000}`);
});