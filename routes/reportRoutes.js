const express= require('express');

const router = express.Router();
const reportController = require('../controllers/reportController');
const {verifyToken} = require('../config/middleware');
const passport = require('passport');

 router.post('/:id/create_report', verifyToken, reportController.create_report);
 
router.get('/:status',  reportController.report_by_status);

module.exports = router;