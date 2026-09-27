# 🛍️ Trend — MERN Stack Fashion E-Commerce Platform

**Trend** is a full-stack fashion e-commerce platform built using the **MERN stack**. It provides a complete online shopping experience with user authentication, product browsing and filtering, shopping cart management, PayPal checkout, order management, and an admin dashboard for managing products, inventory, and sales.

The project demonstrates practical experience in **full-stack web development**, including frontend state management, REST API development, authentication, database operations, payment integration, and deployment.

---

## 🔐 Admin Dashboard

The application includes a protected admin dashboard for product, inventory, order, and sales management.

Admin access is restricted to authorized users.

## 🚀 Live Demo

🔗 **Live Website:** https://trend-pwrkumxy1-ankit-mangarajs-projects.vercel.app/

🔗 **GitHub Repository:** https://github.com/ankitmangaraj/Trend

---

## ✨ Features

### 👤 User Features

* User registration and login
* User authentication
* Browse fashion products
* Product search
* Product filtering
* Product details
* Product size and color selection
* Shopping cart
* Cart quantity management
* Remove products from cart
* Checkout
* PayPal payment integration
* Order placement
* Order history
* Responsive user interface

### 👕 Fashion E-Commerce Features

* Fashion product catalog
* Men's and women's products
* Product categories
* Product collections
* Product search and filtering
* Product pricing
* Discount pricing
* Product sizes and colors
* Inventory and stock management
* Shopping cart management
* Order processing
* Payment integration

### 🔐 Admin Features

* Admin authentication
* Admin dashboard
* Sales overview
* Revenue overview
* Total orders overview
* Product management
* Add products
* Edit products
* Delete products
* Inventory management
* Order management
* View customer orders

---

## 🛠️ Tech Stack

### Frontend

* **React.js**
* **Redux Toolkit**
* **React Router**
* **Tailwind CSS**
* **Axios**
* **Vite**

### Backend

* **Node.js**
* **Express.js**
* **REST APIs**
* **JWT Authentication**
* **bcrypt.js**

### Database

* **MongoDB**
* **Mongoose**
* **MongoDB Atlas**

### Payment

* **PayPal Sandbox**

### Deployment

* **Vercel**

---

## 🏗️ Project Architecture

Trend follows a client-server architecture where the React frontend communicates with the Node.js/Express backend through REST APIs.

```text
                    ┌──────────────────────┐
                    │      React.js        │
                    │      Frontend        │
                    └──────────┬───────────┘
                               │
                         REST API / Axios
                               │
                               ▼
                    ┌──────────────────────┐
                    │     Express.js       │
                    │      Backend         │
                    └──────────┬───────────┘
                               │
                         Mongoose ODM
                               │
                               ▼
                    ┌──────────────────────┐
                    │       MongoDB        │
                    │       Database       │
                    └──────────────────────┘

                               │
                               ▼
                    ┌──────────────────────┐
                    │   PayPal Sandbox     │
                    │  Payment Processing  │
                    └──────────────────────┘
```

---

## 📁 Project Structure

```text
Trend/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── data/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

---

## 🔑 Core Functionalities

### 🔐 Authentication

Trend provides authentication for user-specific functionality such as:

* User accounts
* Cart management
* Checkout
* Orders
* Admin functionality

Passwords are securely handled using **bcrypt.js**, while authentication uses token-based authentication.

### 👕 Product Management

Users can browse fashion products using:

* Categories
* Collections
* Search
* Product details
* Price information
* Discount pricing
* Available sizes
* Available colors
* Stock information

### 🛒 Shopping Cart

Users can:

* Add products to cart
* Select product variants
* Update product quantities
* Remove products
* Review cart contents
* Continue to checkout

### 💳 PayPal Checkout

Trend integrates **PayPal Sandbox** to demonstrate the checkout and payment flow without processing real transactions.

### 📦 Order Management

After completing checkout, users can access their orders and review previous purchases.

Administrators can also view and manage customer orders through the admin dashboard.

### 📊 Admin Dashboard

The admin dashboard provides functionality for managing the fashion e-commerce platform, including:

* Products
* Inventory
* Orders
* Sales information
* Revenue overview

---

## 🔄 Application Flow

```text
User
 │
 ▼
Register / Login
 │
 ▼
Browse Fashion Products
 │
 ▼
Search / Filter
 │
 ▼
Product Details
 │
 ▼
Select Size / Color
 │
 ▼
Add to Cart
 │
 ▼
Checkout
 │
 ▼
PayPal Payment
 │
 ▼
Order Created
 │
 ▼
Order History
```

---

## ⚙️ Environment Variables

Create environment variable files for the frontend and backend.

### Backend

Create:

```text
backend/.env
```

Example:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=9000

PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_SECRET=your_paypal_secret
```

### Frontend

Create:

```text
frontend/.env
```

Example:

```env
VITE_BACKEND_URL=http://localhost:9000
VITE_PAYPAL_CLIENT_ID=your_paypal_client_id
```

> ⚠️ **Never commit your `.env` files or secret credentials to GitHub.**

---

## 💻 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/ankitmangaraj/Trend.git
```

```bash
cd Trend
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Configure Backend Environment Variables

Create a `.env` file inside the `backend` directory and add your MongoDB, JWT, and PayPal configuration.

### 4. Start the Backend

```bash
npm run dev
```

The backend will run on:

```text
http://localhost:9000
```

### 5. Install Frontend Dependencies

Open another terminal:

```bash
cd frontend
npm install
```

### 6. Configure Frontend Environment Variables

Create a `.env` file inside the `frontend` directory and configure the backend URL and PayPal client ID.

### 7. Start the Frontend

```bash
npm run dev
```

The frontend will be available through the Vite development server.

---

## 🌐 Deployment

Trend is deployed using **Vercel**.

### Production Website

🔗 **https://trend-pwrkumxy1-ankit-mangarajs-projects.vercel.app/**

The frontend communicates with the backend through environment-based API configuration.

---

## 🧠 What I Learned

Through this project, I gained practical experience with:

* Building a full-stack MERN application
* Developing a fashion e-commerce platform
* Designing and consuming REST APIs
* Connecting React with an Express backend
* MongoDB database operations
* Mongoose schemas and models
* Authentication and authorization
* Redux Toolkit state management
* React Router
* API integration using Axios
* Shopping cart state management
* Payment gateway integration
* Admin dashboard development
* Product and inventory management
* Order management
* Deployment with Vercel
* Environment variable configuration
* Debugging frontend and backend integration issues

---

## 🔮 Future Improvements

Possible future improvements include:

* Product reviews and ratings
* Wishlist functionality
* Advanced product recommendations
* Coupon and discount system
* Email order notifications
* Multiple payment gateways
* Improved admin analytics
* Cloud image storage
* Order status notifications
* Enhanced search functionality
* Improved mobile responsiveness

---

## 👨‍💻 Author

### Ankit Mangaraj

* **GitHub:** https://github.com/ankitmangaraj
* **LinkedIn:** https://www.linkedin.com/in/ankitmangaraj
* **LeetCode:** https://leetcode.com/u/believer_8/

---

## 📄 License

This project is created for **educational and portfolio purposes**.
