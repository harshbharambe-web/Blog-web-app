# 📝 Blog Application

A full-stack blog application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This project demonstrates how a client-server architecture works using RESTful APIs to manage blog content with complete CRUD functionality.

---

## 🏠 Home
<img width="1913" height="937" alt="Website Feed" src="https://github.com/user-attachments/assets/5fbd15fb-04c8-4410-9265-46249de254f7" />

---

## 🚀 Project Overview

This application allows users to create, view, update, and delete blog posts. The system is designed using a REST-based architecture where the frontend interacts with backend APIs through HTTP requests.

The backend handles routing, business logic, and database operations, while MongoDB is used to store blog data.

---

## 🧠 Architecture

The application follows a **3-layer architecture**:

### 1️⃣ Client (Frontend)
- Built using React.js  
- Handles UI rendering and user interaction  
- Sends HTTP requests (GET, POST, PUT, DELETE)  
- Displays blog posts dynamically  

### 2️⃣ Server (Backend)
- Built using Node.js and Express.js  
- Handles API routes and request processing  
- Contains business logic for blog management  


---

## 🔁 Working Flow

- User performs an action (create/update/delete blog)  
- Frontend sends an HTTP request to the server  
- Server processes the request using defined routes  
- Server interacts with MongoDB to perform the operation  
- Response is sent back to the frontend  
- UI updates accordingly  

---

## 🔗 API Design

The application uses RESTful APIs to manage blog posts.

### 📌 Endpoints

| Method | Endpoint      | Description           |
|--------|---------------|-----------------------|
| GET    | /posts        | Retrieve all posts    |
| GET    | /posts/:id    | Retrieve single post  |
| POST   | / posts/new   | Create new post       |
| PUT    |/posts/:id/edit| Update existing post  |
| DELETE | /posts/:id    | Delete post           |

---

## ⚙️ How APIs Work

- **GET** → Fetch blog data  
- **POST** → Send new blog data  
- **PUT** → Update existing blog  
- **DELETE** → Remove blog  

### Example Flow:

- User creates a post → `POST /posts`  
- Server stores data in MongoDB  
- Server responds with success  
- Frontend updates UI  

---

## 🛠️ Tech Stack

### Backend
- Node.js  
- Express.js  

---


## 📸 Screenshots

Home | All Blogs | Create Blog | Edit Blog | Delete  

<img width="1917" height="928" alt="login" src="https://github.com/user-attachments/assets/cae6c223-a692-4376-9cf3-7fb779d478bd" />


<img width="1918" height="932" alt="New post" src="https://github.com/user-attachments/assets/ff99b709-dc55-47bb-b4e1-8223ecbce963" />

<img width="1918" height="926" alt="Edit post" src="https://github.com/user-attachments/assets/740e5296-6652-48b0-8c7c-6eb5950d5c45" />





---

## 📚 Key Learnings

- Designing RESTful APIs  
- Understanding client-server architecture  
- Integrating frontend with backend  
- Performing CRUD operations using MongoDB  
- Structuring a full-stack application  

---

## 🚀 Future Improvements

- Add user authentication (login/signup)  
- Implement likes & comments  
- Add search & filtering  
- Improve UI/UX design  
- Deploy application (Vercel / Render / MongoDB Atlas)  

---

## 🤝 Conclusion

This project helped build a strong foundation in backend development, API design, and full-stack integration by implementing a practical blogging system.
