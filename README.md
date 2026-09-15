# Share Places React Frontend Project

This is the frontend for a MERN-style application that lets users browse registered users, view a user's places, create new places, and authenticate in the app.

## Tech Stack

- React
- React Router
- Create React App
- Custom CSS styling

## Prerequisites

- Node.js and npm installed

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```
3. Open the app in your browser at:
   ```text
   http://localhost:3000
   ```

## Available Scripts

```bash
npm start
```
Starts the React app in development mode.

```bash
npm run build
```
Builds the app for production.

```bash
npm test
```
Runs the test suite.

```bash
npm run eject
```
Ejects the app configuration from Create React App.

## Main Application Features

- User listing and browsing
- Authentication flow for sign-in/sign-up
- User-specific place pages
- Place creation and update screens
- Protected routes for authenticated users

## Project Structure

```text
src/
├── App.js
├── index.css
├── index.js
├── places/
│   ├── components/
│   └── pages/
├── shared/
│   ├── components/
│   ├── context/
│   ├── hooks/
│   └── util/
└── user/
    ├── components/
    └── pages/
```

## Notes

This frontend expects a backend API to handle authentication and place data. It is designed as the client-side portion of a full-stack MERN application.
