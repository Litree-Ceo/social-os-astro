# LitLabs OS Blueprint

## 1. Project Overview

LitLabs OS is a web-based, AI-native operating system designed for creative and technical workflows. It provides a unified workspace where users can interact with multiple AI agents (like "Nexus" for creative tasks and "Lab" for research), manage projects, and collaborate with a community of innovators. The platform is built on a modern, performance-first technology stack designed to be open, scalable, and cost-effective.

## 2. Architecture

- **Frontend Framework:** Astro.js (v4)
- **Hosting & Deployment:** Netlify
- **Backend-as-a-Service:** Supabase
- **Core AI Services:** Google AI Studio (Gemini) via Netlify AI Gateway

This stack was chosen to prioritize near-instant load times (thanks to Astro's static-first architecture), relational data integrity (with Supabase/Postgres), and a seamless, commercially-viable deployment pipeline (with Netlify).

## 3. Core Features & Design

### 3.1. User Interface (UI)

- **Aesthetic:** "Futuristic Glassmorphism." A dark-themed UI featuring translucent, blurred backgrounds, glowing accents, and a multi-layered feel to simulate a high-end hardware experience.
- **Layout:** A persistent, responsive layout featuring a main sidebar for navigation, a central content area, and a floating "Agent Console" in the bottom-right corner.
- **Interactivity:** Fluid transitions and micro-interactions (hover effects, subtle animations) will be used to make the UI feel responsive and alive. Navigation will be seamless with no full-page reloads.

### 3.2. Functionality

- **Agent Console:** A persistent, floating chat interface that allows users to interact with different AI agents (Nexus, Lab) from anywhere in the application. The console will maintain conversation history across navigation.
- **Real-Time Messenger ("Tribe Chat"):** A real-time chat feature for user-to-user communication, built on Supabase Realtime.
- **User Authentication:** Secure user sign-up, login, and profile management handled by Supabase Auth.
- **Monetization Engine:** A credit-based system for AI usage. Users can purchase credits via Stripe, and a referral system will allow users to earn credits by inviting others. This will be managed through Supabase and Stripe webhooks.
- **The "Studio" & "Lab":** Dedicated sections for AI-powered content creation (images, text) and research.
- **The "Network":** A social feed where users can share their creations and interact with the community.

## 4. Current Plan: Initial Scaffolding

The following steps will be taken to build the initial foundation of the LitLabs OS:

1.  **Project Cleanup:** Remove default Astro components and styles to create a clean slate.
2.  **Establish Global Styles:** Create a `global.css` file to define the core color palette, fonts, and the "Glassmorphism" background effect.
3.  **Create Core Layout:** Build a main `Layout.astro` component that includes the sidebar, main content area, and the placeholder for the floating agent console.
4.  **Implement the Index Page:** Redesign the `index.astro` page to act as the main "Dashboard" of the OS, using the new layout and styles.
5.  **Build the Agent Console:** Create the initial HTML and CSS structure for the floating `AgentConsole.astro` component.
