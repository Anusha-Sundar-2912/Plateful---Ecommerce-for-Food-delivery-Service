# 🍽️ Plateful

<p align="center">

![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?style=for-the-badge&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?style=for-the-badge&logo=mongodb)
![Stripe](https://img.shields.io/badge/Stripe-Payments-purple?style=for-the-badge&logo=stripe)
![Cloudinary](https://img.shields.io/badge/Cloudinary-Media-blue?style=for-the-badge&logo=cloudinary)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)

</p>

<p align="center">
<b>Full-Stack MERN Food Delivery Platform</b><br>
Secure Authentication • Online Payments • Admin Dashboard • Cloud Deployment
</p>

---

## 🚀 Overview

Plateful is a full-stack food delivery platform built using the MERN stack that enables customers to browse menu items, manage carts, place orders, and complete payments securely through Stripe.

The platform includes a dedicated admin dashboard for restaurant management, allowing administrators to add menu items, manage customer orders, track payment status, and update delivery progress in real time.

The application integrates JWT authentication, Stripe payment processing, Cloudinary image hosting, WhatsApp order notifications, MongoDB Atlas, and cloud deployment infrastructure using Vercel and Render.

---

# 🌐 Live Applications

### 🍴 Customer Frontend

https://plateful-fawn.vercel.app/

### 🛠️ Admin Dashboard

https://admin-nu-swart.vercel.app/

### ⚙️ Backend API

https://backend-y7w7.onrender.com

---

# ✨ Project Highlights

- 🔐 JWT Authentication & Authorization
- 💳 Stripe Payment Integration
- 🛒 Shopping Cart Management
- 📦 Order Lifecycle Management
- ☁️ Cloudinary Image Hosting
- 📨 WhatsApp Order Notifications
- 📊 Dedicated Admin Dashboard
- 📱 Fully Responsive User Interface
- 🚀 Production Cloud Deployment
- 🌍 RESTful API Architecture

---

# 🧠 Technology Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- Axios
- React Router DOM

## Backend

- Node.js
- Express.js
- JWT Authentication
- Stripe API
- Cloudinary API
- Multer
- CORS Middleware

## Database

- MongoDB Atlas
- Mongoose ODM

## Deployment

- Vercel (Frontend)
- Vercel (Admin Dashboard)
- Render (Backend)
- MongoDB Atlas
- Cloudinary

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

# ✨ Features

## 👤 Customer Features

- User Registration & Login
- JWT Authentication
- Browse Categorized Menu
- Dynamic Food Search
- Add / Remove Cart Items
- Quantity Management
- Persistent Shopping Cart
- Responsive User Interface
- Secure Checkout Flow
- Stripe Online Payments
- Cash On Delivery (COD)
- Order Placement
- Order History Tracking
- WhatsApp Order Notifications

---

## 🛠️ Admin Dashboard Features

- Add New Menu Items
- Upload Food Images
- Cloudinary Media Storage
- View Complete Menu Inventory
- Delete Existing Items
- Manage Customer Orders
- Update Order Status
- Track Payment Status
- View Customer Details
- Restaurant Operations Management

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

## Frontend (.env)

```env
VITE_API_URL=https://backend-y7w7.onrender.com

VITE_WHATSAPP_NUMBER=your_whatsapp_number
```

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

## 3️⃣ Run Development Servers

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

# 💳 Payment System

### Supported Payment Methods

- Stripe Online Payments
- Cash On Delivery (COD)

### Payment Workflow

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

| Service | Purpose |
|----------|----------|
| Vercel | Customer Frontend Hosting |
| Vercel | Admin Dashboard Hosting |
| Render | Backend API Hosting |
| MongoDB Atlas | Cloud Database |
| Cloudinary | Image Storage & Delivery |
| Stripe | Payment Processing |
| WhatsApp API | Order Notifications |

---

# 📸 Application Showcase

## Customer Portal

- Homepage
- Food Menu
- Search Functionality
- Shopping Cart
- Checkout Page
- Stripe Payment Integration
- Order History

## Admin Portal

- Add Food Items
- List Menu Items
- Order Management
- Payment Monitoring
- Delivery Status Updates

> Add screenshots, GIFs, or demo videos here for maximum portfolio impact.

---

# 🔥 Why This Project Stands Out

- Production-Ready MERN Application
- Real Cloud Deployment
- Secure JWT Authentication
- Stripe Payment Gateway Integration
- Cloudinary Media Management
- WhatsApp Notification System
- Dedicated Admin Dashboard
- RESTful API Design
- Mobile Responsive Interface
- End-to-End Order Management Workflow
- MongoDB Atlas Integration
- Modern React Architecture

---

# 📈 Future Enhancements

- Google OAuth Login
- Razorpay Integration
- Email Notifications
- Push Notifications
- Real-Time Order Tracking
- Customer Reviews & Ratings
- Analytics Dashboard
- Docker Containerization
- Kubernetes Deployment
- Role-Based Access Control (RBAC)

---

## ⭐ Star the Repository

If you found this project useful or interesting, consider giving the repository a star.

It helps support the project and motivates future improvements.
