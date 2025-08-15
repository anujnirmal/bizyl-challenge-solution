# Full Stack Application

## Nomenclature

-   **Frontend**: Built using Vite + React.
-   **Backend**: Built using Node.js + Express.
-   **Package Manager**: Yarn.
-   **Node Version**: 20.19.4.

---

## Nomenclature

-   **Frontend**: Refers to the client-side application built with Vite + React.
-   **Backend**: Refers to the server-side application built with Node.js + Express.
-   **Yarn**: Package manager used for dependency management.
-   **Node Version**: 20.19.4 (required for both frontend and backend).
-   **Job**: A data object representing a job listing with properties like title, salary, type, and posted date.
-   **API**: The interface used to communicate between the frontend and backend.

---

### File Naming Conventions

-   **JavaScript/TypeScript files**: `camelCase` for utility/helper files, `PascalCase` for React components.
-   **CSS/SCSS files**: `kebab-case` (e.g., `job-card.css`).
-   **Configuration files**: lowercase with dots (e.g., `.env`, `vite.config.js`).
-   **Images/Assets**: `kebab-case` (e.g., `company-logo.png`).
-   **Folders**: `camelCase` unless following a framework’s convention (e.g., `src`, `public`).

---

## Folder Structure

```
project-root/
│
├── frontend/          # Vite + React frontend application
│   ├── src/           # React components, pages, hooks, etc.
│   ├── public/        # Static assets
│   └── package.json   # Frontend dependencies
│
├── backend/           # Node.js + Express backend application
│   ├── src/           # API routes, controllers, services
│   └── package.json   # Backend dependencies
│
├── README.md
└── yarn.lock
```

---

## Setup & Run

### Prerequisites

-   Install **Node.js v20.19.4**
-   Install **Yarn** globally:

```bash
npm install -g yarn
```

### Installation

1. Clone the repository:

```bash
git clone https://github.com/anujnirmal/bizyl-challenge-solution.git
cd bizyl-challenge-solution
```

2. Install frontend dependencies:

```bash
cd frontend
yarn
```

3. Install backend dependencies:

```bash
cd ../backend
yarn
```

### Running the Application

#### Frontend (Vite + React)

```bash
cd frontend
yarn dev
```

#### Backend (Node.js + Express)

```bash
cd backend
yarn dev
```

By default:

-   Frontend runs on: `http://localhost:5173`
-   Backend runs on: `http://localhost:8080`

---

## Approach

-   Kept the **frontend** and **backend**
-   Used **Vite** for fast frontend builds and hot module replacement.
-   **Express.js** powers the backend API.
-   Used **modular folder structure** in both frontend and backend for scalability.

---

## Assumptions

-   The backend is assumed to run on port `8080` but in production this port will be taken from `.env`.
-   The job data will contain following field: title, description, type, salary, postedDate. In a production build we would validate the input from the backend and check for missing keys and handle it accordingly.
-   Both frontend and backend use `.env` files for configuration.

---

## Blockers

-   Potential CORS issues if the proxy is not set correctly.
-   Requires Node.js 20.19.4 & above specifically for compatibility.

---

## Improvements

-   Add unit and integration tests.
-   Implement CI/CD pipeline.
-   Containerize the app with Docker.
-   Add authentication and authorization specially if we add job application tracking.
-   Building Frontend and Backend with zero trust policy for each other, as in Frontend validates all the data from backend and vice versa
-   Improve error handling and logging, implment centralized logging using winston and even send logs to cloudwatch or an http server.
-   Implement caching for get routes

---
