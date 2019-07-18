const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

// @route   GET api/topic/
// @desc    Fetches image data based on topic param
// @access  Public
router.get('/', async (req, res) => {
  const { topic } = req.query;
  const url = `https://api.pexels.com/v1/search?query=${topic.toLowerCase()}&per_page=80&page=1`;
  const API_KEY = process.env.PEXEL_API_KEY;
  const headers = {
    method: 'GET',
    headers: {
      Authorization: API_KEY
    }
  };
  try {
    const resp = await fetch(url, headers);
    res.json(await resp.json());
  } catch (err) {
    res.status(400).json({ msg: 'unable to load topic' });
  }
});

module.exports = router;
