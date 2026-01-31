# Project Blueprint

## Overview

This project is a decentralized AI operating system for the new web, built with Astro.js and Firebase. It features a real-time interactive feed, user authentication, and a modern, visually appealing interface.

## Design and Features

### Style and Design

- **Layout:** A responsive grid-based layout with a main content area and a sidebar for additional information.
- **Color Palette:** A dark-themed interface with vibrant gradients and highlights, creating a futuristic and energetic look.
- **Typography:** A clean, modern font that is easy to read and emphasizes key information.
- **Iconography:** A set of icons to enhance the user's understanding and navigation of the application.

### Implemented Features

- **User Authentication:** Users can sign in with their Google account to post on the interactive feed.
- **Real-Time Feed:** A real-time feed that displays posts from all users, updating automatically as new posts are created.
- **Post Creation:** Authenticated users can create new posts with text and optional images.

## Current Plan

### Task: Convert Preact Components to Astro Components

- **Objective:** To migrate the application from Preact to Astro, leveraging Astro's Islands Architecture for improved performance and a better developer experience.
- **Steps:**
  1. **Convert `AgentConsole.jsx` to `AgentConsole.astro`:** The typewriter effect will be replaced with static text, and the button's functionality will be preserved using a client-side `<script>` tag.
  2. **Convert `Auth.jsx` to `Auth.astro`:** The authentication logic will be moved into a `<script>` tag, and the page will reload on sign-in/sign-out to reflect the updated authentication state.
  3. **Convert `InteractiveFeed.jsx` to Astro Components:** The component will be broken down into smaller, more manageable Astro components:
     - `CreatePost.astro`: A form for creating new posts with client-side interactivity.
     - `Post.astro`: A component for displaying individual posts with client-side time formatting.
     - `InteractiveFeed.astro`: The main component that orchestrates the feed, fetches and displays posts from Firestore, and handles user authentication.
  4. **Update `src/pages/index.astro`:** The main page will be updated to use the new Astro components.
  5. **Create `blueprint.md`:** A blueprint file will be created to document the project's structure, design, and features.
