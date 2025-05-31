const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/antrian', require('./routes/antrian'));

// Add more routes for user/auth/operator/admin as needed

module.exports = app;
