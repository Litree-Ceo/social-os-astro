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

## 3. Current Plan: Real-Time Network Data (In Progress)

My current task is to make the application more dynamic by adding a real-time data visualization to the 'Network' page.

### Plan:

1.  **Initialize Firebase:** I will initialize Firebase in the project to enable backend services. (Completed)
2.  **Set up Firestore:** I will set up a Cloud Firestore database to store the network data.
3.  **Create an API Route:** I will create an API route in Astro to fetch the network data from Firestore.
4.  **Create an Interactive Component:** I will create a new interactive component to display the network status in real-time.
5.  **Update the Network Page:** I will integrate the new interactive component into the 'Network' page.
