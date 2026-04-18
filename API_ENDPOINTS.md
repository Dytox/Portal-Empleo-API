# API Endpoints Documentation

Esta es una documentación completa de todos los endpoints disponibles en el backend del portal de trabajo.

## Tabla de Contenidos

1. [Users](#users)
2. [Roles](#roles)
3. [Profiles](#profiles)
4. [Work Experience](#work-experience)
5. [Skills](#skills)
6. [Educational Info](#educational-info)
7. [Degrees](#degrees)
8. [Job Alerts](#job-alerts)
9. [Saved Jobs](#saved-jobs)
10. [Job Post Applications](#job-post-applications)
11. [Notifications](#notifications)
12. [Forum Posts](#forum-posts)
13. [Forum Comments](#forum-comments)
14. [Company Profiles](#company-profiles)
15. [Company Reviews](#company-reviews)
16. [Company Sizes](#company-sizes)
17. [Industries](#industries)
18. [Additional Info](#additional-info)
19. [External Company Links](#external-company-links)
20. [Job Posts](#job-posts)
21. [Experience Required Timelapses](#experience-required-timelapses)
22. [Job Post Statuses](#job-post-statuses)
23. [Resources](#resources)

---

## Users

### GET /users
Obtiene todos los usuarios

**Respuesta:**
```json
[
  {
    "id": 1,
    "email": "user@example.com",
    "password_hash": "$2b$10$...",
    "external_id": null,
    "is_blocked": false,
    "role_id": 1,
    "created_at": "2024-01-01T00:00:00Z",
    "updated_at": null
  }
]
```

### GET /users/:id
Obtiene un usuario por ID

### GET /users/email/:email
Obtiene un usuario por email

### POST /users
Crea un nuevo usuario

**Body:**
```json
{
  "email": "newuser@example.com",
  "password_hash": "$2b$10$...",
  "external_id": "auth0|123",
  "is_blocked": false,
  "role_id": 1
}
```

### PUT /users/:id
Actualiza un usuario

**Body:**
```json
{
  "email": "newemail@example.com",
  "password_hash": "$2b$10$...",
  "is_blocked": true,
  "role_id": 2
}
```

### DELETE /users/:id
Elimina un usuario

---

## Profiles

### GET /profiles
Obtiene todos los perfiles

### GET /profiles/:id
Obtiene un perfil por ID

### GET /profiles/user/:userId
Obtiene un perfil por ID de usuario

### POST /profiles
Crea un nuevo perfil

**Body:**
```json
{
  "user_id": 1,
  "first_name": "Juan",
  "last_name": "Pérez",
  "phone": "+50323456789",
  "location": "San Salvador, El Salvador",
  "external_link": "https://linkedin.com/in/juan-perez",
  "cv_url": "https://storage.example.com/cv.pdf",
  "profile_image_url": "https://storage.example.com/profile.jpg",
  "about_me": "Soy un desarrollador de software",
  "professional_title": "Senior Software Engineer"
}
```

### PUT /profiles/:id
Actualiza un perfil

**Body:**
```json
{
  "first_name": "Juan",
  "last_name": "Pérez García",
  "professional_title": "Lead Developer"
}
```

### DELETE /profiles/:id
Elimina un perfil

---

## Job Alerts

### GET /job-alerts
Obtiene todas las alertas de empleo

### GET /job-alerts/:id
Obtiene una alerta de empleo por ID

### GET /profiles/:profileId/job-alerts
Obtiene las alertas de empleo de un perfil

### POST /job-alerts
Crea una nueva alerta de empleo

**Body:**
```json
{
  "profile_id": 1,
  "keywords": "JavaScript, React",
  "remote": true,
  "onsite": false,
  "hybrid": true,
  "is_active": true
}
```

### PUT /job-alerts/:id
Actualiza una alerta de empleo

**Body:**
```json
{
  "keywords": "Python, Django",
  "remote": false,
  "is_active": true
}
```

### DELETE /job-alerts/:id
Elimina una alerta de empleo

---

## Saved Jobs

### GET /saved-jobs
Obtiene todos los trabajos guardados

### GET /saved-jobs/:id
Obtiene un trabajo guardado por ID

### GET /profiles/:profileId/saved-jobs
Obtiene los trabajos guardados de un perfil

### POST /saved-jobs
Guarda un trabajo

**Body:**
```json
{
  "profile_id": 1,
  "job_post_id": 5
}
```

### DELETE /saved-jobs/:id
Elimina un trabajo guardado por ID

### DELETE /profiles/:profileId/saved-jobs/:jobPostId
Elimina un trabajo guardado de un perfil

---

## Job Post Applications

### GET /applications
Obtiene todas las aplicaciones

### GET /applications/:id
Obtiene una aplicación por ID

### GET /profiles/:profileId/applications
Obtiene las aplicaciones de un perfil

### GET /job-posts/:jobPostId/applications
Obtiene las aplicaciones de un trabajo

### POST /applications
Crea una nueva aplicación

**Body:**
```json
{
  "profile_id": 1,
  "job_post_id": 5,
  "application_status": "submitted",
  "notes": "Estoy muy interesado en esta posición"
}
```

### PUT /applications/:id
Actualiza una aplicación

**Body:**
```json
{
  "application_status": "interview",
  "notes": "Entrevista programada para el viernes"
}
```

### DELETE /applications/:id
Elimina una aplicación

---

## Notifications

### GET /notifications
Obtiene todas las notificaciones

### GET /notifications/:id
Obtiene una notificación por ID

### GET /users/:userId/notifications
Obtiene las notificaciones de un usuario

### POST /notifications
Crea una nueva notificación

**Body:**
```json
{
  "user_id": 1,
  "title": "Nuevo empleo disponible",
  "message": "Se ha publicado un nuevo empleo que coincide con tu perfil",
  "is_read": false
}
```

### PUT /notifications/:id
Actualiza una notificación

**Body:**
```json
{
  "is_read": true
}
```

### PATCH /notifications/:id/read
Marca una notificación como leída

### PATCH /users/:userId/notifications/read-all
Marca todas las notificaciones de un usuario como leídas

### DELETE /notifications/:id
Elimina una notificación

---

## Forum Posts

### GET /forum/posts
Obtiene todos los posts del foro

### GET /forum/posts/:id
Obtiene un post del foro por ID

### GET /users/:userId/forum/posts
Obtiene los posts del foro de un usuario

### GET /forum/posts/category/:category
Obtiene los posts del foro por categoría

### POST /forum/posts
Crea un nuevo post del foro

**Body:**
```json
{
  "user_id": 1,
  "title": "Consejos para entrevistas exitosas",
  "content": "Aquí están mis consejos para prepararse para entrevistas...",
  "category": "entrevistas"
}
```

### PUT /forum/posts/:id
Actualiza un post del foro

**Body:**
```json
{
  "title": "Consejos actualizados para entrevistas",
  "content": "Contenido actualizado..."
}
```

### DELETE /forum/posts/:id
Elimina un post del foro

---

## Forum Comments

### GET /forum/comments
Obtiene todos los comentarios del foro

### GET /forum/comments/:id
Obtiene un comentario del foro por ID

### GET /forum/posts/:postId/comments
Obtiene los comentarios de un post del foro

### GET /users/:userId/forum/comments
Obtiene los comentarios del foro de un usuario

### POST /forum/comments
Crea un nuevo comentario del foro

**Body:**
```json
{
  "post_id": 1,
  "user_id": 2,
  "content": "Excelente post! Aquí está mi perspectiva..."
}
```

### PUT /forum/comments/:id
Actualiza un comentario del foro

**Body:**
```json
{
  "content": "Contenido actualizado del comentario"
}
```

### DELETE /forum/comments/:id
Elimina un comentario del foro

---

## Company Reviews

### GET /company-reviews
Obtiene todas las reseñas de empresas

### GET /company-reviews/:id
Obtiene una reseña de empresa por ID

### GET /companies/:companyId/reviews
Obtiene las reseñas de una empresa

### GET /profiles/:profileId/company-reviews
Obtiene las reseñas de una empresa por un perfil

### POST /company-reviews
Crea una nueva reseña de empresa

**Body:**
```json
{
  "profile_id": 1,
  "company_profile_id": 3,
  "rating": 4,
  "comment": "Excelente empresa para trabajar"
}
```

### PUT /company-reviews/:id
Actualiza una reseña de empresa

**Body:**
```json
{
  "rating": 5,
  "comment": "Excelente cultura empresarial"
}
```

### DELETE /company-reviews/:id
Elimina una reseña de empresa

---

## Resources

### GET /resources
Obtiene todos los recursos

### GET /resources/:id
Obtiene un recurso por ID

### GET /resources/type/:type
Obtiene recursos por tipo

### POST /resources
Crea un nuevo recurso

**Body:**
```json
{
  "title": "Mejores prácticas de JavaScript",
  "description": "Una guía completa de mejores prácticas en JavaScript",
  "resource_type": "artículo",
  "url": "https://example.com/resource",
  "image_url": "https://example.com/image.jpg"
}
```

### PUT /resources/:id
Actualiza un recurso

**Body:**
```json
{
  "title": "Mejores prácticas de JavaScript 2024",
  "description": "Guía actualizada de mejores prácticas"
}
```

### DELETE /resources/:id
Elimina un recurso

---

## Otros Endpoints

Los siguientes módulos también tienen endpoints CRUD disponibles:
- **Roles** - `/roles`
- **Skills** - `/skills`
- **Work Experience** - `/work-experience`
- **Educational Info** - `/educational-info`
- **Degrees** - `/degrees`
- **Company Profiles** - `/company-profiles`
- **Company Sizes** - `/company-sizes`
- **Industries** - `/industries`
- **Additional Info** - `/additional-info`
- **External Company Links** - `/external-company-links`
- **Job Posts** - `/job-posts`
- **Experience Required Timelapses** - `/experience-required-timelapses`
- **Job Post Statuses** - `/job-post-statuses`

Para consultas detalladas sobre estos endpoints, accede a la documentación interactiva en:
`http://localhost:3000/api-docs`
