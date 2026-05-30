# 🍽️ Plateful

<p align="center">
  <h3 align="center">A Full-Stack Food Delivery Ecosystem Built with the MERN Stack</h3>
</p>

<p align="center">
  From menu discovery and secure payments to restaurant operations and order fulfillment.
</p>

---

## 🌟 Overview

Plateful is a production-style food delivery platform designed to simulate the complete workflow of modern online food ordering applications.

Customers can browse curated menus, search for dishes, manage carts, place orders, complete secure Stripe payments, and track delivery progress through an elegant and responsive interface.

Restaurant administrators gain access to a dedicated dashboard for menu management, order processing, payment monitoring, and delivery status updates.

Unlike traditional food ordering clones that focus only on frontend functionality, Plateful models the entire order lifecycle—from discovering a meal to fulfilling and managing that order in production.

---

## 🚀 Live Applications

| Application         | URL                               |
| ------------------- | --------------------------------- |
| 🍴 Customer Portal  | https://plateful-fawn.vercel.app  |
| 🛠️ Admin Dashboard | https://admin-nu-swart.vercel.app |
| ⚙️ Backend API      | https://backend-y7w7.onrender.com |

---

## ✨ Key Features

### 👤 Customer Features

* Secure User Authentication (JWT)
* Responsive User Interface
* Categorized Food Menu
* Instant Search Functionality
* Persistent Shopping Cart
* Quantity Management
* Stripe Payment Integration
* Cash on Delivery (COD)
* Order Placement
* Order Tracking & History
* WhatsApp Order Notifications
* Mobile-Friendly Experience

### 🛠️ Administrative Features

* Add New Menu Items
* Upload Food Images
* Manage Food Inventory
* View Customer Orders
* Monitor Payment Status
* Update Delivery Progress
* Manage Restaurant Operations

### ☁️ Cloud Features

* MongoDB Atlas Database
* Cloudinary Media Storage
* Stripe Payment Gateway
* Vercel Deployment
* Render Backend Hosting

---

## 🏗️ System Architecture

```text
                  Customer Portal
                     (React)
                         │
                         ▼
                 Express REST API
                         │
       ┌─────────────────┼─────────────────┐
       ▼                 ▼                 ▼

 MongoDB Atlas      Stripe API      Cloudinary
    Database         Payments          Media

                         ▲
                         │

                 Admin Dashboard
                     (React)
```

---

## 🔄 Order Processing Workflow

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
     │
     ▼
