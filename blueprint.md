# LitreeLabStudio - Project Blueprint

## 🚀 Overview: The "Tri-Core" Social Media OS

LitreeLabStudio is a next-generation web application that functions as a "Social Media Operating System." It merges the community features of Facebook, the deep customization of MySpace, and the immersive media experience of Kodi into a single, seamless platform. It's built on a modern, full-stack architecture using Astro for the frontend shell and React for interactive UI components, all powered by a Firebase backend.

---

## 🏗️ Core Architecture

### 1. The "Tri-Core" Engine (View States)

The application is a Single Page Application (SPA) with three distinct, user-toggleable "View States":

| Mode         | Inspiration | Primary Tech             | Core Function                                           |
|--------------|-------------|--------------------------|---------------------------------------------------------|
| **The Grid**   | Facebook    | React + Firestore        | Social feed, notifications, and group updates.          |
| **The Canvas** | MySpace     | Dynamic `<style>` Injection | Fully user-customized profile with auto-playing media.  |
| **The Cinema** | Kodi        | React + Framer Motion    | A "10-foot" UI with horizontal blades for media browsing. |

### 2. Backend & Database (Firebase)

*   **Authentication:** Firebase Auth handles user registration and login (Email/Password).
*   **Database (Firestore):**
    *   `users` collection: Stores `uid`, `displayName`, `profileImage`, and the `userConfig` object.
    *   `userConfig` object: Contains `themeCSS` (a string of raw CSS), `currentMood`, `nowPlayingURL`, and a `top8Friends` array.
    *   `media` collection: Caches metadata for movies/music, synced from external APIs (e.g., TMDB, Spotify).

### 3. Frontend Technology

*   **Shell & Routing:** **Astro** provides the file-based routing, static site generation for landing pages, and the overall project structure.
*   **Interactive UI:** **React** is used to build the complex, stateful components that make up the "Tri-Core" engine (e.g., the feed, the profile editor, the media player). These are rendered as interactive "islands" within the Astro framework.
*   **Styling:** **Tailwind CSS** provides the utility-first foundation for a clean, modern, and responsive design. User-generated themes override these base styles.

---

## ✨ "Badass" Features & Future Roadmap

*   **Vibe-Sync Media Player:** The site's background animations and UI elements will pulse to the BPM of the user's profile song, analyzed in real-time with the Web Audio API.
*   **AI-Powered "Skin-Shifting":** A text-to-theme engine powered by Gemini. Users can type a descriptive prompt (e.g., "Make my profile look like a neon-rainy night in Tokyo") to generate and apply custom CSS instantly.
*   **"The Portal" Watch Party:** An overlay in "Cinema Mode" that shows what friends are watching, allowing users to "jump in" to a synchronized media stream.
*   **Digital "Sticker" Economy:** Users can place interactive 3D widgets (built with Three.js or Lottie) on their profiles that react to mouse movements.
*   **"Ghost Mode" Privacy:** A single-click "Burner" toggle that instantly masks a user's profile, anonymizes their activity, and applies a generic "Under Construction" theme.

---

## ✅ Current Plan & Immediate Tasks

1.  **Stabilize the Foundation:**
    *   **Fix broken dependencies:** Correctly install and configure `tailwindcss` and `astro-icon` to resolve the current site errors.
    *   **Verify render:** Ensure the basic Astro layout and homepage render correctly with the intended styles.

2.  **Implement Core Architecture:**
    *   **Integrate Firebase:** Set up the Firebase SDK and create the connection to Firestore and Auth.
    *   **Build the "Tri-Core" Switcher:** Develop the main UI control that allows users to toggle between The Grid, The Canvas, and The Cinema views.
    *   **Develop the first Core Component:** Begin with "The Canvas" (MySpace mode), creating the React component for the user profile page.

3.  **Begin Feature Implementation:**
    *   **Custom CSS Injector:** Implement the logic to pull the `themeCSS` string from Firestore and apply it to the user's profile page.
