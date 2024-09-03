
const express = require('express');
const User = require('../models/User');
const authenticateToken = require('../middleware/authenticateToken');
const router = express.Router();

router.get('/me', authenticateToken, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
