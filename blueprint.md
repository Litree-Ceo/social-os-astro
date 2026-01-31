# ChronoSync Application Blueprint

## 1. Overview

ChronoSync is a web application designed to be a modern, intuitive, and visually engaging platform. The goal is to create a seamless user experience with a focus on performance and aesthetics, built with Astro.js and Firebase.

## 2. Style, Design, and Features

This section documents the visual and functional characteristics of the application as they are implemented.

### Initial State:
*   **Framework:** Astro.js
*   **Styling:** Basic CSS with a "digital dust" background effect.
*   **Layout:** A simple layout defined in `src/layouts/Layout.astro`.
*   **Pages:** `index.astro`, `lab.astro`, `network.astro`, `studio.astro`.
*   **Backend:** Firebase configured for hosting and Firestore.

### Visual and Structural Enhancement:
*   **Modern Layout:** The core layout in `src/layouts/Layout.astro` has been updated with a sophisticated dark theme, a vibrant color palette, and improved typography.
*   **Reusable Header:** A new `Header.astro` component in `src/components/` provides consistent navigation across all pages.
*   **Redesigned Pages:** The `index.astro`, `studio.astro`, `lab.astro`, and `network.astro` pages have been redesigned with a modern aesthetic, including hero sections, feature cards, and icons.
*   **Tailwind CSS:** The project now uses Tailwind CSS for styling, with a custom configuration in `tailwind.config.mjs`.
*   **Global Styles:** The `src/styles/global.css` file has been simplified to rely on Tailwind CSS.

### Real-Time Network Data:
*   **Firebase Integration:** The project has been initialized with Firebase, and the client-side Firebase configuration has been set up in `src/firebase/client.ts`.
*   **Firestore Database:** A Cloud Firestore database has been set up to store network data.
*   **API Route:** An API route at `src/pages/api/network-status.json.js` has been created to fetch the latest network status from Firestore.
*   **Interactive Component:** A Preact component, `src/components/NetworkStatus.jsx`, has been created to display the network status in real-time.
*   **Network Page Integration:** The `NetworkStatus` component has been integrated into the `network.astro` page to display the real-time data.

## 3. Current Plan: Interactive Studio Page

My current task is to make the "Studio" page more interactive by adding a simulated deployment log viewer.

### Plan:

1.  **Create an Interactive Log Component:** I will create a new interactive Preact component named `DeployLog.jsx` to display a stream of mock deployment logs.
2.  **Update the Studio Page:** I will add a "Deploy" button to the `studio.astro` page and integrate the `DeployLog.jsx` component, making it appear when the button is clicked.
