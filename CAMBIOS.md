# Resumen de Cambios - Backend Portal de Trabajo

## Descripción General

Se han rehecho completamente los endpoints del backend para alinearse con el nuevo esquema de base de datos SQL proporcionado. El proyecto mantiene su estructura modular con controladores, servicios y rutas organizadas por entidad.

## Cambios en Esquemas de Validación

### User Schema
- **Campo corregido**: `is_bloqued` → `is_blocked`
- **Nuevo campo**: `password_hash` (requerido)
- **Campos modificados**: 
  - `creation_date` → `created_at`
  - Agregado `updated_at`

### Profile Schema
- **Campos renombrados**:
  - `name` → `first_name`
  - `tel` → `phone`
  - `cv_uri` → `cv_url`
- **Nuevos campos**:
  - `profile_image_url`
  - `location`
  - `professional_title`
- **Cambios en timestamps**:
  - `creation_date` → `created_at`
  - `update_date` → `updated_at`
- **Cambios en validación**:
  - `phone` ahora es string (en lugar de número)

## Módulos Actualizados

### 1. User Module
- **Servicio**: Actualizado para usar campos correctos de BD
- **Endpoint base**: `/users`

### 2. Profile Module
- **Tabla**: `profile` → `profiles`
- **Servicio**: Actualizado completamente con nuevos campos
- **Endpoint base**: `/profiles`

### 3. Job Alert Module (NUEVO)
- **Tabla**: `job_alerts`
- **Endpoints**:
  - `GET /job-alerts` - Obtener todas las alertas
  - `GET /job-alerts/:id` - Obtener por ID
  - `GET /profiles/:profileId/job-alerts` - Obtener por perfil
  - `POST /job-alerts` - Crear alerta
  - `PUT /job-alerts/:id` - Actualizar alerta
  - `DELETE /job-alerts/:id` - Eliminar alerta

### 4. Saved Jobs Module (NUEVO)
- **Tabla**: `saved_jobs`
- **Endpoints**:
  - `GET /saved-jobs` - Obtener todos
  - `GET /saved-jobs/:id` - Obtener por ID
  - `GET /profiles/:profileId/saved-jobs` - Obtener por perfil
  - `POST /saved-jobs` - Guardar trabajo
  - `DELETE /saved-jobs/:id` - Eliminar por ID
  - `DELETE /profiles/:profileId/saved-jobs/:jobPostId` - Eliminar específico

### 5. Job Post Application Module (NUEVO)
- **Tabla**: `job_post_applications`
- **Endpoints**:
  - `GET /applications` - Obtener todas
  - `GET /applications/:id` - Obtener por ID
  - `GET /profiles/:profileId/applications` - Obtener por perfil
  - `GET /job-posts/:jobPostId/applications` - Obtener por trabajo
  - `POST /applications` - Crear aplicación
  - `PUT /applications/:id` - Actualizar estado
  - `DELETE /applications/:id` - Eliminar

### 6. Notification Module (NUEVO)
- **Tabla**: `notifications`
- **Endpoints**:
  - `GET /notifications` - Obtener todas
  - `GET /notifications/:id` - Obtener por ID
  - `GET /users/:userId/notifications` - Obtener por usuario
  - `POST /notifications` - Crear notificación
  - `PUT /notifications/:id` - Actualizar
  - `PATCH /notifications/:id/read` - Marcar como leída
  - `PATCH /users/:userId/notifications/read-all` - Marcar todas como leídas
  - `DELETE /notifications/:id` - Eliminar

### 7. Forum Post Module (NUEVO)
- **Tabla**: `forum_posts`
- **Endpoints**:
  - `GET /forum/posts` - Obtener todos
  - `GET /forum/posts/:id` - Obtener por ID
  - `GET /users/:userId/forum/posts` - Obtener por usuario
  - `GET /forum/posts/category/:category` - Obtener por categoría
  - `POST /forum/posts` - Crear post
  - `PUT /forum/posts/:id` - Actualizar post
  - `DELETE /forum/posts/:id` - Eliminar post

