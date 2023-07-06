const express = require('express');
const router = express.Router();


router.use('/doctors', require('./doctorRoutes'))
router.use('/patients', require('./patientRoutes'))
router.use('/reports', require('./reportRoutes'))



module.exports= router;