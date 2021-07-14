const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/en/index.html'));
});
router.get('/demo', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/en/demo.html'));
});
router.get('/gallery', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/en/gallery.html'));
});

module.exports = router;