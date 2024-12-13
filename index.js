const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
const app = express();

app.use(cors());
const port = 3000;

// Correct connection string with no port number
mongoose.connect(
  `mongodb://localhost:27017/userDetails`)
  
.then(() => console.log('Connected to DB'))
.catch((err) => console.log('Error connecting to DB:', err));

app.use(express.json());
app.use('/user', userRoutes);

app.listen(port, (err) => {
  if (!err) {
    console.log('Server is connected to port no ', port);
  } else {
    console.log('Error starting server:', err);
  }
});
