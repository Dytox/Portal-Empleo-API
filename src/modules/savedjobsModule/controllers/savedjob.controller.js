import * as savedJobService from '../services/savedjob.service.js';

export const getAllSavedJobs = async (req, res) => {
  try {
    const savedJobs = await savedJobService.getAllSavedJobs();
    res.json(savedJobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getSavedJobById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const savedJob = await savedJobService.getSavedJobById(Number(id));
    if (!savedJob) {
      return res.status(404).json({ error: 'Saved Job not found' });
    }
    res.json(savedJob);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getSavedJobsByProfileId = async (req, res) => {
  try {
    const { profileId } = req.params;
    if (!Number.isInteger(Number(profileId))) {
      return res.status(400).json({ error: 'Invalid profile ID format' });
    }
    const savedJobs = await savedJobService.getSavedJobsByProfileId(Number(profileId));
    res.json(savedJobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createSavedJob = async (req, res) => {
  try {
    const savedJob = await savedJobService.createSavedJob(req.body);
    res.status(201).json(savedJob);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteSavedJob = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const savedJob = await savedJobService.deleteSavedJob(Number(id));
    if (!savedJob) {
      return res.status(404).json({ error: 'Saved Job not found' });
    }
    res.json({ message: 'Saved Job deleted successfully', savedJob });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteSavedJobByProfileAndJob = async (req, res) => {
  try {
    const { profileId, jobPostId } = req.params;
    if (!Number.isInteger(Number(profileId)) || !Number.isInteger(Number(jobPostId))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const savedJob = await savedJobService.deleteSavedJobByProfileAndJob(Number(profileId), Number(jobPostId));
    if (!savedJob) {
      return res.status(404).json({ error: 'Saved Job not found' });
    }
    res.json({ message: 'Saved Job deleted successfully', savedJob });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
