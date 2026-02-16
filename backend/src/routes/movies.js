const express = require('express');
const router = express.Router();

const API_KEY = process.env.TMDB_API_KEY;

router.get('/now-playing', async (req, res) => {
    const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`
        }
    }

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        res.json(data);
        console.log(`Now playing fetched successfully: ${data.results.length} movies`); // debugging log
    } catch (error) {
        console.error('Error fetching now playing movies:', error);
        res.status(500).json({ error: 'Failed to fetch now playing movies' });
    }
});

router.get('/popular', async (req, res) => {
    const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`
        }
    }

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        res.json(data);
        console.log(`Popular fetched successfully: ${data.results.length} movies`); // debugging log
    } catch (error) {
        console.error('Error fetching popular movies:', error);
        res.status(500).json({ error: 'Failed to fetch popular movies' });
    }
  
});

router.get('/top-rated', async (req, res) => {
    const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`
        }
    }

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        res.json(data);
        console.log(`Top rated fetched successfully: ${data.results.length} movies`); // debugging log
    } catch (error) {
        console.error('Error fetching top rated movies:', error);
        res.status(500).json({ error: 'Failed to fetch top rated movies' });
    }
  
});

router.get('/upcoming', async (req, res) => {
    const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`
        }
    }

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        res.json(data);
        console.log(`Upcoming fetched successfully: ${data.results.length} movies`); // debugging log
    } catch (error) {
        console.error('Error fetching upcoming movies:', error);
        res.status(500).json({ error: 'Failed to fetch upcoming movies' });
    }
  
});

module.exports = router;