# NatureNest Resort - A Resort Booking Web App

This repository contains a full-stack Resort Booking Web Application(NatureNest Resort).

---

## Technology Stack

- **Frontend:** Next.js, React Icons, Tailwind CSS, Framer Motion  
- **Backend:** Node.js, Express.js, TypeScript, CORS, Helmet, Docker  
- **Database:** MongoDB  
- **Deployment:** Planned deployment on Vercel for both frontend and backend

---

## Project Overview

The app simulates a resort booking platform with key user-facing features and a secure backend API. The project is split into frontend and backend components integrated seamlessly to provide a smooth booking experience.

---

## Frontend Features

- **Hero Section:**  
  - Attractive top banner with nature/resort-themed background image  
  - Company name and tagline prominently displayed  
  - "Book Now" button triggers booking form modal

- **Services Section:**  
  - Three columns showcasing core offerings with icons/illustrations  
  - Accommodation, Adventure Activities, and Wellness & Spa

- **Gallery Section:**  
  - Grid display of at least 3 resort images with visual animation effects

- **Footer:**  
  - Contact information and social media links  

- **Booking Form:**  
  - Modal form for submitting booking requests integrated with backend API  
  - Input validation and user-friendly error messaging  
  - Responsive design for mobile and desktop

---

## Backend Features

- REST API built with Express and TypeScript  
- Endpoints:  
  - `POST /api/bookings` – Save booking details to MongoDB  
  - `GET /api/bookings` – Retrieve all bookings (protected with API key)  
- MongoDB schema includes all essential booking details (user info, dates, accommodation, status) with validation and sanitization  
- Security:  
  - CORS and Helmet middleware for HTTP header protection  
  - API route protection using `x-api-key` header authentication  
  - Input validation on API requests

## Running the Project Locally

### Backend

```bash
cd server
npm install
npm run build
npm start
```
## Docker Support

- Backend Dockerfile provided to build and run backend in containerized environment  
- Build and run using standard Docker commands Open `http://localhost:8080` in your browser.

### Frontend
```bash
npm install
npm run dev
```

## Environment Variables

Create `.env` file(s) with the following keys:
```bash
DB_URL=your_mongodb_connection_string
PORT=8080
API_KEY=your_secure_api_key_for_backend
NEXT_PUBLIC_API_KEY=your_secure_api_key_for_frontend_requests
```