const mongoose = require('mongoose')
// Retrieve connection details from environment variables
const DB_URL = process.env.DATABASE_URL;
const DB_NAME = process.env.DATABASE_NAME;

// Connect to MongoDB using mongoose
mongoose.connect('mongodb+srv://Sherin17:Reenijiji1@cluster0.quvjjgb.mongodb.net/JobLinkers?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
