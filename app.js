const express = require('express');
const mongoose = require('mongoose');
const Item = require('./models/item.model');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://kristinaer304:Kris0192@cluster0.vuekyu7.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

app.set('view engine', 'pug');
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    res.render('index', { items });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/new', (req, res) => {
  res.render('new');
});

app.post('/', async (req, res) => {
  try {
    const newItem = new Item(req.body);
    await newItem.save();
    console.log('ID of new element:', newItem._id);
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    res.render('show', { item });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
//http://localhost:3000/
//http://localhost:3000/new
//http://localhost:3000/65bbefa6cbe8186744c863fe