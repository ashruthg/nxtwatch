# 🎥 NxtWatch

## 🔗 Live Demo  
https://nxtwatch-coral.vercel.app/

## Overview
A full-featured video streaming platform built using **React.js**.  
It replicates core YouTube functionalities like video browsing, authentication, dark/light theming, saving videos, and playback. All powered by React, Context API, and Styled-Components.

---

## 🚀 Features

### 🔐 **Authentication & Authorization**

* Secure login using JWT tokens
* Token stored via `js-cookie`
* Protected routes (unauthenticated users are redirected to login)
* Logout with confirmation popup

### 🏠 **Dynamic Video Pages**

* **Home Page:** Browse and search for videos
* **Trending Page:** Displays top trending videos
* **Gaming Page:** Shows popular gaming videos
* **Saved Videos:** User’s personalized saved videos list
* **Video Details:** Watch individual videos using `React Player`

### 🌗 **Theming**

* Global light/dark mode toggle using **Context API** \+ **styled-components ThemeProvider**
* All UI elements adapt dynamically to theme changes

### 💾 **Saved Videos Management**

* Add/remove videos to the “Saved” list from any page
* State managed globally through `SavedVideosContext`

### ⚙️ **Robust API Handling**

* Fetch data from `apis.ccbp.in` endpoints
* JWT-protected GET calls for videos
* Graceful handling of:  
   * Loading states (spinner)  
   * Empty results (No videos found)  
   * Failure states (Retry button + fallback UI)

### 📺 **Video Player Integration**

* Responsive player using `react-player`
* Like/Dislike/Save interactions with instant UI feedback

---

## 🧠 **Architecture Overview**

**Main Technologies:**  
React.js, React Router, Context API, Styled Components, REST APIs, js-cookie, React Player

**Core Layers:**

* **Authentication Layer:** Login + ProtectedRoute
* **UI Layout Layer:** Header, Sidebar, and Main Routes
* **Data Layer:** Fetches videos securely with JWT
* **Global State Layer:** ThemeContext & SavedVideosContext
* **Presentation Layer:** Video cards, loaders, and responsive UI

---

## 🛠️ **Tech Stack**

**Frontend:**

* React.js (Class Components)
* React Router
* Context API
* Styled Components
* js-cookie
* React Player

**Other Tools:**

* HTML5, CSS3, ES6+
* RESTful APIs
* Git & GitHub

---

## 📂 **Project Structure**

```
src/
 ├── components/
 │    ├── Header/
 │    ├── Sidebar/
 │    ├── Home/
 │    ├── Trending/
 │    ├── Gaming/
 │    ├── SavedVideos/
 │    ├── VideoItemDetails/
 │    ├── Login/
 │    ├── NotFound/
 │    ├── Loader/
 │    ├── ProtectedRoute/
 │    └── VideoCards/
 │
 ├── context/
 │    ├── ThemeContext.js
 │    └── SavedVideosContext.js
 │
 ├── style/
 │    └── theme.js
 │
 ├── App.js
 ├── index.js
 └── ...
```

---

## 🧩 **Key Design Decisions**

| Concern        | Implementation                                      |
| -------------- | --------------------------------------------------- |
| Global State   | Context API (Theme + Saved Videos)                  |
| Styling        | Styled Components with dynamic themes               |
| Authentication | JWT with js-cookie                                  |
| Routing        | React Router + Protected Routes                     |
| API Handling   | Async fetch with loaders, retries, and fallback UIs |
| Reusability    | Modular card components and styledContainers        |
| Video Player   | Integrated via react-player                         |

---

## 🧪 **Testing & Validation**

* Verified JWT flow (valid/invalid credentials)
* Ensured protected routes redirect unauthenticated users
* Tested all API endpoints for success and failure
* Checked UI responsiveness across light/dark themes
* Validated save/unsave actions and playback behavior
* Used `data-testid` attributes for automation readiness

---

## 🧱 **Setup & Installation**

```
# Clone repository
git clone https://github.com/ashruthg/nxtwatch.git
cd nxtwatch

# Install dependencies
npm install

# Start development server
npm start
```

### Login Credentials:
```
username: rahul
password: rahul@2021
```

---

## 🧩 **Future Improvements**

* Introduce lazy loading for better performance


---

## 💼 **About**

**Author:** Ashruth Gali  
**Role:** Full Stack / Frontend Developer (React)  
**Goal:** Practicing production-level architecture using React and API-driven design.

---
