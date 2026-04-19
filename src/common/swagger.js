import swaggerUi from 'swagger-ui-express';
import { createDocument } from 'zod-openapi';

// Import all schemas
import {
  createUserSchema,
  updateUserSchema,
  getUserParamsSchema,
  userSchema,
  errorResponseSchema,
} from './schemas/user.schemas.js';
import {
  createRoleSchema,
  updateRoleSchema,
  roleSchema,
} from './schemas/role.schemas.js';
import {
  createProfileSchema,
  updateProfileSchema,
  profileSchema,
} from './schemas/profile.schemas.js';
import {
  createWorkExperienceSchema,
  updateWorkExperienceSchema,
  workExperienceSchema,
} from './schemas/workexperience.schemas.js';
import {
  createSkillSchema,
  updateSkillSchema,
  createProfileSkillSchema,
  skillSchema,
  profileSkillSchema,
} from './schemas/skill.schemas.js';
import {
  createEducationalInfoSchema,
  updateEducationalInfoSchema,
  educationalInfoSchema,
} from './schemas/educationalinfo.schemas.js';
import {
  createDegreeSchema,
  updateDegreeSchema,
  degreeSchema,
} from './schemas/degree.schemas.js';
import {
  createCompanyProfileSchema,
  updateCompanyProfileSchema,
  companyProfileSchema,
} from './schemas/companyprofile.schemas.js';
import {
  createExternalCompanyLinksSchema,
  updateExternalCompanyLinksSchema,
  externalCompanyLinksSchema,
} from './schemas/externalcompanylinks.schemas.js';
import {
  createAdditionalInfoSchema,
  updateAdditionalInfoSchema,
  additionalInfoSchema,
} from './schemas/additionalinfo.schemas.js';
import {
  createCompanySizeSchema,
  updateCompanySizeSchema,
  companySizeSchema,
} from './schemas/companysize.schemas.js';
import {
  createIndustrySchema,
  updateIndustrySchema,
  industrySchema,
} from './schemas/industry.schemas.js';
import {
  createJobPostSchema,
  updateJobPostSchema,
  jobPostSchema,
} from './schemas/jobpost.schemas.js';
import {
  createExperienceRequiredTimelapsesSchema,
  updateExperienceRequiredTimelapsesSchema,
  experienceRequiredTimelapsesSchema,
} from './schemas/experiencerequiredtimelapse.schemas.js';
import {
  createStatusSchema,
  updateStatusSchema,
  statusSchema,
} from './schemas/status.schemas.js';
import {
  createJobPostApplicationSchema,
  updateJobPostApplicationSchema,
  jobPostApplicationSchema,
} from './schemas/jobpostapplication.schemas.js';
import {
  createForumPostSchema,
  updateForumPostSchema,
  forumPostSchema,
} from './schemas/forumpost.schemas.js';
import {
  createForumCommentSchema,
  updateForumCommentSchema,
  forumCommentSchema,
} from './schemas/forumcomment.schemas.js';
import {
  createReportReasonSchema,
  reportReasonSchema,
} from './schemas/reportreason.schemas.js';
import {
  createForumReportSchema,
  updateForumReportSchema,
  forumReportSchema,
} from './schemas/forumreport.schemas.js';
import {
  createModerationActionSchema,
  moderationActionSchema,
} from './schemas/moderationaction.schemas.js';

