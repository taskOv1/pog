const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('./ru/index', {
    title: 'Главная',
  });
});
router.get('/about', (req, res) => {
  res.render('./ru/about', {
    title: 'Об авторе',
  });
});
router.get('/demo', (req, res) => {
  res.render('./ru/demo', {
    title: 'Демо',
  });
});
router.get('/gallery', (req, res) => {
  res.render('./ru/gallery', {
    title: 'Галлерея',
  });
});

module.exports = router;