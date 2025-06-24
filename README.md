# 🎬 Hoster Clone – Movie Streaming App

Hoster Clone is a responsive and modern movie streaming web application inspired by platforms like **JioCinema** or **Hoster**. It allows users to explore trending, top-rated, and upcoming movies fetched from the TMDB API, presented in a clean, fast, and visually engaging interface.

---

## 🚀 Live Demo

[Click here to view the live demo](hotstar-clone-virid.vercel.app)

---

## 🧰 Tech Stack

- **React.js** (with Vite)
- **Tailwind CSS** (for fast, responsive styling)
- **React Router** (for routing)
- **TMDB API** (for real-time movie data)
- **React Lazy/Suspense** (for code-splitting and performance)
- **Horizontal Scroll Carousel** (`react-horizontal-scrolling-menu`)
- **Environment Variables** for secure API key management

---

## ✨ Features

- 🔍 **Search** for your favorite movies
- 🎞️ Horizontal scrollable sections for:
  - Trending Movies
  - Top Rated Movies
  - Upcoming Releases
- 🖼️ Lazy loading of movie cards and posters
- ⚡ Fast performance with code splitting
- 📱 Fully responsive design
- 🌙 Dark mode support (optional, if implemented)

---

## 🔑 Environment Variables

Create a `.env` file in the root of your project and add your TMDB credentials:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3

# Clone the repository
git clone https://github.com/your-username/hoster-clone.git

# Navigate into the project
cd hoster-clone

# Install dependencies
npm install

# Start the development server
npm run dev


