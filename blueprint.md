# LitreeLabStudio - Project Blueprint

## 🚀 Overview: The Fluid Spatial HUD

LitreeLabStudio is a next-generation web application that functions as a "Social Media Operating System." It merges the community features of Facebook, the deep customization of MySpace, and the immersive media experience of Kodi into a single, seamless platform. The architecture is shifting from a static, container-based layout to a **Fluid Spatial HUD**, creating a more interactive and immersive user experience with a sense of depth and responsiveness.

---

## 🌊 The Fluid Spatial HUD: Core Concepts

To eliminate the "canned" feeling, we are implementing a UI based on depth, focus, and fluid motion.

### 1. Fluid UI & Depth-Based Layering
*   **Mouse-Reactive Parallax:** The background image and a new "Digital Dust" (noise) layer will shift subtly based on the cursor's position, creating a convincing 3D depth effect.
*   **Dynamic Focal Length:** When a primary UI element like a "Cinema Blade" is active, the application will dynamically apply a `backdrop-filter: blur()` to all other elements, creating a "theater" experience that focuses the user's attention.

### 2. The "Live Terminal" & OS-Level Effects
*   **Log Streamer:** Terminal output will "type" out character-by-character, giving the feel of a high-tech, live operating system.
*   **Ghost Mode FX:** Activating "Ghost Mode" will trigger a "glitch" transition effect across the entire UI, enhancing the feeling of a system-level state change.

### 3. Interaction Polish & Micro-Interactions
*   **Blade Hover Tilt:** Using CSS `transform: perspective()`, interactive cards ("Blades") will tilt towards the mouse as the user hovers, enhancing the sense of a three-dimensional space.
*   **Social Pulse:** Social cards containing live media links (e.g., videos, music) will emit a subtle "glow pulse" to indicate interactive content.

---

## 🏗️ Core Architecture

### 1. The "Tri-Core" Engine (View States)

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
    *   `media` collection: Caches metadata for movies/music.

### 3. Frontend Technology

*   **Shell & Routing:** **Astro** for file-based routing and static site generation.
*   **Interactive UI:** **React** for complex, stateful components ("islands").
*   **Styling:** **Tailwind CSS** for the utility-first foundation.

---

## ✅ Current Plan: Implementing the Fluid Spatial HUD

1.  **Implement Fluid UI & Depth:**
    *   **Mouse-Reactive Parallax:** Modify the main layout to include a "Digital Dust" noise layer and add the JavaScript for the parallax effect.
    *   **Blade Hover Tilt:** Apply a 3D tilt effect to the feature cards on the homepage.

2.  **Enhance the "Live Terminal":**
    *   **Log Streamer Effect:** Update the `AgentConsole.jsx` component to make terminal output appear as if it's being typed character-by-character.

3.  **Future HUD Implementation:**
    *   **Dynamic Focal Length:** Implement the `backdrop-filter: blur()` effect for the "Cinema Blades".
    *   **Ghost Mode FX:** Design and implement the "glitch" transition for Ghost Mode.
    *   **Social Pulse:** Add the "glow pulse" to social cards with media links.