const swaggerSpec = createDocument({
  openapi: '3.1.0',
  info: {
    title: 'Portal Trabajo Backend API',
    version: '1.0.0',
    description: 'Comprehensive job portal API with 15 entities covering users, roles, profiles, skills, education, company management, job posts, and more.',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Local development server',
    },
  ],
  paths: {
    // Users
    '/users': {
      get: {
        tags: ['Users'],
        summary: 'Get all users',
        responses: {
          '200': {
            description: 'List of all users',
            content: {
              'application/json': {
                schema: userSchema.array(),
              },
            },
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      post: {
        tags: ['Users'],
        summary: 'Create a new user',
        requestBody: {
          content: {
            'application/json': {
              schema: createUserSchema,
            },
          },
          required: true,
        },
        responses: {
          '201': {
            description: 'User created successfully',
            content: {
              'application/json': {
                schema: userSchema,
              },
            },
          },
          '400': {
            description: 'Validation error or user already exists',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    '/users/{id}': {
      get: {
        tags: ['Users'],
        summary: 'Get a user by ID',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'User found',
            content: {
              'application/json': {
                schema: userSchema,
              },
            },
          },
          '404': {
            description: 'User not found',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      put: {
        tags: ['Users'],
        summary: 'Update a user',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: updateUserSchema,
            },
          },
          required: true,
        },
        responses: {
          '200': {
            description: 'User updated successfully',
            content: {
              'application/json': {
                schema: userSchema,
              },
            },
          },
          '404': {
            description: 'User not found',
          },
          '400': {
            description: 'Validation error',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      delete: {
        tags: ['Users'],
        summary: 'Delete a user',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'User deleted successfully',
          },
          '404': {
            description: 'User not found',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    '/users/email/{email}': {
      get: {
        tags: ['Users'],
        summary: 'Get a user by email',
        parameters: [
          {
            name: 'email',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'email' },
          },
        ],
        responses: {
          '200': {
            description: 'User found',
            content: {
              'application/json': {
                schema: userSchema,
              },
            },
          },
          '404': {
            description: 'User not found',
          },
          '400': {
            description: 'Validation error',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    // Roles
    '/roles': {
      get: {
        tags: ['Roles'],
        summary: 'Get all roles',
        responses: {
          '200': {
            description: 'List of roles',
            content: {
              'application/json': {
                schema: roleSchema.array(),
              },
            },
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      post: {
        tags: ['Roles'],
        summary: 'Create a new role',
        requestBody: {
          content: {
            'application/json': {
              schema: createRoleSchema,
            },
          },
          required: true,
        },
        responses: {
          '201': {
            description: 'Role created successfully',
            content: {
              'application/json': {
                schema: roleSchema,
              },
            },
          },
          '400': {
            description: 'Validation error',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    '/roles/{id}': {
      get: {
        tags: ['Roles'],
        summary: 'Get a role by ID',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'Role found',
            content: {
              'application/json': {
                schema: roleSchema,
              },
            },
          },
          '404': {
            description: 'Role not found',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      put: {
        tags: ['Roles'],
        summary: 'Update a role',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: updateRoleSchema,
            },
          },
          required: true,
        },
        responses: {
          '200': {
            description: 'Role updated successfully',
            content: {
              'application/json': {
                schema: roleSchema,
              },
            },
          },
          '404': {
            description: 'Role not found',
          },
          '400': {
            description: 'Validation error',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      delete: {
        tags: ['Roles'],
        summary: 'Delete a role',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'Role deleted successfully',
          },
          '404': {
            description: 'Role not found',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    // Profiles
    '/profiles': {
      get: {
        tags: ['Profiles'],
        summary: 'Get all user profiles',
        responses: {
          '200': {
            description: 'List of profiles',
            content: {
              'application/json': {
                schema: profileSchema.array(),
              },
            },
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      post: {
        tags: ['Profiles'],
        summary: 'Create a new profile',
        requestBody: {
          content: {
            'application/json': {
              schema: createProfileSchema,
            },
          },
          required: true,
        },
        responses: {
          '201': {
            description: 'Profile created successfully',
            content: {
              'application/json': {
                schema: profileSchema,
              },
            },
          },
          '400': {
            description: 'Validation error',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    '/profiles/{id}': {
      get: {
        tags: ['Profiles'],
        summary: 'Get a profile by ID',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'Profile found',
            content: {
              'application/json': {
                schema: profileSchema,
              },
            },
          },
          '404': {
            description: 'Profile not found',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      put: {
        tags: ['Profiles'],
        summary: 'Update a profile',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: updateProfileSchema,
            },
          },
          required: true,
        },
        responses: {
          '200': {
            description: 'Profile updated successfully',
            content: {
              'application/json': {
                schema: profileSchema,
              },
            },
          },
          '404': {
            description: 'Profile not found',
          },
          '400': {
            description: 'Validation error',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      delete: {
        tags: ['Profiles'],
        summary: 'Delete a profile',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'Profile deleted successfully',
          },
          '404': {
            description: 'Profile not found',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    '/users/{userId}/profile': {
      get: {
        tags: ['Profiles'],
        summary: 'Get profile by user ID',
        parameters: [
          {
            name: 'userId',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'Profile found',
            content: {
              'application/json': {
                schema: profileSchema,
              },
            },
          },
          '404': {
            description: 'Profile not found',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    // Work Experience
    '/work-experiences': {
      get: {
        tags: ['Work Experience'],
        summary: 'Get all work experiences',
        responses: {
          '200': {
            description: 'List of work experiences',
            content: {
              'application/json': {
                schema: workExperienceSchema.array(),
              },
            },
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      post: {
        tags: ['Work Experience'],
        summary: 'Create a new work experience',
        requestBody: {
          content: {
            'application/json': {
              schema: createWorkExperienceSchema,
            },
          },
          required: true,
        },
        responses: {
          '201': {
            description: 'Work experience created successfully',
            content: {
              'application/json': {
                schema: workExperienceSchema,
              },
            },
          },
          '400': {
            description: 'Validation error',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    '/work-experiences/{id}': {
      get: {
        tags: ['Work Experience'],
        summary: 'Get a work experience by ID',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'Work experience found',
            content: {
              'application/json': {
                schema: workExperienceSchema,
              },
            },
          },
          '404': {
            description: 'Work experience not found',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      put: {
        tags: ['Work Experience'],
        summary: 'Update a work experience',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: updateWorkExperienceSchema,
            },
          },
          required: true,
        },
        responses: {
          '200': {
            description: 'Work experience updated successfully',
            content: {
              'application/json': {
                schema: workExperienceSchema,
              },
            },
          },
          '404': {
            description: 'Work experience not found',
          },
          '400': {
            description: 'Validation error',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      delete: {
        tags: ['Work Experience'],
        summary: 'Delete a work experience',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'Work experience deleted successfully',
          },
          '404': {
            description: 'Work experience not found',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    '/profiles/{profileId}/work-experiences': {
      get: {
        tags: ['Work Experience'],
        summary: 'Get work experiences by profile ID',
        parameters: [
          {
            name: 'profileId',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'List of work experiences',
            content: {
              'application/json': {
                schema: workExperienceSchema.array(),
              },
            },
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    // Skills
    '/skills': {
      get: {
        tags: ['Skills'],
        summary: 'Get all skills',
        responses: {
          '200': {
            description: 'List of skills',
            content: {
              'application/json': {
                schema: skillSchema.array(),
              },
            },
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      post: {
        tags: ['Skills'],
        summary: 'Create a new skill',
        requestBody: {
          content: {
            'application/json': {
              schema: createSkillSchema,
            },
          },
          required: true,
        },
        responses: {
          '201': {
            description: 'Skill created successfully',
            content: {
              'application/json': {
                schema: skillSchema,
              },
            },
          },
          '400': {
            description: 'Validation error',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    '/skills/{id}': {
      get: {
        tags: ['Skills'],
        summary: 'Get a skill by ID',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'Skill found',
            content: {
              'application/json': {
                schema: skillSchema,
              },
            },
          },
          '404': {
            description: 'Skill not found',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      put: {
        tags: ['Skills'],
        summary: 'Update a skill',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: updateSkillSchema,
            },
          },
          required: true,
        },
        responses: {
          '200': {
            description: 'Skill updated successfully',
            content: {
              'application/json': {
                schema: skillSchema,
              },
            },
          },
          '404': {
            description: 'Skill not found',
          },
          '400': {
            description: 'Validation error',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      delete: {
        tags: ['Skills'],
        summary: 'Delete a skill',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'Skill deleted successfully',
          },
          '404': {
            description: 'Skill not found',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    '/profile-skills': {
      get: {
        tags: ['Skills'],
        summary: 'Get all profile skills',
        responses: {
          '200': {
            description: 'List of profile skills',
            content: {
              'application/json': {
                schema: profileSkillSchema.array(),
              },
            },
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      post: {
        tags: ['Skills'],
        summary: 'Assign a skill to a profile',
        requestBody: {
          content: {
            'application/json': {
              schema: createProfileSkillSchema,
            },
          },
          required: true,
        },
        responses: {
          '201': {
            description: 'Profile skill created successfully',
            content: {
              'application/json': {
                schema: profileSkillSchema,
              },
            },
          },
          '400': {
            description: 'Validation error',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    '/profile-skills/{id}': {
      get: {
        tags: ['Skills'],
        summary: 'Get a profile skill by ID',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'Profile skill found',
            content: {
              'application/json': {
                schema: profileSkillSchema,
              },
            },
          },
          '404': {
            description: 'Profile skill not found',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      delete: {
        tags: ['Skills'],
        summary: 'Remove a skill from a profile',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'Profile skill deleted successfully',
          },
          '404': {
            description: 'Profile skill not found',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    '/profiles/{profileId}/skills': {
      get: {
        tags: ['Skills'],
        summary: 'Get skills by profile ID',
        parameters: [
          {
            name: 'profileId',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'List of profile skills',
            content: {
              'application/json': {
                schema: profileSkillSchema.array(),
              },
            },
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    // Educational Info
    '/educational-info': {
      get: {
        tags: ['Educational Info'],
        summary: 'Get all educational information',
        responses: {
          '200': {
            description: 'List of educational info',
            content: {
              'application/json': {
                schema: educationalInfoSchema.array(),
              },
            },
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      post: {
        tags: ['Educational Info'],
        summary: 'Create educational information',
        requestBody: {
          content: {
            'application/json': {
              schema: createEducationalInfoSchema,
            },
          },
          required: true,
        },
        responses: {
          '201': {
            description: 'Educational info created successfully',
            content: {
              'application/json': {
                schema: educationalInfoSchema,
              },
            },
          },
          '400': {
            description: 'Validation error',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    '/educational-info/{id}': {
      get: {
        tags: ['Educational Info'],
        summary: 'Get educational info by ID',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'Educational info found',
            content: {
              'application/json': {
                schema: educationalInfoSchema,
              },
            },
          },
          '404': {
            description: 'Educational info not found',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      put: {
        tags: ['Educational Info'],
        summary: 'Update educational info',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: updateEducationalInfoSchema,
            },
          },
          required: true,
        },
        responses: {
          '200': {
            description: 'Educational info updated successfully',
            content: {
              'application/json': {
                schema: educationalInfoSchema,
              },
            },
          },
          '404': {
            description: 'Educational info not found',
          },
          '400': {
            description: 'Validation error',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      delete: {
        tags: ['Educational Info'],
        summary: 'Delete educational info',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'Educational info deleted successfully',
          },
          '404': {
            description: 'Educational info not found',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    '/profiles/{profileId}/educational-info': {
      get: {
        tags: ['Educational Info'],
        summary: 'Get educational info by profile ID',
        parameters: [
          {
            name: 'profileId',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'List of educational info',
            content: {
              'application/json': {
                schema: educationalInfoSchema.array(),
              },
            },
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    // Degrees
    '/degrees': {
      get: {
        tags: ['Degrees'],
        summary: 'Get all degrees',
        responses: {
          '200': {
            description: 'List of degrees',
            content: {
              'application/json': {
                schema: degreeSchema.array(),
              },
            },
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      post: {
        tags: ['Degrees'],
        summary: 'Create a new degree',
        requestBody: {
          content: {
            'application/json': {
              schema: createDegreeSchema,
            },
          },
          required: true,
        },
        responses: {
          '201': {
            description: 'Degree created successfully',
            content: {
              'application/json': {
                schema: degreeSchema,
              },
            },
          },
          '400': {
            description: 'Validation error',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    '/degrees/{id}': {
      get: {
        tags: ['Degrees'],
        summary: 'Get a degree by ID',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'Degree found',
            content: {
              'application/json': {
                schema: degreeSchema,
              },
            },
          },
          '404': {
            description: 'Degree not found',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      put: {
        tags: ['Degrees'],
        summary: 'Update a degree',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: updateDegreeSchema,
            },
          },
          required: true,
        },
        responses: {
          '200': {
            description: 'Degree updated successfully',
            content: {
              'application/json': {
                schema: degreeSchema,
              },
            },
          },
          '404': {
            description: 'Degree not found',
          },
          '400': {
            description: 'Validation error',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      delete: {
        tags: ['Degrees'],
        summary: 'Delete a degree',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'Degree deleted successfully',
          },
          '404': {
            description: 'Degree not found',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    // Company Profiles
    '/company-profiles': {
      get: {
        tags: ['Company Profiles'],
        summary: 'Get all company profiles',
        responses: {
          '200': {
            description: 'List of company profiles',
            content: {
              'application/json': {
                schema: companyProfileSchema.array(),
              },
            },
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      post: {
        tags: ['Company Profiles'],
        summary: 'Create a new company profile',
        requestBody: {
          content: {
            'application/json': {
              schema: createCompanyProfileSchema,
            },
          },
          required: true,
        },
        responses: {
          '201': {
            description: 'Company profile created successfully',
            content: {
              'application/json': {
                schema: companyProfileSchema,
              },
            },
          },
          '400': {
            description: 'Validation error',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    '/company-profiles/{id}': {
      get: {
        tags: ['Company Profiles'],
        summary: 'Get a company profile by ID',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'Company profile found',
            content: {
              'application/json': {
                schema: companyProfileSchema,
              },
            },
          },
          '404': {
            description: 'Company profile not found',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      put: {
        tags: ['Company Profiles'],
        summary: 'Update a company profile',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: updateCompanyProfileSchema,
            },
          },
          required: true,
        },
        responses: {
          '200': {
            description: 'Company profile updated successfully',
            content: {
              'application/json': {
                schema: companyProfileSchema,
              },
            },
          },
          '404': {
            description: 'Company profile not found',
          },
          '400': {
            description: 'Validation error',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      delete: {
        tags: ['Company Profiles'],
        summary: 'Delete a company profile',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'Company profile deleted successfully',
          },
          '404': {
            description: 'Company profile not found',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    '/users/{userId}/company-profile': {
      get: {
        tags: ['Company Profiles'],
        summary: 'Get company profile by user ID',
        parameters: [
          {
            name: 'userId',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'Company profile found',
            content: {
              'application/json': {
                schema: companyProfileSchema,
              },
            },
          },
          '404': {
            description: 'Company profile not found',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    // External Company Links
    '/external-company-links': {
      get: {
        tags: ['External Company Links'],
        summary: 'Get all external company links',
        responses: {
          '200': {
            description: 'List of external company links',
            content: {
              'application/json': {
                schema: externalCompanyLinksSchema.array(),
              },
            },
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      post: {
        tags: ['External Company Links'],
        summary: 'Create external company links',
        requestBody: {
          content: {
            'application/json': {
              schema: createExternalCompanyLinksSchema,
            },
          },
          required: true,
        },
        responses: {
          '201': {
            description: 'External company links created successfully',
            content: {
              'application/json': {
                schema: externalCompanyLinksSchema,
              },
            },
          },
          '400': {
            description: 'Validation error',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    '/external-company-links/{id}': {
      get: {
        tags: ['External Company Links'],
        summary: 'Get external company links by ID',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'External company links found',
            content: {
              'application/json': {
                schema: externalCompanyLinksSchema,
              },
            },
          },
          '404': {
            description: 'External company links not found',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      put: {
        tags: ['External Company Links'],
        summary: 'Update external company links',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: updateExternalCompanyLinksSchema,
            },
          },
          required: true,
        },
        responses: {
          '200': {
            description: 'External company links updated successfully',
            content: {
              'application/json': {
                schema: externalCompanyLinksSchema,
              },
            },
          },
          '404': {
            description: 'External company links not found',
          },
          '400': {
            description: 'Validation error',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      delete: {
        tags: ['External Company Links'],
        summary: 'Delete external company links',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'External company links deleted successfully',
          },
          '404': {
            description: 'External company links not found',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    // Additional Info
    '/additional-info': {
      get: {
        tags: ['Additional Info'],
        summary: 'Get all additional information',
        responses: {
          '200': {
            description: 'List of additional info',
            content: {
              'application/json': {
                schema: additionalInfoSchema.array(),
              },
            },
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      post: {
        tags: ['Additional Info'],
        summary: 'Create additional information',
        requestBody: {
          content: {
            'application/json': {
              schema: createAdditionalInfoSchema,
            },
          },
          required: true,
        },
        responses: {
          '201': {
            description: 'Additional info created successfully',
            content: {
              'application/json': {
                schema: additionalInfoSchema,
              },
            },
          },
          '400': {
            description: 'Validation error',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    '/additional-info/{id}': {
      get: {
        tags: ['Additional Info'],
        summary: 'Get additional info by ID',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'Additional info found',
            content: {
              'application/json': {
                schema: additionalInfoSchema,
              },
            },
          },
          '404': {
            description: 'Additional info not found',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      put: {
        tags: ['Additional Info'],
        summary: 'Update additional info',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: updateAdditionalInfoSchema,
            },
          },
          required: true,
        },
        responses: {
          '200': {
            description: 'Additional info updated successfully',
            content: {
              'application/json': {
                schema: additionalInfoSchema,
              },
            },
          },
          '404': {
            description: 'Additional info not found',
          },
          '400': {
            description: 'Validation error',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      delete: {
        tags: ['Additional Info'],
        summary: 'Delete additional info',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'Additional info deleted successfully',
          },
          '404': {
            description: 'Additional info not found',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    // Company Sizes
    '/company-sizes': {
      get: {
        tags: ['Company Sizes'],
        summary: 'Get all company sizes',
        responses: {
          '200': {
            description: 'List of company sizes',
            content: {
              'application/json': {
                schema: companySizeSchema.array(),
              },
            },
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      post: {
        tags: ['Company Sizes'],
        summary: 'Create a new company size',
        requestBody: {
          content: {
            'application/json': {
              schema: createCompanySizeSchema,
            },
          },
          required: true,
        },
        responses: {
          '201': {
            description: 'Company size created successfully',
            content: {
              'application/json': {
                schema: companySizeSchema,
              },
            },
          },
          '400': {
            description: 'Validation error',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    '/company-sizes/{id}': {
      get: {
        tags: ['Company Sizes'],
        summary: 'Get a company size by ID',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'Company size found',
            content: {
              'application/json': {
                schema: companySizeSchema,
              },
            },
          },
          '404': {
            description: 'Company size not found',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      put: {
        tags: ['Company Sizes'],
        summary: 'Update a company size',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: updateCompanySizeSchema,
            },
          },
          required: true,
        },
        responses: {
          '200': {
            description: 'Company size updated successfully',
            content: {
              'application/json': {
                schema: companySizeSchema,
              },
            },
          },
          '404': {
            description: 'Company size not found',
          },
          '400': {
            description: 'Validation error',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      delete: {
        tags: ['Company Sizes'],
        summary: 'Delete a company size',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'Company size deleted successfully',
          },
          '404': {
            description: 'Company size not found',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    // Industries
    '/industries': {
      get: {
        tags: ['Industries'],
        summary: 'Get all industries',
        responses: {
          '200': {
            description: 'List of industries',
            content: {
              'application/json': {
                schema: industrySchema.array(),
              },
            },
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      post: {
        tags: ['Industries'],
        summary: 'Create a new industry',
        requestBody: {
          content: {
            'application/json': {
              schema: createIndustrySchema,
            },
          },
          required: true,
        },
        responses: {
          '201': {
            description: 'Industry created successfully',
            content: {
              'application/json': {
                schema: industrySchema,
              },
            },
          },
          '400': {
            description: 'Validation error',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    '/industries/{id}': {
      get: {
        tags: ['Industries'],
        summary: 'Get an industry by ID',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'Industry found',
            content: {
              'application/json': {
                schema: industrySchema,
              },
            },
          },
          '404': {
            description: 'Industry not found',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      put: {
        tags: ['Industries'],
        summary: 'Update an industry',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: updateIndustrySchema,
            },
          },
          required: true,
        },
        responses: {
          '200': {
            description: 'Industry updated successfully',
            content: {
              'application/json': {
                schema: industrySchema,
              },
            },
          },
          '404': {
            description: 'Industry not found',
          },
          '400': {
            description: 'Validation error',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      delete: {
        tags: ['Industries'],
        summary: 'Delete an industry',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'Industry deleted successfully',
          },
          '404': {
            description: 'Industry not found',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    // Job Posts
    '/job-posts': {
      get: {
        tags: ['Job Posts'],
        summary: 'Get all job posts',
        responses: {
          '200': {
            description: 'List of job posts',
            content: {
              'application/json': {
                schema: jobPostSchema.array(),
              },
            },
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      post: {
        tags: ['Job Posts'],
        summary: 'Create a new job post',
        requestBody: {
          content: {
            'application/json': {
              schema: createJobPostSchema,
            },
          },
          required: true,
        },
        responses: {
          '201': {
            description: 'Job post created successfully',
            content: {
              'application/json': {
                schema: jobPostSchema,
              },
            },
          },
          '400': {
            description: 'Validation error',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    '/job-posts/{id}': {
      get: {
        tags: ['Job Posts'],
        summary: 'Get a job post by ID',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'Job post found',
            content: {
              'application/json': {
                schema: jobPostSchema,
              },
            },
          },
          '404': {
            description: 'Job post not found',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      put: {
        tags: ['Job Posts'],
        summary: 'Update a job post',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: updateJobPostSchema,
            },
          },
          required: true,
        },
        responses: {
          '200': {
            description: 'Job post updated successfully',
            content: {
              'application/json': {
                schema: jobPostSchema,
              },
            },
          },
          '404': {
            description: 'Job post not found',
          },
          '400': {
            description: 'Validation error',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      delete: {
        tags: ['Job Posts'],
        summary: 'Delete a job post',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'Job post deleted successfully',
          },
          '404': {
            description: 'Job post not found',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    '/companies/{companyId}/job-posts': {
      get: {
        tags: ['Job Posts'],
        summary: 'Get job posts by company ID',
        parameters: [
          {
            name: 'companyId',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'List of job posts',
            content: {
              'application/json': {
                schema: jobPostSchema.array(),
              },
            },
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    // Experience Required Timelapses
    '/experience-required-timelapses': {
      get: {
        tags: ['Experience Timelapses'],
        summary: 'Get all experience required timelapses',
        responses: {
          '200': {
            description: 'List of experience timelapses',
            content: {
              'application/json': {
                schema: experienceRequiredTimelapsesSchema.array(),
              },
            },
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      post: {
        tags: ['Experience Timelapses'],
        summary: 'Create experience required timelapse',
        requestBody: {
          content: {
            'application/json': {
              schema: createExperienceRequiredTimelapsesSchema,
            },
          },
          required: true,
        },
        responses: {
          '201': {
            description: 'Experience timelapse created successfully',
            content: {
              'application/json': {
                schema: experienceRequiredTimelapsesSchema,
              },
            },
          },
          '400': {
            description: 'Validation error',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    '/experience-required-timelapses/{id}': {
      get: {
        tags: ['Experience Timelapses'],
        summary: 'Get experience timelapse by ID',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'Experience timelapse found',
            content: {
              'application/json': {
                schema: experienceRequiredTimelapsesSchema,
              },
            },
          },
          '404': {
            description: 'Experience timelapse not found',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      put: {
        tags: ['Experience Timelapses'],
        summary: 'Update experience timelapse',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: updateExperienceRequiredTimelapsesSchema,
            },
          },
          required: true,
        },
        responses: {
          '200': {
            description: 'Experience timelapse updated successfully',
            content: {
              'application/json': {
                schema: experienceRequiredTimelapsesSchema,
              },
            },
          },
          '404': {
            description: 'Experience timelapse not found',
          },
          '400': {
            description: 'Validation error',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      delete: {
        tags: ['Experience Timelapses'],
        summary: 'Delete experience timelapse',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'Experience timelapse deleted successfully',
          },
          '404': {
            description: 'Experience timelapse not found',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    // Statuses
    '/statuses': {
      get: {
        tags: ['Statuses'],
        summary: 'Get all statuses',
        responses: {
          '200': {
            description: 'List of statuses',
            content: {
              'application/json': {
                schema: statusSchema.array(),
              },
            },
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      post: {
        tags: ['Statuses'],
        summary: 'Create a new status',
        requestBody: {
          content: {
            'application/json': {
              schema: createStatusSchema,
            },
          },
          required: true,
        },
        responses: {
          '201': {
            description: 'Status created successfully',
            content: {
              'application/json': {
                schema: statusSchema,
              },
            },
          },
          '400': {
            description: 'Validation error',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    '/statuses/{id}': {
      get: {
        tags: ['Statuses'],
        summary: 'Get a status by ID',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'Status found',
            content: {
              'application/json': {
                schema: statusSchema,
              },
            },
          },
          '404': {
            description: 'Status not found',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      put: {
        tags: ['Statuses'],
        summary: 'Update a status',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: updateStatusSchema,
            },
          },
          required: true,
        },
        responses: {
          '200': {
            description: 'Status updated successfully',
            content: {
              'application/json': {
                schema: statusSchema,
              },
            },
          },
          '404': {
            description: 'Status not found',
          },
          '400': {
            description: 'Validation error',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      delete: {
        tags: ['Statuses'],
        summary: 'Delete a status',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'Status deleted successfully',
          },
          '404': {
            description: 'Status not found',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    // Job Post Applications
    '/applications': {
      get: {
        tags: ['Job Post Applications'],
        summary: 'Get all job post applications',
        responses: {
          '200': {
            description: 'List of all job post applications',
            content: {
              'application/json': {
                schema: jobPostApplicationSchema.array(),
              },
            },
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      post: {
        tags: ['Job Post Applications'],
        summary: 'Create a new job post application',
        requestBody: {
          content: {
            'application/json': {
              schema: createJobPostApplicationSchema,
            },
          },
          required: true,
        },
        responses: {
          '201': {
            description: 'Application created successfully',
            content: {
              'application/json': {
                schema: jobPostApplicationSchema,
              },
            },
          },
          '400': {
            description: 'Validation error or application already exists',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    '/applications/{id}': {
      get: {
        tags: ['Job Post Applications'],
        summary: 'Get a job post application by ID',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'Application found',
            content: {
              'application/json': {
                schema: jobPostApplicationSchema,
              },
            },
          },
          '404': {
            description: 'Application not found',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      put: {
        tags: ['Job Post Applications'],
        summary: 'Update a job post application',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: updateJobPostApplicationSchema,
            },
          },
          required: true,
        },
        responses: {
          '200': {
            description: 'Application updated successfully',
            content: {
              'application/json': {
                schema: jobPostApplicationSchema,
              },
            },
          },
          '404': {
            description: 'Application not found',
          },
          '400': {
            description: 'Validation error',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      delete: {
        tags: ['Job Post Applications'],
        summary: 'Delete a job post application',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'Application deleted successfully',
          },
          '404': {
            description: 'Application not found',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    '/profiles/{profileId}/applications': {
      get: {
        tags: ['Job Post Applications'],
        summary: 'Get all applications by profile ID',
        parameters: [
          {
            name: 'profileId',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'List of applications for the profile',
            content: {
              'application/json': {
                schema: jobPostApplicationSchema.array(),
              },
            },
          },
          '404': {
            description: 'Profile not found',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    '/job-posts/{jobPostId}/applications': {
      get: {
        tags: ['Job Post Applications'],
        summary: 'Get all applications for a job post',
        parameters: [
          {
            name: 'jobPostId',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'List of applications for the job post',
            content: {
              'application/json': {
                schema: jobPostApplicationSchema.array(),
              },
            },
          },
          '404': {
            description: 'Job post not found',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    // Report Reasons
    '/report-reasons': {
      get: {
        tags: ['Report Reasons'],
        summary: 'Get all report reasons',
        responses: {
          '200': {
            description: 'List of all report reasons',
            content: {
              'application/json': {
                schema: reportReasonSchema.array(),
              },
            },
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      post: {
        tags: ['Report Reasons'],
        summary: 'Create a new report reason',
        requestBody: {
          content: {
            'application/json': {
              schema: createReportReasonSchema,
            },
          },
          required: true,
        },
        responses: {
          '201': {
            description: 'Report reason created successfully',
            content: {
              'application/json': {
                schema: reportReasonSchema,
              },
            },
          },
          '400': {
            description: 'Validation error',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    '/report-reasons/{id}': {
      get: {
        tags: ['Report Reasons'],
        summary: 'Get a report reason by ID',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'Report reason found',
            content: {
              'application/json': {
                schema: reportReasonSchema,
              },
            },
          },
          '404': {
            description: 'Report reason not found',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      delete: {
        tags: ['Report Reasons'],
        summary: 'Delete a report reason',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'Report reason deleted successfully',
          },
          '404': {
            description: 'Report reason not found',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    // Forum Reports
    '/forum/reports': {
      get: {
        tags: ['Forum Reports'],
        summary: 'Get all forum reports',
        responses: {
          '200': {
            description: 'List of all forum reports',
            content: {
              'application/json': {
                schema: forumReportSchema.array(),
              },
            },
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      post: {
        tags: ['Forum Reports'],
        summary: 'Create a new forum report',
        requestBody: {
          content: {
            'application/json': {
              schema: createForumReportSchema,
            },
          },
          required: true,
        },
        responses: {
          '201': {
            description: 'Forum report created successfully',
            content: {
              'application/json': {
                schema: forumReportSchema,
              },
            },
          },
          '400': {
            description: 'Validation error',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    '/forum/reports/{id}': {
      get: {
        tags: ['Forum Reports'],
        summary: 'Get a forum report by ID',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'Forum report found',
            content: {
              'application/json': {
                schema: forumReportSchema,
              },
            },
          },
          '404': {
            description: 'Forum report not found',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      put: {
        tags: ['Forum Reports'],
        summary: 'Update a forum report',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: updateForumReportSchema,
            },
          },
          required: true,
        },
        responses: {
          '200': {
            description: 'Forum report updated successfully',
            content: {
              'application/json': {
                schema: forumReportSchema,
              },
            },
          },
          '404': {
            description: 'Forum report not found',
          },
          '400': {
            description: 'Validation error',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      delete: {
        tags: ['Forum Reports'],
        summary: 'Delete a forum report',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'Forum report deleted successfully',
          },
          '404': {
            description: 'Forum report not found',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    '/forum/reports/status/{status}': {
      get: {
        tags: ['Forum Reports'],
        summary: 'Get forum reports by status',
        parameters: [
          {
            name: 'status',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['pending', 'reviewed', 'dismissed', 'action_taken'] },
          },
        ],
        responses: {
          '200': {
            description: 'List of forum reports with the given status',
            content: {
              'application/json': {
                schema: forumReportSchema.array(),
              },
            },
          },
          '400': {
            description: 'Invalid status',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    '/users/{reporterId}/forum/reports': {
      get: {
        tags: ['Forum Reports'],
        summary: 'Get forum reports by reporter ID',
        parameters: [
          {
            name: 'reporterId',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'List of forum reports by reporter',
            content: {
              'application/json': {
                schema: forumReportSchema.array(),
              },
            },
          },
          '400': {
            description: 'Invalid reporter ID',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    '/forum/posts/{postId}/reports': {
      get: {
        tags: ['Forum Reports'],
        summary: 'Get reports for a specific forum post',
        parameters: [
          {
            name: 'postId',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'List of reports for the post',
            content: {
              'application/json': {
                schema: forumReportSchema.array(),
              },
            },
          },
          '400': {
            description: 'Invalid post ID',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    '/forum/comments/{commentId}/reports': {
      get: {
        tags: ['Forum Reports'],
        summary: 'Get reports for a specific forum comment',
        parameters: [
          {
            name: 'commentId',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'List of reports for the comment',
            content: {
              'application/json': {
                schema: forumReportSchema.array(),
              },
            },
          },
          '400': {
            description: 'Invalid comment ID',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    // Moderation Actions
    '/moderation/actions': {
      get: {
        tags: ['Moderation Actions'],
        summary: 'Get all moderation actions',
        responses: {
          '200': {
            description: 'List of all moderation actions',
            content: {
              'application/json': {
                schema: moderationActionSchema.array(),
              },
            },
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      post: {
        tags: ['Moderation Actions'],
        summary: 'Create a new moderation action',
        requestBody: {
          content: {
            'application/json': {
              schema: createModerationActionSchema,
            },
          },
          required: true,
        },
        responses: {
          '201': {
            description: 'Moderation action created successfully',
            content: {
              'application/json': {
                schema: moderationActionSchema,
              },
            },
          },
          '400': {
            description: 'Validation error',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    '/moderation/actions/{id}': {
      get: {
        tags: ['Moderation Actions'],
        summary: 'Get a moderation action by ID',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'Moderation action found',
            content: {
              'application/json': {
                schema: moderationActionSchema,
              },
            },
          },
          '404': {
            description: 'Moderation action not found',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
      delete: {
        tags: ['Moderation Actions'],
        summary: 'Delete a moderation action',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'Moderation action deleted successfully',
          },
          '404': {
            description: 'Moderation action not found',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    '/forum/reports/{reportId}/moderation/actions': {
      get: {
        tags: ['Moderation Actions'],
        summary: 'Get moderation actions for a specific report',
        parameters: [
          {
            name: 'reportId',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'List of moderation actions for the report',
            content: {
              'application/json': {
                schema: moderationActionSchema.array(),
              },
            },
          },
          '400': {
            description: 'Invalid report ID',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    '/users/{adminId}/moderation/actions': {
      get: {
        tags: ['Moderation Actions'],
        summary: 'Get moderation actions by admin ID',
        parameters: [
          {
            name: 'adminId',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'List of moderation actions by admin',
            content: {
              'application/json': {
                schema: moderationActionSchema.array(),
              },
            },
          },
          '400': {
            description: 'Invalid admin ID',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    '/users/{targetUserId}/moderation/actions/target': {
      get: {
        tags: ['Moderation Actions'],
        summary: 'Get moderation actions affecting a specific user',
        parameters: [
          {
            name: 'targetUserId',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          '200': {
            description: 'List of moderation actions affecting the user',
            content: {
              'application/json': {
                schema: moderationActionSchema.array(),
              },
            },
          },
          '400': {
            description: 'Invalid target user ID',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
    '/moderation/actions/type/{actionType}': {
      get: {
        tags: ['Moderation Actions'],
        summary: 'Get moderation actions by action type',
        parameters: [
          {
            name: 'actionType',
            in: 'path',
            required: true,
            schema: { type: 'string', enum: ['dismiss_report', 'hide_post', 'hide_comment', 'delete_post', 'delete_comment', 'block_user', 'unblock_user', 'warn_user'] },
          },
        ],
        responses: {
          '200': {
            description: 'List of moderation actions by type',
            content: {
              'application/json': {
                schema: moderationActionSchema.array(),
              },
            },
          },
          '400': {
            description: 'Invalid action type',
          },
          '500': {
            description: 'Server error',
          },
        },
      },
    },
  },
});

export { swaggerUi, swaggerSpec };
