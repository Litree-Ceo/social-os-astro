# ChronoSync Blueprint

## 1. Purpose & Capabilities

ChronoSync is a sleek, high-performance web application built with Astro.js. It's designed to be a content-focused site with interactive elements, showcasing the power of Astro's Islands Architecture.

## 2. Architecture & Design

### Core Technologies

*   **Framework:** Astro.js
*   **Styling:** Tailwind CSS
*   **Deployment:** Firebase Hosting

### Style & Design

*   **Layout:** Modern, visually balanced layout with clean spacing.
*   **Typography:** Expressive and relevant typography with a clear hierarchy.
*   **Color Palette:** Vibrant and energetic color palette.
*   **Iconography:** Modern, interactive iconography to enhance user understanding.
*   **Interactivity:** Smooth animations and effects for an engaging user experience.

### Features

*   **Hero Section:** A bold and engaging hero section that grabs the user's attention.
*   **Features Section:** A dedicated section to highlight the key features of the application.
*   **Services Section:** A section to showcase the services offered.
*   **Interactive Feed:** A dynamic and interactive feed for displaying real-time data.
*   **Theme Switcher:** A user-friendly theme switcher to toggle between light and dark modes.

## 3. Current Plan: Refactor to Astro-Native

### Overview

The current plan is to refactor the project to be more Astro-native. This involves converting most of the existing `.jsx` components to `.astro` components, which will improve performance and simplify the codebase. The `ThemeSwitcher.jsx` component will be preserved as a Preact component to maintain its interactive functionality.

### Action Steps

1.  **Convert `AgentConsole.jsx` to `AgentConsole.astro`:** The `AgentConsole.jsx` component will be converted to an Astro component. This will involve rewriting the JSX to Astro's HTML-like syntax and updating the import statements.
2.  **Convert `Auth.jsx` to `Auth.astro`:** The `Auth.jsx` component will be converted to an Astro component. This will involve rewriting the JSX to Astro's HTML-like syntax and updating the import statements.
3.  **Convert `InteractiveFeed.jsx` to `InteractiveFeed.astro`:** The `InteractiveFeed.jsx` component will be converted to an Astro component. This will involve rewriting the JSX to Astro's HTML-like syntax and updating the import statements.
4.  **Convert `Post.jsx` to `Post.astro`:** The `Post.jsx` component will be converted to an Astro component. This will involve rewriting the JSX to Astro's HTML-like syntax and updating the import statements.
5.  **Update `index.astro`:** The `index.astro` page will be updated to import and use the new `.astro` components.
