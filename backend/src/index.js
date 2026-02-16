require('dotenv').config();
const express = require('express');
const cors = require('cors'); // Needed for CORS issues. To allow requests from different ports (frontend and backend running separately)
const moviesRouter = require('./routes/movies');

const app = express();
const PORT = process.env.PORT || 3000;

// Manage routes for movies: now playing, popular, top rated, upcoming
app.use('/movies', moviesRouter);
app.use(express.json());

app.use(cors());
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});





