import { Router } from 'express';
import { validateBody } from '../../../common/middlewares/validateRequest.middleware.js';
import { createNotificationSchema, updateNotificationSchema } from '../../../common/schemas/notification.schemas.js';
import {
  getAllNotifications,
  getNotificationById,
  getNotificationsByUserId,
  createNotification,
  updateNotification,
  deleteNotification,
  markAsRead,
  markAllAsReadByUserId
} from '../controllers/notification.controller.js';

const notificationRouter = Router();

// Get all notifications
notificationRouter.get('/notifications', getAllNotifications);

// Get notification by ID
notificationRouter.get('/notifications/:id', getNotificationById);

// Get notifications by user ID
notificationRouter.get('/users/:userId/notifications', getNotificationsByUserId);

// Create notification
notificationRouter.post('/notifications', validateBody(createNotificationSchema), createNotification);

// Update notification
notificationRouter.put('/notifications/:id', validateBody(updateNotificationSchema), updateNotification);

// Mark notification as read
notificationRouter.patch('/notifications/:id/read', markAsRead);

// Mark all notifications as read by user
notificationRouter.patch('/users/:userId/notifications/read-all', markAllAsReadByUserId);

// Delete notification
notificationRouter.delete('/notifications/:id', deleteNotification);

export default notificationRouter;
