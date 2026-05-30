# 🍽️ Plateful

<p align="center">
  <b>A complete food ordering ecosystem built with the MERN stack.</b>
</p>

<p align="center">
From menu discovery and secure payments to restaurant operations and order fulfillment.
</p>

---

## 🌟 What is Plateful?

Plateful is a full-stack food delivery platform that recreates the workflow of modern food-ordering applications.

Customers can browse menus, manage carts, place orders, complete payments through Stripe, and track their purchases through a clean and responsive interface.

On the operational side, restaurant administrators get a dedicated dashboard for menu management, payment monitoring, order processing, and delivery status updates.

Instead of focusing only on frontend screens, the project was designed around the complete order lifecycle — from discovering a meal to processing and managing that order in production.

---

## 🚀 Live Applications

| Application         | Link                              |
| ------------------- | --------------------------------- |
| 🍴 Customer Portal  | https://plateful-fawn.vercel.app  |
| 🛠️ Admin Dashboard | https://admin-nu-swart.vercel.app |
| ⚙️ Backend API      | https://backend-y7w7.onrender.com |

---

## ✨ Why This Project Is Different

Most food delivery clones stop at displaying products and adding items to a cart.

Plateful goes further by implementing:

* Secure JWT Authentication
* Stripe Checkout Integration
* Payment Verification Workflow
* Cloudinary Image Management
* Persistent Shopping Cart
* Order Tracking
* WhatsApp Order Notifications
* Restaurant Administration Dashboard
* Delivery Status Management
* Cloud Deployment Across Multiple Services

The result is a platform that models how a real-world food ordering system operates behind the scenes.

---

## 🏗️ Architecture

```text
Customer Application (React)
            │
            ▼
      Express API Layer
            │
 ┌──────────┼──────────┐
 ▼          ▼          ▼

MongoDB   Stripe   Cloudinary
 Atlas   Payments    Media

            ▲
            │

Admin Dashboard (React)
```

---

## 🍴 Customer Experience

### Discover Food

* Browse categorized menu items
* Search dishes instantly
* Explore featured offerings
* Responsive mobile-first interface

### Cart & Checkout

* Add or remove items
* Update quantities
* Persistent cart state
* Secure checkout experience

### Payments

* Stripe online payments
* Cash on Delivery option
* Payment verification workflow

### Orders

* Order placement
* Order history
* Status tracking
* WhatsApp confirmations

---

## 🛠️ Restaurant Operations Dashboard

The administration dashboard provides a centralized control panel for managing restaurant operations.

### Menu Management

* Add new food items
* Upload images
* Manage menu inventory
* Remove unavailable items

### Order Management

* Monitor incoming orders
* View customer information
* Update delivery status
* Track payment state

### Media Management

* Cloudinary-powered image storage
* Optimized image delivery
* Centralized media handling

---

## ⚙️ Technology Stack

### Frontend

* React 19
* Vite
* Tailwind CSS
* Axios
* React Router DOM

### Backend

* Node.js
* Express.js
* JWT Authentication
* Stripe API
* Cloudinary API
* Multer
* dotenv

### Database

* MongoDB Atlas
* Mongoose

### Infrastructure

* Vercel
* Render
* Cloudinary
* MongoDB Atlas

---

## 💳 Order Processing Flow

```text
Browse Menu
     │
     ▼
Add To Cart
     │
     ▼
Checkout
     │
     ▼
Stripe Payment
     │
     ▼
Payment Verification
     │
     ▼
Order Creation
     │
     ▼
Admin Dashboard
     │
     ▼
Delivery Processing
```

---

## 📂 Project Structure

```bash
PLATEFUL
│
├── frontend/     # Customer application
├── admin/        # Restaurant dashboard
├── backend/      # API & business logic
│
├── .github/
└── README.md
```

---

## 🔐 Environment Variables

### Backend

```env
PORT=4000

MONGO_URI=

JWT_SECRET=

STRIPE_SECRET_KEY=

STRIPE_PUBLISHABLE_KEY=

CLOUDINARY_CLOUD_NAME=

CLOUDINARY_API_KEY=

CLOUDINARY_API_SECRET=

FRONTEND_URL=https://plateful-fawn.vercel.app
```

### Frontend

```env
VITE_API_URL=https://backend-y7w7.onrender.com

VITE_WHATSAPP_NUMBER=
```

### Admin

```env
VITE_API_URL=https://backend-y7w7.onrender.com
```

---

## 📸 Screenshots

### Customer Portal

* Homepage
* Menu Browsing
* Cart Management
* Checkout Experience
* Order Tracking

### Restaurant Dashboard

* Menu Management
* Order Monitoring
* Payment Tracking
* Delivery Status Updates

> Add screenshots or GIFs here to showcase the platform visually.

---

## 🎯 Skills Demonstrated

* Full-Stack Development
* REST API Design
* Authentication & Authorization
* Payment Gateway Integration
* Cloud Media Management
* Database Modeling
* Production Deployment
* Admin Dashboard Development
* E-Commerce Workflows
* State Management
* Responsive UI Development

```
```
