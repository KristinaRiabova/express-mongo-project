const Item = require('../models/item.model');

exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.render('index', { items });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    res.render('show', { item });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.createItem = async (req, res) => {
  try {
    const newItem = new Item(req.body);
    await newItem.save();
    console.log('ID of new element:', newItem._id);
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
