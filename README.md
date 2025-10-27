# 🎟️ Ticket Management Web App (React.js)

A simple but powerful **Ticket Management Web Application** built with **React.js**, **React Router**, **React Hook Form**, and **Zod**.  
This project is part of a **multi-framework challenge**, where identical apps are built using React, Vue.js, and Twig.

---

## 🚀 Features

✅ Responsive landing page with gradient and SVG wave  
✅ Authentication (Login / Signup) using localStorage  
✅ Form validation powered by **Zod + React Hook Form**  
✅ Protected Dashboard with ticket statistics  
✅ Full CRUD (Create, Read, Update, Delete) Ticket Management  
✅ Persistent local storage data  
✅ Clean layout with React Router + Outlet architecture  
✅ Tailwind CSS for fast, modern UI styling

---

## 🧩 Tech Stack

| Category   | Technology           |
| ---------- | -------------------- |
| Framework  | React.js (Vite)      |
| Routing    | React Router DOM v6  |
| Forms      | React Hook Form      |
| Validation | Zod                  |
| Styling    | Tailwind CSS         |
| Storage    | Browser LocalStorage |

---

## 📁 Folder Structure

src/
│
├── assets/
│ └── hero-wave.svg
│
├── components/
│ ├── Navbar.jsx
│ └── Footer.jsx
│
├── layout/
│ └── MainLayout.jsx
│
├── lib/
│ └── validation.js
│
├── pages/
│ ├── LandingPage.jsx
│ ├── LoginPage.jsx
│ ├── SignupPage.jsx
│ ├── DashboardPage.jsx
│ └── TicketsPage.jsx
│
├── router/
│ └── AppRouter.jsx
│
├── App.jsx
├── main.jsx
└── index.css

---

## ⚙️ Installation and Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/<your-username>/ticket-app-react.git
cd ticket-app-react

2️⃣ Install Dependencies
npm install

3️⃣ Run the Development Server
npm run dev


App runs at 👉 http://localhost:5173

4️⃣ Build for Production
npm run build

5️⃣ Preview Production Build
npm run preview

🔐 Authentication Flow

Authentication is simulated using localStorage.

When a user signs up, their data is saved locally under users.

On login, the app checks the entered credentials against stored users.

If successful, a ticketapp_session key is created in localStorage.

Protected routes (Dashboard, Tickets) redirect to /auth/login if no session is found.

Clicking “Logout” clears the session and redirects to the landing page.

🎫 Ticket Management (CRUD Logic)

All tickets are stored in localStorage under the key tickets.

Each ticket object follows this structure:

{
  "id": "unique-id",
  "title": "Login button not working",
  "description": "Clicking login does nothing",
  "status": "open"
}

Ticket Actions
Action	Description
Create	Adds a new ticket with validation
Read	Displays tickets in a card layout
Update	Allows editing ticket title, description, and status
Delete	Prompts confirmation before removal

Validation ensures:

title and status are required

status accepts only "open", "in_progress", "closed"
```
