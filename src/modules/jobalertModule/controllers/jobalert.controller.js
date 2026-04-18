import * as jobAlertService from '../services/jobalert.service.js';

export const getAllJobAlerts = async (req, res) => {
  try {
    const jobAlerts = await jobAlertService.getAllJobAlerts();
    res.json(jobAlerts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getJobAlertById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const jobAlert = await jobAlertService.getJobAlertById(Number(id));
    if (!jobAlert) {
      return res.status(404).json({ error: 'Job Alert not found' });
    }
    res.json(jobAlert);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getJobAlertsByProfileId = async (req, res) => {
  try {
    const { profileId } = req.params;
    if (!Number.isInteger(Number(profileId))) {
      return res.status(400).json({ error: 'Invalid profile ID format' });
    }
    const jobAlerts = await jobAlertService.getJobAlertsByProfileId(Number(profileId));
    res.json(jobAlerts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createJobAlert = async (req, res) => {
  try {
    const jobAlert = await jobAlertService.createJobAlert(req.body);
    res.status(201).json(jobAlert);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateJobAlert = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const jobAlert = await jobAlertService.updateJobAlert(Number(id), req.body);
    if (!jobAlert) {
      return res.status(404).json({ error: 'Job Alert not found' });
    }
    res.json(jobAlert);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteJobAlert = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const jobAlert = await jobAlertService.deleteJobAlert(Number(id));
    if (!jobAlert) {
      return res.status(404).json({ error: 'Job Alert not found' });
    }
    res.json({ message: 'Job Alert deleted successfully', jobAlert });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
