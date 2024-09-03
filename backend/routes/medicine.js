const express = require('express');
const auth = require('../middleware/auth');
const Medicine = require('../models/Medicine');
const router = express.Router();


router.post('/', auth(['Store Manager']), async (req, res) => {
    const newMedicine = new Medicine(req.body);
    await newMedicine.save();
    res.json(newMedicine);
});

router.get('/', auth(), async (req, res) => {
    const medicines = await Medicine.find();
    res.json(medicines);
});

router.put('/:id', auth(['Store Manager']), async (req, res) => {
    const updatedMedicine = await Medicine.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedMedicine);
});

router.delete('/:id', auth(['Store Manager']), async (req, res) => {
    await Medicine.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Medicine deleted' });
});

module.exports = router;
