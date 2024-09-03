const express = require('express');
const auth = require('../middleware/auth');
const Order = require('../models/Order');
const router = express.Router();


router.post('/', auth(['Store Manager', 'Sales Executive']), async (req, res) => {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.json(newOrder);
});

router.get('/', auth(['Store Manager', 'Sales Executive']), async (req, res) => {
    const orders = await Order.find();
    res.json(orders);
});

router.put('/:id', auth(['Store Manager']), async (req, res) => {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedOrder);
});

router.delete('/:id', auth(['Store Manager']), async (req, res) => {
    await Order.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Order deleted' });
});

module.exports = router;
