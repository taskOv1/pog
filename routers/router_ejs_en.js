const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  console.log(req.url);
  res.render('./en/index', {
    title: 'Home',
    currentUrlForLanguageSwitcher: `/ru${req.url}`,
  });
});
router.get('/about', (req, res) => {
  console.log(req.url);
  res.render('./en/about', {
    title: 'About',
    currentUrlForLanguageSwitcher: `/ru${req.url}`,
  });
});
router.get('/demo', (req, res) => {
  console.log(req.url);
  res.render('./en/demo', {
    title: 'Demo',
    currentUrlForLanguageSwitcher: `/ru${req.url}`,
  });
});
router.get('/gallery', (req, res) => {
  console.log(req.url);
  res.render('./en/gallery', {
    title: 'Gallery',
    currentUrlForLanguageSwitcher: `/ru${req.url}`,
  });
});

module.exports = router;