const express = require('express');
const morgan = require('morgan');

const app = express();

const { db } = require('./models');
db.authenticate().
then(() => {
  console.log('connected to the database');
})

// body parsing middleware
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

const layout = require('./views/layout');

app.get('/', (req, res) => {
  res.send(layout(' '));
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening in ${PORT}`);
})
