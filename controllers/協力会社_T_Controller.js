const Item = require('../models/協力会社_T');

exports.get = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.set = async (req, res) => {
  const item = new Item(req.body);
  try {
    const newItem = await item.save();    
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.put = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (item) {
      item.name = req.body.name || item.name;
      item.data = req.body.data || item.data;
      const updatedItem = await item.save();
      res.json(updatedItem);
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (item) {
      await item.remove();
      res.json({ message: 'Item deleted' });
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};