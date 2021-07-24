const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('./en/index', {
    title: 'Home',
  });
});
router.get('/about', (req, res) => {
  res.render('./en/about', {
    title: 'About',
  });
});
router.get('/demo', (req, res) => {
  res.render('./en/demo', {
    title: 'Demo',
  });
});
router.get('/gallery', (req, res) => {
  res.render('./en/gallery', {
    title: 'Gallery',
  });
});

module.exports = router;