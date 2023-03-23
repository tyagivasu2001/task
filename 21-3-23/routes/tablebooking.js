const express = require('express');
const router = express.Router();
const tablebooking = require('../controller/tablebooking');

router.get('/', tablebooking.pageView);
router.post('/setData/:data?', tablebooking.setData);
router.get('/getData', tablebooking.getData);
router.post('/deleteData/:data?', tablebooking.deleteData);
router.post('/find/:data?', tablebooking.findData);


module.exports = router;