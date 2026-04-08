import swaggerUi from 'swagger-ui-express';
import { createDocument } from 'zod-openapi';
import {
  createUserSchema,
  getUserParamsSchema,
  userSchema,
  errorResponseSchema,
} from './schemas/user.schemas.js';

const swaggerSpec = createDocument({
  openapi: '3.1.0',
  info: {
    title: 'Portal Trabajo Backend API',
    version: '1.0.0',
    description: 'API documentation for user management endpoints',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Local server',
    },
  ],
  paths: {
    '/users': {
      get: {
        tags: ['Users'],
        summary: 'Get all users',
        responses: {
          '200': {
            description: 'List of users',
            content: {
              'application/json': {
                schema: userSchema.array(),
              },
            },
          },
          '500': {
            description: 'Server error',
            content: {
              'application/json': {
                schema: errorResponseSchema,
              },
            },
          },
        },
      },
      post: {
        tags: ['Users'],
        summary: 'Create a user',
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
            description: 'User created',
            content: {
              'application/json': {
                schema: createUserSchema,
              },
            },
          },
          '400': {
            description: 'Validation error or existing user',
            content: {
              'application/json': {
                schema: errorResponseSchema,
              },
            },
          },
          '500': {
            description: 'Server error',
            content: {
              'application/json': {
                schema: errorResponseSchema,
              },
            },
          },
        },
      },
    },
    '/users/{email}': {
      get: {
        tags: ['Users'],
        summary: 'Get a user by email',
        requestParams: {
          path: getUserParamsSchema,
        },
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
            content: {
              'application/json': {
                schema: errorResponseSchema,
              },
            },
          },
          '400': {
            description: 'Validation error',
            content: {
              'application/json': {
                schema: errorResponseSchema,
              },
            },
          },
          '500': {
            description: 'Server error',
            content: {
              'application/json': {
                schema: errorResponseSchema,
              },
            },
          },
        },
      },
    },
  },
});

export { swaggerUi, swaggerSpec };
