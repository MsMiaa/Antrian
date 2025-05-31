const express = require('express');
const router = express.Router();
const antrianController = require('../controllers/antrianController');

router.post('/ambil', antrianController.ambilNomor);
router.get('/list', antrianController.listAntrian);
router.post('/panggil', antrianController.panggil);
router.post('/selesai', antrianController.selesai);

module.exports = router;
