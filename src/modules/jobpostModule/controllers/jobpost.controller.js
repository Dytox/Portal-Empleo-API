import * as jobPostService from '../services/jobpost.service.js';

export const getAllJobPosts = async (req, res) => {
  try {
    const posts = await jobPostService.getAllJobPosts();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getJobPostById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const post = await jobPostService.getJobPostById(Number(id));
    if (!post) {
      return res.status(404).json({ error: 'Job post not found' });
    }
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getJobPostsByCompanyId = async (req, res) => {
  try {
    const { companyId } = req.params;
    if (!Number.isInteger(Number(companyId))) {
      return res.status(400).json({ error: 'Invalid company ID format' });
    }
    const posts = await jobPostService.getJobPostsByCompanyId(Number(companyId));
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createJobPost = async (req, res) => {
  try {
    const post = await jobPostService.createJobPost(req.body);
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateJobPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await jobPostService.updateJobPost(Number(id), req.body);
    if (!post) {
      return res.status(404).json({ error: 'Job post not found' });
    }
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteJobPost = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const post = await jobPostService.deleteJobPost(Number(id));
    if (!post) {
      return res.status(404).json({ error: 'Job post not found' });
    }
    res.json({ message: 'Job post deleted successfully', post });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
