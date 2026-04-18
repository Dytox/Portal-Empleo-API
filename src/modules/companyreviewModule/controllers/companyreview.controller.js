import * as companyReviewService from '../services/companyreview.service.js';

export const getAllCompanyReviews = async (req, res) => {
  try {
    const reviews = await companyReviewService.getAllCompanyReviews();
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getCompanyReviewById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const review = await companyReviewService.getCompanyReviewById(Number(id));
    if (!review) {
      return res.status(404).json({ error: 'Company Review not found' });
    }
    res.json(review);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getCompanyReviewsByCompanyId = async (req, res) => {
  try {
    const { companyId } = req.params;
    if (!Number.isInteger(Number(companyId))) {
      return res.status(400).json({ error: 'Invalid company ID format' });
    }
    const reviews = await companyReviewService.getCompanyReviewsByCompanyId(Number(companyId));
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getCompanyReviewsByProfileId = async (req, res) => {
  try {
    const { profileId } = req.params;
    if (!Number.isInteger(Number(profileId))) {
      return res.status(400).json({ error: 'Invalid profile ID format' });
    }
    const reviews = await companyReviewService.getCompanyReviewsByProfileId(Number(profileId));
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createCompanyReview = async (req, res) => {
  try {
    const review = await companyReviewService.createCompanyReview(req.body);
    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateCompanyReview = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const review = await companyReviewService.updateCompanyReview(Number(id), req.body);
    if (!review) {
      return res.status(404).json({ error: 'Company Review not found' });
    }
    res.json(review);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteCompanyReview = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const review = await companyReviewService.deleteCompanyReview(Number(id));
    if (!review) {
      return res.status(404).json({ error: 'Company Review not found' });
    }
    res.json({ message: 'Company Review deleted successfully', review });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
