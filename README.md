# CS Cars Platform

Production-ready MERN web application for CS Cars, a car import agency in Sétif, Algeria.

## Features
- **MERN Stack**: Node.js/Express Backend, Vite/React Frontend.
- **Multilingual**: Full support for French (Default) and Arabic (RTL support).
- **Modern UI**: Dark automotive theme with Framer Motion animations.
- **Responsive**: Desktop (Top Nav) and Mobile (Bottom Nav) layouts.
- **Section Snapping**: Full-page CSS scroll snapping on Services page.
- **Shipment Tracking**: API endpoint for SeaRates integration with visual animated timeline.

## Running Locally

### 1. Backend Setup
```bash
cd server
npm install
node server.js
```
The server will start on `http://localhost:5000`.

### 2. Frontend Setup
```bash
cd client
npm install
npm run dev
```
The client will start on `http://localhost:5173`.        

## Environment Variables
Create a `.env` file in the `server` directory for production SeaRates API usage (optional for local mock testing).

```env
PORT=5000
SEARATES_API_KEY=your_api_key_here
```
