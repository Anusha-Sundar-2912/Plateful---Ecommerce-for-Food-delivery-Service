# 🍽️ Plateful — Ecommerce Food Delivery Platform

A full-stack food delivery web application built using the MERN stack with a modern customer interface, restaurant admin dashboard, secure authentication, Stripe payment integration, WhatsApp order notifications, and cloud deployment infrastructure.

---

## 🚀 Live Deployments

### 🌐 Customer Frontend
https://plateful-ecommerce-for-food-deliver.vercel.app

### 🛠️ Admin Dashboard
https://plateful-admin.vercel.app

### ⚙️ Backend API
https://backend-y7v7.onrender.com

---

# 📌 Features

## 👤 Customer Features
- User Signup & Login (JWT Authentication)
- Browse categorized food menu
- Dynamic search functionality
- Add / remove items from cart
- Quantity management
- Secure checkout flow
- Cash on Delivery (COD)
- Online Stripe payment integration
- Order placement & tracking
- WhatsApp order notification integration
- Persistent cart management
- Fully responsive UI

---

## 🛠️ Admin Dashboard Features
- Add new menu items
- Upload food images
- View all menu items
- Delete menu items
- Manage customer orders
- Update order delivery status
- View payment status
- Order analytics integration

---

# 🧠 Tech Stack

## Frontend
- React.js
- Vite
- Tailwind CSS
- Axios
- React Router DOM

## Backend
- Node.js
- Express.js
- MongoDB Atlas
- JWT Authentication
- Stripe API
- Multer

## Deployment
- Vercel (Frontend + Admin)
- Render (Backend API)
- MongoDB Atlas (Database)

---

# 🏗️ Project Architecture

```text
Customer Frontend (Vercel)
           ↓
      Express Backend (Render)
           ↓
      MongoDB Atlas
           ↓
   Stripe Payment Gateway

Admin Dashboard (Vercel)
           ↓
      Express Backend
```

---

# 📂 Folder Structure

```bash
PLATEFUL/
│
├── frontend/        # Customer frontend
├── admin/           # Admin dashboard
├── backend/         # Express backend API
│
├── .github/
└── .gitignore
```

---

# 🔐 Environment Variables

## Backend `.env`

```env
PORT=4000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret
STRIPE_PUBLISHABLE_KEY=your_publishable_key
FRONTEND_URL=http://localhost:5173
```

---

## Frontend `.env`

```env
VITE_API_URL=https://backend-y7v7.onrender.com
VITE_WHATSAPP_NUMBER=7977896184
```

---

## Admin `.env`

```env
VITE_API_URL=https://backend-y7v7.onrender.com
```

---

# ⚡ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/Anusha-Sundar-2912/Plateful---Ecommerce-for-Food-delivery-Service.git
```

---

## 2️⃣ Install Dependencies

### Frontend

```bash
cd frontend
npm install
```

### Admin Dashboard

```bash
cd admin
npm install
```

### Backend

```bash
cd backend
npm install
```

---

## 3️⃣ Run Project

### Backend

```bash
cd backend
npm run server
```

### Frontend

```bash
cd frontend
npm run dev
```

### Admin Dashboard

```bash
cd admin
npm run dev
```

---

# 💳 Payment Integration

The platform supports:

- Stripe Online Payments
- Cash On Delivery (COD)

Payment confirmation automatically updates order status in the admin dashboard.

---

# 📸 Screenshots

## Customer Frontend
- Homepage
- Menu Page
- Cart
- Checkout
- Orders Page

## Admin Dashboard
- Add Items
- List Items
- Order Management

> Add screenshots here for better portfolio presentation.

---

# 🔥 Key Highlights

- Full-stack MERN architecture
- Real cloud deployment
- JWT authentication system
- Stripe payment workflow
- WhatsApp order integration
- Admin order management system
- RESTful API architecture
- Responsive UI/UX
- Production deployment using Vercel & Render

---

# 🚧 Future Improvements

- Cloudinary image hosting
- Email notifications
- Google OAuth login
- Razorpay integration
- Real-time order tracking
- Docker deployment
- Role-based access control
- Analytics dashboard

---
