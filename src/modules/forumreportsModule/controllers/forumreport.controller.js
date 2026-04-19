import * as forumReportService from '../services/forumreport.service.js';

export const getAllForumReports = async (req, res) => {
  try {
    const reports = await forumReportService.getAllForumReports();
    res.json(reports);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getForumReportById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const report = await forumReportService.getForumReportById(Number(id));
    if (!report) {
      return res.status(404).json({ error: 'Forum Report not found' });
    }
    res.json(report);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getForumReportsByReporterId = async (req, res) => {
  try {
    const { reporterId } = req.params;
    if (!Number.isInteger(Number(reporterId))) {
      return res.status(400).json({ error: 'Invalid reporter ID format' });
    }
    const reports = await forumReportService.getForumReportsByReporterId(Number(reporterId));
    res.json(reports);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getForumReportsByStatus = async (req, res) => {
  try {
    const { status } = req.params;
    const validStatuses = ['pending', 'reviewed', 'dismissed', 'action_taken'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }
    const reports = await forumReportService.getForumReportsByStatus(status);
    res.json(reports);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getForumReportsByPostId = async (req, res) => {
  try {
    const { postId } = req.params;
    if (!Number.isInteger(Number(postId))) {
      return res.status(400).json({ error: 'Invalid post ID format' });
    }
    const reports = await forumReportService.getForumReportsByPostId(Number(postId));
    res.json(reports);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getForumReportsByCommentId = async (req, res) => {
  try {
    const { commentId } = req.params;
    if (!Number.isInteger(Number(commentId))) {
      return res.status(400).json({ error: 'Invalid comment ID format' });
    }
    const reports = await forumReportService.getForumReportsByCommentId(Number(commentId));
    res.json(reports);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createForumReport = async (req, res) => {
  try {
    const report = await forumReportService.createForumReport(req.body);
    res.status(201).json(report);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateForumReport = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const report = await forumReportService.updateForumReport(Number(id), req.body);
    if (!report) {
      return res.status(404).json({ error: 'Forum Report not found' });
    }
    res.json(report);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteForumReport = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const report = await forumReportService.deleteForumReport(Number(id));
    if (!report) {
      return res.status(404).json({ error: 'Forum Report not found' });
    }
    res.json({ message: 'Forum Report deleted successfully', report });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
