# School Management API

🚀 A RESTful API for managing schools, classrooms, students, and authentication with **Role-Based Access Control (RBAC)**. Built using **Node.js, Express, MongoDB, and JWT Authentication**.

---

## **📌 Features**
✅ **Authentication & Authorization** (JWT-based)  
✅ **Role-Based Access Control (RBAC)**
   - `Superadmin` (Full Access)
   - `SchoolAdmin` (Restricted to School Operations)  
✅ **CRUD Operations** for Schools, Classrooms, and Students  
✅ **Swagger API Documentation**  
✅ **Unit Testing with Jest & Supertest**  
✅ **Secure API with Helmet & CORS**  

---

## **📌 Tech Stack**
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT (JSON Web Tokens)
- **API Documentation:** Swagger
- **Testing:** Jest, Supertest
- **Security:** Helmet, CORS, bcryptjs

---

## **📌 Installation & Setup**
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/school-management-api.git
cd school-management-api
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Set Up Environment Variables**
📌 **Create a `.env` file**
```sh
PORT=8000
MONGO_URI=mongodb+srv://your_mongo_uri/school-management
TEST_MONGO_URI=mongodb+srv://your_mongo_uri/school-management-test
JWT_SECRET=your_super_secret_key
```

### **4️⃣ Start the Server**
```sh
node app.js
```
✅ **Server running on:** `http://localhost:8000`  
✅ **Swagger Docs:** `http://localhost:8000/api-docs`

---

## **📌 Database Schema**
### **🔗 Entity Relationships**
- **Users** (`Superadmin`, `SchoolAdmin`) manage the system.
- **Schools** belong to `Superadmin` but are managed by a `SchoolAdmin`.
- **Classrooms** belong to `Schools` and contain `Students`.
- **Students** are enrolled in **Classrooms** within a **School**.

### **📌 Schema Models**
🔍 **Check `models/` folder for full implementation.**

---

## **📌 API Endpoints**
### **1️⃣ Authentication**
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/register` | Register a new user |
| `POST` | `/api/auth/login` | User login |

### **2️⃣ Schools**
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/schools` | Create a new school (Superadmin only) |
| `GET` | `/api/schools` | Get all schools |

### **3️⃣ Classrooms**
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/classrooms` | Create a classroom (Superadmin/SchoolAdmin) |
| `GET` | `/api/classrooms/{schoolId}` | Get all classrooms in a school |

### **4️⃣ Students**
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/students` | Enroll a new student |
| `GET` | `/api/students/{schoolId}` | Get all students in a school |

---

## **📌 Testing**
Run **unit tests** with Jest:
```sh
npm test
```
✅ **Includes Tests for:**
- Authentication (`auth.test.js`)
- Schools (`school.test.js`)
- Classrooms (`classroom.test.js`)
- Students (`student.test.js`)

---

## **📌 API Documentation**
Swagger documentation available at:
```sh
http://localhost:8000/api-docs
```
To enable Swagger:
📌 **Modify `app.js`**
```js
const setupSwagger = require("./config/swagger");
setupSwagger(app);
```

---

## **📌 Security & Best Practices**
✅ **Helmet.js**: Protects against common vulnerabilities  
✅ **CORS**: Ensures safe API access  
✅ **JWT Authentication**: Secure authentication  
✅ **Bcrypt**: Encrypts passwords  

---

## **📌 Contributors**
👨‍💻 **Aman Verma**  
📩 Email: `vermaaman2809@gmail.com`  
👉 GitHub: [Aman](https://github.com/Aman-Verma-28)

---
