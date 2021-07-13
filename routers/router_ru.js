const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/ru/index.html'));
});
router.get('/demo', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/ru/demo.html'));
});
router.get('/gallery', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/ru/gallery.html'));
});

module.exports = router;