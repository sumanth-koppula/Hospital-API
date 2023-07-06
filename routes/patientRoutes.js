const express = require('express');
const patientController = require('../controllers/patientController');
const reportController = require('../controllers/reportController');
const {verifyToken} = require('../config/middleware');
const passport = require('passport');
const router = express.Router();

router.post('/register',verifyToken, patientController.register);

 
 //- /patients/:id/create_report
 router.post('/:id/create_report',verifyToken,reportController.create_report);
 router.get('/:id/all_reports',  reportController.all_reports);


module.exports = router;