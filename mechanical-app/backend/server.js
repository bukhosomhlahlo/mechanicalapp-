require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');

const users = require('./routes/api/users');
const mechanics = require('./routes/api/mechanics');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
const mongoURI = process.env.MONGO_URI;
if (!mongoURI) {
    throw new Error('MONGO_URI is not defined in the .env file');
}

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));


// Passport middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

// Routes
app.use('/api/users', users);
app.use('/api/mechanics', mechanics);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
