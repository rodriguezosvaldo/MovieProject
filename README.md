# 🎬 Movie Tracker

A full-stack web app that lets users search for movies, view details, and manage a personalized watchlist, including ratings, notes, and a watched list. Users can also email themselves their watchlist.

## Documentation
Every PR will have to include documentation. Refer to the Documentation Example folder on documenting code and providing use case documentation.

## Core Features

### Movie Search

- Search movies using a public API (The Movie Database API).
- Show results as cards with title, poster, and release year.
- Clicking a movie shows details (plot, rating, actors, etc.).

### Watchlist Management

- Add/remove movies to/from a “My Watchlist.”
- Mark a movie as “Watched.”
- Add a personal rating (1–10) and notes.
- Separate views: “To Watch” and “Watched.”

### Persistence

- Store the watchlist locally (JSON file or database, depending on team skill level).
- Optionally, add user login later (stretch goal).

### Email Feature
- Email your watchlist to yourself as a nicely formatted message.
- Use something like Nodemailer (Node.js) for this.

# Recommended Stack

## Frontend (client):
- Vanilla JS
- HTML, CSS
- Axios for requests

## Backend (server):
- Node.js + Express
- JSON file or SQLite/MySQL depending on skills
- Nodemailer for email feature?


# Team Roles (3 Developers)

## Dev 1 — Frontend Lead (UI/UX + API Integration)

### Responsibilities:

- Build movie search UI and results list
- Handle movie detail modal or page
- Connect frontend to movie API
- Design responsive layout

### Key Files/Features:

- SearchBar.js
- MovieCard.js
- MovieDetails.js
- Fetch API functions

## Dev 2 — Backend Lead (API Proxy + Data Storage)

### Responsibilities:

- Set up Express server
- Create routes for watchlist CRUD (GET /watchlist, POST /watchlist, etc.)
- Decide persistence (start with JSON file, migrate to SQLite if time)
- Add route to handle “Email my list”

### Key Files/Features:

- server.js
- routes/watchlist.js
- controllers/watchlistController.js
- data/watchlist.json or db.sqlite

## Dev 3 — Data + UX Enhancer (Watchlist + Email + Ratings/Notes)

### Responsibilities:

- Build watchlist UI (list, edit, delete, mark watched)
- Add forms for rating and notes
- Integrate backend persistence
- Implement email feature (Nodemailer endpoint)

### Key Files/Features:

- Watchlist.js
- WatchedList.js
- EmailForm.js
- Backend email route /email-watchlist

---

# 📁 File Structure
```
movie-tracker/
├── client/
│   ├── public/
│   │   ├── index.html
│   │   ├── styles.css
│   │   └── assets/
│   │       └── icons, images, etc.
│   ├── src/
│   │   ├── components/
│   │   │   ├── searchBar.js
│   │   │   ├── movieCard.js
│   │   │   ├── movieDetails.js
│   │   │   ├── watchlist.js
│   │   │   └── emailForm.js
│   │   ├── app.js
│   │   └── index.js
│   └── package.json
└── server/
    ├── routes/
    │   ├── watchlist.js
    │   └── email.js
    ├── controllers/
    │   └── watchlistController.js
    ├── data/
    │   └── watchlist.json
    ├── server.js
    └── package.json
```
