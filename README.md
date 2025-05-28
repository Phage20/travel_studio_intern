# 🧳 Travel Studio – GydeXP Intern Assignment

> Guest Request Logging MVP using WhatsApp, n8n, NestJS, PostgreSQL, Prisma, and Next.js

## 📌 Project Overview

This project implements a core feature of the **Travel Studio v1 MVP**: a **Guest Request Logging Workflow**. It enables hotel guests to send service requests (e.g., “extra towels”) via **WhatsApp**, logs them via an **n8n workflow**, stores them in a **PostgreSQL** database via a **NestJS backend**, and displays them in a **Next.js dashboard** deployed on Vercel.

---

## 🛠️ Tech Stack

### 🔧 Backend

* **NestJS (TypeScript)** – REST API
* **Prisma ORM** – Database access
* **PostgreSQL** – Data storage
* **n8n.io** – WhatsApp Business API integration
* **CORS-enabled** to allow frontend communication

### 🎨 Frontend

* **Next.js (TypeScript)**
* **Tailwind CSS** – Mobile-first UI
* **TanStack React Query** – Data fetching and caching
* **Zustand (optional)** – Global state
* **Deployed on Vercel**:
  `https://<your-name>_gydexp_intern_assignment.vercel.app/dashboard`

---

## ✅ Features

* 📲 **WhatsApp Integration via n8n**
  Guests send messages that are captured and forwarded to the backend.

* 📥 **API Endpoints**

  * `POST /api/requests`: Create guest request
  * `GET /api/requests`: Fetch all pending requests

* 📊 **Dashboard**

  * View pending guest requests in a responsive table
  * Displays guest phone, request message, timestamp

---

## 📁 Project Structure

```
travel-studio-intern-assignment/
├── backend/               # NestJS + Prisma + PostgreSQL
│   ├── src/
│   ├── prisma/
│   ├── .env
│   └── package.json
├── frontend/              # Next.js + Tailwind + React Query
│   ├── src/
│   ├── public/
│   ├── .env.local
│   └── package.json
├── workflow/
│   └── request-workflow.json  # n8n workflow file
└── README.md
```

---

## 🚀 How to Run Locally

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/travel-studio-intern-assignment.git
cd travel-studio-intern-assignment
```

### 2. Backend Setup (NestJS + Prisma)

```bash
cd backend
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run start:dev
```

* Create a `.env` file in `backend/` with:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/travelstudio"
```

---

### 3. Frontend Setup (Next.js)

```bash
cd frontend
npm install
npm run dev
```

* Create `.env.local` in `frontend/`:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

---

### 4. n8n Workflow

* Import `workflow/request-workflow.json` into your local or cloud [n8n.io](https://n8n.io) instance.
* Configure your WhatsApp Business API webhook.
* The workflow extracts phone + text → calls backend → replies to guest.

---

## 📦 Deliverables

* ✅ GitHub repo with:

  * NestJS backend
  * Next.js frontend
  * n8n workflow JSON
  * Setup instructions
* ✅ Deployed frontend:
  `https://<your-name>_gydexp_intern_assignment.vercel.app/dashboard`

---

## ✨ Author

**Archit Pramod**  

Developer Intern Assignment — GydeXP (Travel Studio)

