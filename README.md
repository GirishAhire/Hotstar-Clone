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
- 📦 **LocalStorage / SessionStorage** for auth simulation
- 🔔 **React Toastify** for toast notifications

---

## ✨ Features

- 🔐 **User Authentication** (Login / Signup simulation)
  - Email/password-based
  - Form validation with error handling
  - Stores users in localStorage
  - Session-based login state with welcome message
- 🔔 Toast notifications for login/signup success
- 🙋 Personalized welcome message on login/signup
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

```bash
git clone https://github.com/your-username/hoster-clone.git
npm run dev