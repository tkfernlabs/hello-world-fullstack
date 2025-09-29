# Hello World Fullstack Application

A simple fullstack Hello World application built with Node.js/Express backend and React frontend.

## Features

- **Backend API** with Express.js
- **PostgreSQL Database** hosted on Neon
- **React Frontend** with modern UI
- **CORS enabled** for cross-origin requests
- **RESTful API** endpoints

## Tech Stack

### Backend
- Node.js
- Express.js
- PostgreSQL (Neon)
- CORS middleware

### Frontend
- React
- Tailwind CSS

## API Endpoints

### Backend URL
- Production: https://backend-morphvm-tuxens9g.http.cloud.morph.so

### Available Endpoints

- `GET /` - Hello World message
- `GET /api/hello` - Hello endpoint with timestamp
- `GET /api/db-status` - Database connection status
- `GET /api/messages` - Get all messages
- `POST /api/messages` - Create a new message
- `GET /health` - Health check endpoint

## Setup and Installation

### Backend

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file with your database URL:
```
PORT=5000
DATABASE_URL=your_neon_database_url
NODE_ENV=production
```

4. Run the server:
```bash
npm start
```

### Frontend

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

## Deployment

Both backend and frontend are deployed and accessible via external URLs.

## License

MIT
