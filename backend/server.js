const express = require('express');
const app = express();
const dbRoutes = require('./routes/databaseAccess.js');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

mongoose.connection.on('connected', function() {
  console.log('Connected to MONGODB!');
})
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, (err) => {err ? console.log(err) : null});

// This line makes the build folder publicly available.
app.use(express.static('build'));
app.use(bodyParser.json());

app.use('/db', dbRoutes)

app.listen(3000, () => {
  console.log('Server for React Todo App listening on port 3000!')
});
