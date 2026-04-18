import * as applicationService from '../services/jobpostapplication.service.js';

export const getAllApplications = async (req, res) => {
  try {
    const applications = await applicationService.getAllApplications();
    res.json(applications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getApplicationById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const application = await applicationService.getApplicationById(Number(id));
    if (!application) {
      return res.status(404).json({ error: 'Application not found' });
    }
    res.json(application);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getApplicationsByProfileId = async (req, res) => {
  try {
    const { profileId } = req.params;
    if (!Number.isInteger(Number(profileId))) {
      return res.status(400).json({ error: 'Invalid profile ID format' });
    }
    const applications = await applicationService.getApplicationsByProfileId(Number(profileId));
    res.json(applications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getApplicationsByJobPostId = async (req, res) => {
  try {
    const { jobPostId } = req.params;
    if (!Number.isInteger(Number(jobPostId))) {
      return res.status(400).json({ error: 'Invalid job post ID format' });
    }
    const applications = await applicationService.getApplicationsByJobPostId(Number(jobPostId));
    res.json(applications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createApplication = async (req, res) => {
  try {
    const application = await applicationService.createApplication(req.body);
    res.status(201).json(application);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateApplication = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const application = await applicationService.updateApplication(Number(id), req.body);
    if (!application) {
      return res.status(404).json({ error: 'Application not found' });
    }
    res.json(application);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteApplication = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const application = await applicationService.deleteApplication(Number(id));
    if (!application) {
      return res.status(404).json({ error: 'Application not found' });
    }
    res.json({ message: 'Application deleted successfully', application });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
