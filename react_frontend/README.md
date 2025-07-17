# Educational OTT-Style Video App Frontend

## Overview

This is a React + Tailwind CSS frontend for an educational OTT video platform.  
- **Students** browse a grid of embedded YouTube courses, Coursera-inspired
- **Admins** login and use a dashboard to manage (upload) courses/videos

## Features

- Student home with curated course video grid
- Reusable CourseCard component (YouTube embed)
- Admin login and dashboard (dummy auth for now)
- Admin dashboard UI for uploading new videos
- Responsive, modern, Coursera-inspired UI with Tailwind CSS
- Routing with React Router

## Quick Start

In the project directory:

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000)

## Development

You'll need Tailwind CSS set up.  
All styles are in `src/tailwind.css`, components use Tailwind utility classes.

### Adding Pages/Components

- `src/pages/HomePage.js`: Student view
- `src/pages/AdminLogin.js`: Admin login (dummy)
- `src/pages/AdminDashboard.js`: Admin video management/upload
- `src/components/CourseCard.js`: Reusable course/video card

### Theming

Light/dark toggle is built-in (top-right). Extend as needed.

#### Brand colors:

- primary: #0056d2
- secondary: #17294d
- accent: #29bbb9
