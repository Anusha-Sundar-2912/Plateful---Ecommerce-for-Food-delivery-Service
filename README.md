# 🍽️ Plateful — Cloud-Native Food Delivery Platform

<p align="center">
  <b>Full-Stack MERN Food Delivery Application</b><br>
  Customer Ordering • Secure Payments • Admin Management • Cloud Deployment
</p>

---

## 🚀 Overview

Plateful is a production-ready food delivery platform built using the MERN stack. The application provides customers with a seamless ordering experience while offering administrators a dedicated dashboard for managing menu items, customer orders, payments, and delivery workflows.

The platform integrates secure JWT authentication, Stripe payment processing, Cloudinary image hosting, WhatsApp order notifications, and cloud deployment infrastructure using Vercel, Render, and MongoDB Atlas.

---

# 🌐 Live Applications

### 🍴 Customer Frontend

https://plateful-fawn.vercel.app/

### 🛠️ Admin Dashboard

https://admin-nu-swart.vercel.app/

### ⚙️ Backend API

https://backend-y7w7.onrender.com

---

# ✨ Features

## 👤 Customer Features

* Secure User Registration & Login
* JWT Authentication
* Browse Categorized Food Menu
* Dynamic Food Search
* Add / Remove Cart Items
* Quantity Management
* Persistent Shopping Cart
* Secure Checkout Workflow
* Stripe Online Payments
* Cash On Delivery (COD)
* Order Placement & Tracking
* WhatsApp Order Notifications
* Order History Management
* Mobile Responsive Interface

---

## 🛠️ Admin Dashboard Features

* Add New Food Items
* Upload Food Images
* Cloudinary Image Management
* View Complete Menu Inventory
* Delete Existing Menu Items
* Manage Customer Orders
* Update Delivery Status
* Monitor Payment Status
* View Customer Details
* Restaurant Operations Management

---

# 🏗️ System Architecture

```text
                     ┌────────────────────┐
                     │   Customer Client  │
                     │   React + Vite     │
                     └─────────┬──────────┘
                               │
                               ▼
                  ┌──────────────────────────┐
                  │      Express Server      │
                  │      Node.js Backend     │
                  └─────────┬────────────────┘
                            │
        ┌───────────────────┼───────────────────┬─────────────────┐
        ▼                   ▼                   ▼                 ▼

 ┌──────────────┐   ┌──────────────┐   ┌──────────────┐  ┌──────────────┐
 │ MongoDB Atlas│   │ Stripe API   │   │ Cloudinary   │  │ WhatsApp API │
 │ Database     │   │ Payments     │   │ Image Hosting│  │ Notifications│
 └──────────────┘   └──────────────┘   └──────────────┘  └──────────────┘

                            ▲
                            │
                  ┌────────────────────┐
                  │   Admin Dashboard  │
                  │   React + Vite     │
                  └────────────────────┘
```

---

# 🧠 Technology Stack

## Frontend

* React.js
* Vite
* Tailwind CSS
* Axios
* React Router DOM

## Backend

* Node.js
* Express.js
* JWT Authentication
* Stripe API
* Cloudinary API
* Multer
* CORS Middleware

## Database

* MongoDB Atlas
* Mongoose ODM

## Cloud & Deployment

* Vercel (Customer Frontend)
* Vercel (Admin Dashboard)
* Render (Backend API)
* MongoDB Atlas
* Cloudinary

---

# 📂 Project Structure

```bash
PLATEFUL/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── assets/
│   │
│   ├── public/
│   └── package.json
│
├── admin/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── assets/
│   │
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── modals/
│   ├── uploads/
│   ├── config/
│   └── package.json
│
├── .github/
├── README.md
└── .gitignore
```

---

# 🔐 Environment Variables

## Backend (.env)

```env
PORT=4000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

STRIPE_SECRET_KEY=your_stripe_secret_key

STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

CLOUDINARY_CLOUD_NAME=your_cloud_name

CLOUDINARY_API_KEY=your_api_key

CLOUDINARY_API_SECRET=your_api_secret

FRONTEND_URL=https://plateful-fawn.vercel.app
```

---

## Frontend (.env)

```env
VITE_API_URL=https://backend-y7w7.onrender.com

VITE_WHATSAPP_NUMBER=your_whatsapp_number
```

---

## Admin Dashboard (.env)

```env
VITE_API_URL=https://backend-y7w7.onrender.com
```

---

# ⚡ Local Development Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/Anusha-Sundar-2912/Plateful---Ecommerce-for-Food-delivery-Service.git

cd Plateful---Ecommerce-for-Food-delivery-Service
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

## 3️⃣ Start Development Servers

### Backend

```bash
cd backend
npm run server
```

### Customer Frontend

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

# 💳 Payment Workflow

## Supported Payment Methods

* Stripe Online Payments
* Cash On Delivery (COD)

## Payment Flow

```text
Customer Checkout
        │
        ▼
Stripe Checkout Session
        │
        ▼
Payment Verification
        │
        ▼
MongoDB Order Update
        │
        ▼
Admin Dashboard Sync
```

Successful payments are automatically verified and reflected in the order management system.

---

# ☁️ Cloud Infrastructure

| Service       | Purpose                   |
| ------------- | ------------------------- |
| Vercel        | Customer Frontend Hosting |
| Vercel        | Admin Dashboard Hosting   |
| Render        | Backend API Hosting       |
| MongoDB Atlas | Cloud Database            |
| Cloudinary    | Image Storage & Delivery  |
| Stripe        | Payment Processing        |
| WhatsApp API  | Order Notifications       |

---

# 📸 Application Showcase

## Customer Portal

* Home Page
* Food Menu
* Dynamic Search
* Shopping Cart
* Checkout Experience
* Payment Integration
* Order Tracking

## Admin Portal

* Add Food Items
* Manage Menu
* Order Management
* Payment Monitoring
* Delivery Updates

> Add screenshots and GIF demonstrations here for maximum portfolio impact.

---

# 🔥 Key Highlights

* Full-Stack MERN Architecture
* Production Cloud Deployment
* JWT Authentication System
* Stripe Payment Gateway Integration
* Cloudinary Image Hosting
* WhatsApp Order Notifications
* Responsive UI/UX Design
* Secure RESTful APIs
* Dedicated Admin Dashboard
* Order Lifecycle Management
* Cloud-Native Infrastructure
* MongoDB Atlas Integration

---

# 📈 Future Enhancements

* Google OAuth Authentication
* Razorpay Payment Integration
* Email Notifications
* Push Notifications
* Real-Time Order Tracking
* Customer Reviews & Ratings
* Analytics Dashboard
* Docker Containerization
* Kubernetes Deployment
* Role-Based Access Control (RBAC)

---

## ⭐ Support

If you found this project useful, consider giving the repository a star.

It helps support the project and motivates future improvements.