Customer Tracking
```

---

## 🧑‍🍳 Customer Experience

### 🍴 Menu Discovery

* Browse curated food collections
* Search dishes instantly
* Explore featured offerings
* View categorized menus
* Responsive browsing experience

### 🛒 Cart Management

* Add products to cart
* Update item quantities
* Remove unwanted items
* Persistent cart storage

### 💳 Checkout & Payments

* Secure Stripe Checkout
* Cash on Delivery Option
* Order Verification Workflow
* Real-Time Payment Processing

### 📦 Order Tracking

* View Order History
* Monitor Order Status
* Track Delivery Progress
* Receive WhatsApp Notifications

---

## 🛠️ Restaurant Operations Dashboard

The Admin Dashboard serves as a centralized control panel for restaurant management.

### 🍽️ Menu Management

* Create New Menu Items
* Upload Product Images
* Manage Pricing
* Organize Categories
* Remove Unavailable Products

### 📦 Order Management

* Monitor Incoming Orders
* View Customer Information
* Track Payment Status
* Update Delivery Stages

### ☁️ Media Management

* Cloudinary Image Storage
* Optimized Image Delivery
* Centralized Asset Management

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

## 📂 Project Structure

```bash
PLATEFUL
│
├── frontend/          # Customer Application
│
├── admin/             # Admin Dashboard
│
├── backend/           # REST API & Business Logic
│
├── .github/
│
└── README.md
```

---

# 📸 Platform Walkthrough

## 🏠 Homepage

Modern landing page featuring search functionality, featured dishes, and streamlined navigation.

<img width="1919" height="1054" alt="Screenshot 2026-05-30 201645" src="https://github.com/user-attachments/assets/0a4c8c0f-556f-4ad6-bad6-7e61a565fc94" />

---

## ⭐ Today's Special Offers

Curated specials showcasing signature menu items and promotional offerings.

<img width="1916" height="1076" alt="Screenshot 2026-05-30 201700" src="https://github.com/user-attachments/assets/c4d076e4-3902-4b95-9994-599077afd183" />

---

## 📖 Menu Experience

Categorized food browsing experience including Breakfast, Lunch, Dinner, Italian, Mexican, Desserts, and Drinks.

<img width="1919" height="1089" alt="Screenshot 2026-05-30 204430" src="https://github.com/user-attachments/assets/9fab5305-9e4c-4cc3-a743-92c39c40fde9" />
<img width="1907" height="986" alt="Screenshot 2026-05-30 201746" src="https://github.com/user-attachments/assets/b1b2e3d0-9606-4458-88c9-ffe1770183e5" />

---

## 🛒 Shopping Cart

Interactive cart management with quantity controls, dynamic totals, and checkout integration.

<img width="1918" height="1019" alt="Screenshot 2026-05-30 212537" src="https://github.com/user-attachments/assets/6afd9001-2c9e-4186-a924-e70e6c02a771" />

---

## 💳 Checkout Experience

Customer information, order summary, tax calculations, and payment method selection.

<img width="1919" height="981" alt="Screenshot 2026-05-30 213145" src="https://github.com/user-attachments/assets/152ea827-4f65-4901-b754-2b5353da4f8b" />

---

## 💰 Stripe Payment Gateway

Secure payment processing through Stripe Checkout.

<img width="1919" height="1005" alt="Screenshot 2026-05-30 213227" src="https://github.com/user-attachments/assets/2225f97e-18c3-4feb-91a7-58e3052d3d67" />

---

## 📦 Order Tracking

Customers can monitor order status and access their order history.

<img width="1919" height="990" alt="Screenshot 2026-05-30 213244" src="https://github.com/user-attachments/assets/77a8257f-5bea-41be-9e1d-d7438806cd5e" />


---

## 📞 Contact & Support

Integrated contact system with WhatsApp order notifications.

<img width="1919" height="993" alt="Screenshot 2026-05-30 214301" src="https://github.com/user-attachments/assets/d621ab82-39d8-47b0-87ee-847dcf34ca21" />

---

# 🛠️ Administration Dashboard

## ➕ Add Menu Items

Create dishes, upload images, assign categories, and manage pricing.

<img width="1915" height="977" alt="Screenshot 2026-05-30 213836" src="https://github.com/user-attachments/assets/28b44305-b5c1-4c1b-876d-7d0e6d91834c" />

---

## 📋 Menu Inventory

Manage all menu items, ratings, popularity metrics, and categories.

<img width="1919" height="1000" alt="Screenshot 2026-05-30 213909" src="https://github.com/user-attachments/assets/9b8e0bbc-e64d-4ff8-97ce-82393977616c" />

---

## 🚚 Order Management

Monitor orders, verify payments, and update delivery status in real time.

<img width="1919" height="1001" alt="Screenshot 2026-05-30 213930" src="https://github.com/user-attachments/assets/86f2fa00-863c-4625-9bf8-fd598823cf7a" />

---

## 🎯 Skills Demonstrated

* Full-Stack Development
* REST API Design
* Authentication & Authorization
* Payment Gateway Integration
* Cloud Media Management
* Database Modeling
* Cloud Deployment
* Admin Dashboard Development
* E-Commerce Workflows
* State Management
* Responsive UI Development
* Production-Style Architecture

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

## 🎬 Demo Flow

1. User Registration & Login
2. Menu Exploration
3. Search & Category Filtering
4. Add To Cart
5. Checkout Process
6. Stripe Payment
7. Order Creation
8. WhatsApp Notification
9. Order Tracking
10. Admin Login
11. Menu Management
12. Order Processing
13. Delivery Status Updates

---

## 📈 Project Highlights

* Full MERN Stack Architecture
* Secure JWT Authentication
* Stripe Payment Integration
* Cloudinary Media Management
* MongoDB Atlas Database
* Dedicated Admin Dashboard
* WhatsApp Order Notifications
* Responsive User Experience
* Cloud Deployment (Vercel + Render)
* Real-World Food Delivery Workflow

---