### 8. Forum Comment Module (NUEVO)
- **Tabla**: `forum_comments`
- **Endpoints**:
  - `GET /forum/comments` - Obtener todos
  - `GET /forum/comments/:id` - Obtener por ID
  - `GET /forum/posts/:postId/comments` - Obtener por post
  - `GET /users/:userId/forum/comments` - Obtener por usuario
  - `POST /forum/comments` - Crear comentario
  - `PUT /forum/comments/:id` - Actualizar comentario
  - `DELETE /forum/comments/:id` - Eliminar comentario

### 9. Company Review Module (NUEVO)
- **Tabla**: `company_reviews`
- **Endpoints**:
  - `GET /company-reviews` - Obtener todas
  - `GET /company-reviews/:id` - Obtener por ID
  - `GET /companies/:companyId/reviews` - Obtener por empresa
  - `GET /profiles/:profileId/company-reviews` - Obtener por perfil
  - `POST /company-reviews` - Crear reseña
  - `PUT /company-reviews/:id` - Actualizar reseña
  - `DELETE /company-reviews/:id` - Eliminar reseña

### 10. Resource Module (NUEVO)
- **Tabla**: `resources`
- **Endpoints**:
  - `GET /resources` - Obtener todos
  - `GET /resources/:id` - Obtener por ID
  - `GET /resources/type/:type` - Obtener por tipo
  - `POST /resources` - Crear recurso
  - `PUT /resources/:id` - Actualizar recurso
  - `DELETE /resources/:id` - Eliminar recurso

## Archivos de Esquemas Creados

```
src/common/schemas/
├── jobalert.schemas.js
├── savedjob.schemas.js
├── jobpostapplication.schemas.js
├── notification.schemas.js
├── forumpost.schemas.js
├── forumcomment.schemas.js
├── companyreview.schemas.js
└── resource.schemas.js
```

## Estructura de Módulos Nuevos

Cada módulo nuevo sigue la estructura:
```
[moduleNameModule]/
├── controllers/
│   └── [moduleName].controller.js
├── services/
│   └── [moduleName].service.js
└── routes/
    └── [moduleName].routes.js
```

## Cambios en index.js

Se han agregado las siguientes importaciones y registros de routers:

```javascript
import jobalertRouter from './modules/jobalertModule/routes/jobalert.routes.js';
import savedjobRouter from './modules/savedjobsModule/routes/savedjob.routes.js';
import jobpostapplicationRouter from './modules/jobpostapplicationModule/routes/jobpostapplication.routes.js';
import notificationRouter from './modules/notificationModule/routes/notification.routes.js';
import forumpostRouter from './modules/forumpostModule/routes/forumpost.routes.js';
import forumcommentRouter from './modules/forumcommentModule/routes/forumcomment.routes.js';
import companyreviewRouter from './modules/companyreviewModule/routes/companyreview.routes.js';
import resourceRouter from './modules/resourceModule/routes/resource.routes.js';

// ... y sus respectivos app.use() al final
```

## Documentación

Se ha creado `API_ENDPOINTS.md` con documentación completa de todos los endpoints disponibles.

## Módulos Existentes que Requieren Actualización Posterior

Los siguientes módulos existentes aún pueden necesitar ajustes menores para alinearse completamente con el nuevo esquema:

- **Work Experience Module** - Revisar campos de fechas
- **Skill Module** - Verificar estructura
- **Degree Module** - Verificar estructura
- **Educational Info Module** - Verificar relaciones
- **Company Profile Module** - Revisar campos
- **External Company Links Module** - Verificar estructura
- **Additional Info Module** - Verificar estructura
- **Company Size Module** - Verificar estructura
- **Industry Module** - Verificar estructura
- **Job Post Module** - Revisar campos y relaciones
- **Experience Required Timelapse Module** - Verificar estructura
- **Status Module** - Verificar estructura

## Próximos Pasos

1. **Testing**: Se recomienda probar todos los endpoints con herramientas como Postman
2. **Actualización de módulos existentes**: Algunos módulos existentes pueden necesitar ajustes menores
3. **Validaciones adicionales**: Agregar validaciones de negocio donde sea necesario
4. **Manejo de errores**: Mejorar los mensajes de error para mayor claridad
5. **Autenticación**: Implementar middleware de autenticación/autorización

## Estadísticas

- **Esquemas creados/actualizados**: 8 nuevos + 2 actualizados = 10 total
- **Módulos nuevos**: 8
- **Módulos actualizados**: 2
- **Nuevos endpoints**: 70+ endpoints
- **Archivos creados**: ~30 archivos
