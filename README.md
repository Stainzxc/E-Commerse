# 👟 SneakerPhils

SneakerPhils is a simple full-stack e-commerce web application that displays sneaker products for Men and Women. It uses a modern React frontend with a Node.js (Express) backend and MongoDB Atlas for data storage.

---

## 🚀 Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Axios
* React Router

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose

---

## ✨ Features

* View sneaker products
* Separate pages for:

  * Men
  * Women
* Fetch products from backend API
* Category-based filtering (Men/Women)
* Basic product display (name, description, price)
* Add to cart UI (frontend only)

---

## 📁 Project Structure

```
SneakerPhils/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   └── package.json
│
├── backend/
│   ├── controller/
│   ├── routes/
│   ├── models/
│   ├── server.js
│   └── package.json
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```
git clone https://github.com/your-username/sneakerphils.git
cd sneakerphils
```

---

### 2. Backend setup

```
cd backend
npm install
```

Create `.env` file:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Run backend:

```
npm run dev
```

---

### 3. Frontend setup

```
cd frontend
npm install
npm run dev
```

App will run on:

```
http://localhost:5173
```

---

## 🔗 API Endpoints

### Get all products

```
GET /api/products
```

### Get products by category

```
GET /api/products?category=Men
GET /api/products?category=Women
```

### Get single product

```
GET /api/products/:id
```

### Create product

```
POST /api/products
```

---

## 🧠 Notes

* MongoDB uses `_id` instead of auto-increment IDs
* Filtering is handled in the backend using query parameters
* Frontend uses `.map()` to render product lists
* Tailwind CSS is used for styling

---

## 🚧 Future Improvements

* Add authentication (login/register)
* Add real cart functionality
* Add checkout system
* Admin dashboard for product management
* Image upload support
* Pagination & search

---

## 👨‍💻 Author

* Ruel Almonia

---

## 📄 License

This project is for learning purposes.
SneakerPhils is a full-stack MERN e-commerce application that demonstrates product management, category-based filtering, and cloud-based image handling using Cloudinary. Built with React (Vite), Tailwind CSS, Node.js (Express), and MongoDB.
