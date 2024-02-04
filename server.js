const express = require('express');
const connectDB = require('./config/db');
const errorHandler = require('./error/error.handler');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.set('view engine', 'pug');

app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//http://localhost:3000/
//http://localhost:3000/new
//http://localhost:3000/65bbefa6cbe8186744c863fe