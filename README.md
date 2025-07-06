# 🎬 Hoster Clone – Movie Streaming App

Hoster Clone is a responsive and modern movie streaming web application inspired by platforms like **JioCinema** or **Disney+ Hotstar**. It allows users to explore trending, top-rated, and upcoming movies and shows fetched from the **TMDB API**, presented in a clean, fast, and visually engaging interface using **Material UI (MUI)**.

---

## 🚀 Live Demo

👉 [Click here to view the live demo](https://hotstar-clone-virid.vercel.app)

---

## 🧰 Tech Stack

- ⚛️ **React.js** (with Vite)
- 🎨 **Material UI (MUI)** for component styling
- 🔀 **React Router** (for routing)
- 🎬 **TMDB API** (for real-time movie/TV data)
- 💤 **React Lazy + Suspense** (for code-splitting and performance)
- 🔐 **.env Variables** for secure API keys

---

## ✨ Features

- 🔍 **Search** for Movies, TV Shows, and Series (via `/search/multi`)
- 🎞️ Horizontal scrollable sliders:
  - Trending
  - Top Rated
  - Upcoming
  - Popular TV Shows
- 📦 Lazy loading of `MediaSlider` using `IntersectionObserver`
- 🖼️ Movie detail modal with backdrop & metadata
- ⚡ Fast and responsive UI optimized for all screen sizes


---

## 🔧 Getting Started

### 1️⃣ Clone the Repository

- git clone https://github.com/your-username/hoster-clone.git
- cd hoster-clone 

### 2️⃣ Install Dependencies

- npm install

### 3️⃣ Set up Environment Variables

- VITE_TMDB_API_KEY=your_tmdb_api_key
- VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
- VITE_IMAGE_BASE_URL=https://image.tmdb.org/t/p/w500
- VITE_IMAGE_ORIGINAL_URL=https://image.tmdb.org/t/p/original

### 4️⃣ Run the Development Server

- npm run dev

