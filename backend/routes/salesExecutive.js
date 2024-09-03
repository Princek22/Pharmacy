const express = require('express');
const auth = require('../middleware/auth');
const SalesExecutive = require('../models/SalesExecutive');
const router = express.Router();


router.post('/', auth(['Store Manager']), async (req, res) => {
    const newExecutive = new SalesExecutive(req.body);
    await newExecutive.save();
    res.json(newExecutive);
});

router.get('/', auth(['Store Manager']), async (req, res) => {
    const executives = await SalesExecutive.find();
    res.json(executives);
});

router.put('/:id', auth(['Store Manager']), async (req, res) => {
    const updatedExecutive = await SalesExecutive.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedExecutive);
});

router.delete('/:id', auth(['Store Manager']), async (req, res) => {
    await SalesExecutive.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Sales Executive deleted' });
});

module.exports = router;
