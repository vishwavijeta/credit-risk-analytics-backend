const express = require('express');
const router = express.Router();
const {
    getCustomers,
    updateStatus,
    postAlert
} = require('../controllers/customerController');

router.get('/', getCustomers);
router.post('/:id/status', updateStatus);
router.post('/alerts', postAlert);

module.exports = router;
