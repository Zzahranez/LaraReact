# 🚀 React + Vite Frontend & Laravel Backend REST API

## 📌 About This Project

This project is a **Fullstack Web Application** consisting of two separate parts:

- 🎨 **Frontend:** Built with **React** (Vite) for fast development and a modern UI.
- 🔗 **Backend:** Developed using **Laravel**, providing RESTful API services for data management.

The main purpose of this project is to **demonstrate API communication between a React frontend and a Laravel backend** for CRUD (Create, Read, Update, Delete) operations.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, Vite, Bootstrap |
| Backend | Laravel, PHP |
| Database | MySQL / SQLite |
| API Communication | Fetch API / Axios |

---

## 📂 Project Folder Structure
.
├── frontend/ # React + Vite (Frontend)
└── backend/ # Laravel REST API (Backend)


---

## 🚀 How to Run This Project Locally

### ✅ 1. Clone This Repository

```bash
git clone https://github.com/your-username/your-project.git

###✅ 2. Backend (Laravel) Setup
cd backend
composer install
cp .env.example .env
php artisan key:generate
👉 Configure your .env file with your database settings.
👉 Run database migration:
👉 Start Laravel server:
php artisan serve
Laravel API URL:
http://127.0.0.1:8000

###✅ 3. Frontend (React + Vite) Setup
cd frontend
npm install
npm run dev
React Frontend URL:
http://127.0.0.1:5173

🌐 Example API Endpoints (Laravel Backend)
| Method | Endpoint                    | Description           |
| ------ | --------------------------- | --------------------- |
| GET    | `/api/Employee/get`         | Get all employees     |
| GET    | `/api/Employee/get/{id}`    | Get employee by ID    |
| POST   | `/api/Employee/store`       | Create a new employee |
| PUT    | `/api/Employee/update/{id}` | Update employee by ID |
| DELETE | `/api/Employee/delete/{id}` | Delete employee by ID |

✅ About The Author
👨‍💻 Zahran Ezaldi
Learning Fullstack Web Development (React + Laravel API) for internship and real-world project experience.
✅ Notes
This project is separated frontend and backend (not monolithic).

You can deploy frontend and backend to different servers if needed.

For API testing, you can also use Postman, Thunder Client, or Insomnia.
