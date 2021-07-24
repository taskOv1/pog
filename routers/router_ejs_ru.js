const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('./ru/index', {
    title: 'Главная',
    currentUrlForLanguageSwitcher: `/en${req.url}`,
  });
});
router.get('/about', (req, res) => {
  res.render('./ru/about', {
    title: 'Об авторе',
    currentUrlForLanguageSwitcher: `/en${req.url}`,
  });
});
router.get('/demo', (req, res) => {
  res.render('./ru/demo', {
    title: 'Демо',
    currentUrlForLanguageSwitcher: `/en${req.url}`,
  });
});
router.get('/gallery', (req, res) => {
  res.render('./ru/gallery', {
    title: 'Галлерея',
    currentUrlForLanguageSwitcher: `/en${req.url}`,
  });
});

module.exports = router;