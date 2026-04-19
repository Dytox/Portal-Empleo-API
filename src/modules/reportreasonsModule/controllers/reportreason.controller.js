import * as reportReasonService from '../services/reportreason.service.js';

export const getAllReportReasons = async (req, res) => {
  try {
    const reasons = await reportReasonService.getAllReportReasons();
    res.json(reasons);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getReportReasonById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const reason = await reportReasonService.getReportReasonById(Number(id));
    if (!reason) {
      return res.status(404).json({ error: 'Report Reason not found' });
    }
    res.json(reason);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createReportReason = async (req, res) => {
  try {
    const reason = await reportReasonService.createReportReason(req.body);
    res.status(201).json(reason);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteReportReason = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const reason = await reportReasonService.deleteReportReason(Number(id));
    if (!reason) {
      return res.status(404).json({ error: 'Report Reason not found' });
    }
    res.json({ message: 'Report Reason deleted successfully', reason });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
