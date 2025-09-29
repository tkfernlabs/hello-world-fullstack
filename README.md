# Hello World Full-Stack Application

A modern full-stack web application demonstrating a complete development setup with React, Node.js, Express, and PostgreSQL (Neon).

## 🚀 Live Demo

- **Frontend**: https://frontend-morphvm-tuxens9g.http.cloud.morph.so
- **Backend API**: https://backend-morphvm-tuxens9g.http.cloud.morph.so

## 📁 Project Structure

```
hello-world-app/
├── backend/          # Node.js/Express API server
│   ├── server.js     # Main server file
│   ├── package.json  # Backend dependencies
│   └── .env         # Environment variables (not in repo)
└── frontend/        # React application
    ├── src/         # React components and styles
    ├── dist/        # Production build
    └── package.json # Frontend dependencies
```

## 🛠️ Technology Stack

### Frontend
- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS 3.3.0** - Utility-first CSS framework
- **Axios** - HTTP client for API calls

### Backend
- **Node.js v20.19.5** - JavaScript runtime
- **Express.js** - Web framework
- **PostgreSQL 17.5** - Database (hosted on Neon)
- **CORS** - Cross-origin resource sharing enabled

### Database
- **Neon PostgreSQL** - Serverless PostgreSQL
- **Project**: winter-wildflower-36528256
- **Table**: messages (id, content, created_at)

## 🌟 Features

- ✅ Real-time backend API status monitoring
- ✅ Database connection health checks
- ✅ Message posting and retrieval
- ✅ Responsive UI with modern design
- ✅ Production-ready deployment
- ✅ Full CORS support for cross-origin requests

## 📡 API Endpoints

### Backend Endpoints (https://backend-morphvm-tuxens9g.http.cloud.morph.so)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Returns "Hello World from Backend!" |
| GET | `/api/hello` | Returns hello message with timestamp |
| GET | `/api/db-status` | Database connection status |
| GET | `/api/messages` | Get all messages (limit: 10) |
| POST | `/api/messages` | Create a new message |
| GET | `/health` | Server health check with uptime |

### Request/Response Examples

**POST /api/messages**
```json
Request:
{
  "content": "Your message here"
}

Response:
{
  "id": 1,
  "content": "Your message here",
  "created_at": "2025-09-29T16:17:13.000Z"
}
```

## 🚀 Quick Start

### Prerequisites
- Node.js v20+
- npm or yarn
- PostgreSQL database (or use Neon)

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend/
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file with your database URL:
```env
DATABASE_URL=your_postgresql_connection_string
NODE_ENV=production
```

4. Run the server:
```bash
npm start
```

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend/
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Serve production build:
```bash
serve -s dist -l 3000
```

## 🌐 Deployment

Both applications are deployed and accessible via external URLs:
- Backend runs on port 5000 internally, exposed via HTTPS
- Frontend runs on port 3000 internally, exposed via HTTPS
- Database hosted on Neon's serverless platform

## 📊 Database Schema

```sql
CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 🔧 Development Notes

- Frontend configured to disable HMR for production deployment
- CORS enabled on backend to accept requests from any origin
- Database connection pooling handled by Neon
- Both services run continuously with automatic restart capabilities

## 📝 License

MIT

## 👨‍💻 Author

Built with ❤️ as a demonstration of full-stack development capabilities.

---

**Repository**: https://github.com/tkfernlabs/hello-world-fullstack
