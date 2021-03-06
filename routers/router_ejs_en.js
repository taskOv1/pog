const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('./en/index', {
    title: 'Home',
    currentUrlForLanguageSwitcher: `/ru${req.url}`,
  });
});
router.get('/about', (req, res) => {
  res.render('./en/about', {
    title: 'About',
    currentUrlForLanguageSwitcher: `/ru${req.url}`,
  });
});
router.get('/demo', (req, res) => {
  res.render('./en/demo', {
    title: 'Demo',
    currentUrlForLanguageSwitcher: `/ru${req.url}`,
  });
});
router.get('/gallery', (req, res) => {
  res.render('./en/gallery', {
    title: 'Gallery',
    currentUrlForLanguageSwitcher: `/ru${req.url}`,
  });
});

module.exports = router;