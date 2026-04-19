import * as moderationActionService from '../services/moderationaction.service.js';

export const getAllModerationActions = async (req, res) => {
  try {
    const actions = await moderationActionService.getAllModerationActions();
    res.json(actions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getModerationActionById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const action = await moderationActionService.getModerationActionById(Number(id));
    if (!action) {
      return res.status(404).json({ error: 'Moderation Action not found' });
    }
    res.json(action);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getModerationActionsByReportId = async (req, res) => {
  try {
    const { reportId } = req.params;
    if (!Number.isInteger(Number(reportId))) {
      return res.status(400).json({ error: 'Invalid report ID format' });
    }
    const actions = await moderationActionService.getModerationActionsByReportId(Number(reportId));
    res.json(actions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getModerationActionsByAdminId = async (req, res) => {
  try {
    const { adminId } = req.params;
    if (!Number.isInteger(Number(adminId))) {
      return res.status(400).json({ error: 'Invalid admin ID format' });
    }
    const actions = await moderationActionService.getModerationActionsByAdminId(Number(adminId));
    res.json(actions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getModerationActionsByTargetUserId = async (req, res) => {
  try {
    const { targetUserId } = req.params;
    if (!Number.isInteger(Number(targetUserId))) {
      return res.status(400).json({ error: 'Invalid target user ID format' });
    }
    const actions = await moderationActionService.getModerationActionsByTargetUserId(Number(targetUserId));
    res.json(actions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getModerationActionsByActionType = async (req, res) => {
  try {
    const { actionType } = req.params;
    const validActionTypes = [
      'dismiss_report',
      'hide_post',
      'hide_comment',
      'delete_post',
      'delete_comment',
      'block_user',
      'unblock_user',
      'warn_user',
    ];
    if (!validActionTypes.includes(actionType)) {
      return res.status(400).json({ error: 'Invalid action type' });
    }
    const actions = await moderationActionService.getModerationActionsByActionType(actionType);
    res.json(actions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createModerationAction = async (req, res) => {
  try {
    const action = await moderationActionService.createModerationAction(req.body);
    res.status(201).json(action);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteModerationAction = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const action = await moderationActionService.deleteModerationAction(Number(id));
    if (!action) {
      return res.status(404).json({ error: 'Moderation Action not found' });
    }
    res.json({ message: 'Moderation Action deleted successfully', action });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
