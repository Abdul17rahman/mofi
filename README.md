# 🎬 MOFI

A sleek and interactive movie comparison app built with **React.js**, allowing users to filter, search and compare two movies using data from the [TMDB (The Movie Database) API](https://www.themoviedb.org/documentation/api).

## 🚀 Features

- **Movie List**: The home page displays popular, now playing, top rated and upcoming movies using TMDB API.
- 🔍 **Live Search**: Search for movies by title using TMDB API.
- 🎭 **Side-by-Side Comparison**: Compare two selected movies' data including title, release date, poster, ratings, overview, and more.
- ❌ **Remove & Re-Select**: Easily remove one or both selected movies and choose again.
- 🧠 **Smart UI**: Automatically adjusts to show search input and comparison layout based on user selections.

## 📸 Preview

![Preview](<Screenshot 2025-04-06 at 15.01.25.png>)

## 🛠️ Technologies Used

- **React.js**
- **React Router**
- **Zustand**
- **Tailwind CSS**
- **Axios**
- **TMDB API**

## 🔑 Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/Abdul17rahman/mofi.git
   cd mofi

   ```

2. **Install dependencies**

   ```bash
   npm install

   ```

3. **Set up TMDB API KEY and Utils file**

   Create a .env file in the root and add your TMDB API key like this:

   VITE_TMDB_API_KEY=your_tmdb_api_key_here

   Then Create a utils.js:

   export const options = {
   headers: {
   accept: "application/json",
   Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
   },
   };

4. **Run the app**

   ```bash
   npm run dev
   ```

Thank You with ❤️ from Abdul Rahman
