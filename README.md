# 📚 Student Fees Management System

A full-stack application for managing student records, fee collection, and payment tracking using Spring Boot and Angular.

## 🚀 Features

- Student registration & management
- Fee payment tracking
- Secure admin dashboard
- REST API integration
- Responsive UI

## 🛠️ Tech Stack

**Backend:** Java, Spring Boot, Spring Data JPA, MySQL, Maven  
**Frontend:** Angular, TypeScript, HTML5, CSS3  
**Tools:** Git, Postman, Docker (optional)

## 📂 Project Structure


```
fees-management-springboot-angular/
│
├── backend/                                 # Spring Boot Backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/example/
│   │   │   │   ├── controller/              # REST Controllers
│   │   │   │   ├── service/                 # Business Logic
│   │   │   │   ├── repository/              # Data Access Layer
│   │   │   │   ├── entity/                  # JPA Entities
│   │   │   │   ├── dto/                     # Data Transfer Objects
│   │   │   │   ├── config/                  # Configuration Classes
│   │   │   │   └── FeesManagementApplication.java
│   │   │   └── resources/
│   │   │       ├── application.properties   # Database & Server Config
│   │   │       └── static/
│   │   └── test/                            # Unit Tests
│   ├── pom.xml                              # Maven Configuration
│   └── README.md                            # Backend Documentation
│
├── frontend/                                # Angular Frontend
│   └── client/
│       ├── src/
│       │   ├── app/
│       │   │   ├── components/              # UI Components
│       │   │   ├── services/                # API Services
│       │   │   ├── models/                  # TypeScript Models
│       │   │   ├── guards/                  # Route Guards
│       │   │   ├── interceptors/            # HTTP Interceptors
│       │   │   ├── app.module.ts            # Root Module
│       │   │   ├── app-routing.module.ts    # Routing Configuration
│       │   │   └── app.component.ts
│       │   ├── assets/                      # Images, Icons
│       │   ├── styles/                      # Global Styles
│       │   ├── index.html
│       │   └── main.ts
│       ├── angular.json                     # Angular Configuration
│       ├── package.json                     # Node Dependencies
│       ├── tsconfig.json                    # TypeScript Configuration
│       └── README.md                        # Frontend Documentation
│
├── docker-compose.yml                       # Docker Configuration (Optional)
├── .gitignore
└── README.md                                # Project Documentation

```


## ⚙️ Prerequisites

- Java JDK 17+
- Node.js 16+
- Maven 3.6+
- Angular CLI
- MySQL 8.0+

Verify installation:
```bash
java -version && mvn -version && node -v && ng version
```

## 🚀 Quick Start

### Backend Setup

```bash
# 1. Clone repository
git clone https://github.com/springstack123/fees-management-springboot-angular.git
cd fees-management-springboot-angular/backend

# 2. Create database
mysql -u root -p
CREATE DATABASE feesdb;

# 3. Update application.properties
# src/main/resources/application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/feesdb
spring.datasource.username=root
spring.datasource.password=your_password

# 4. Run application
mvn spring-boot:run
```

**Backend runs at:** `http://localhost:8080`

### Frontend Setup

```bash
# 1. Navigate to frontend
cd ../frontend/client

# 2. Install dependencies
npm install

# 3. Start Angular server
ng serve --open
```

**Frontend runs at:** `http://localhost:4200`

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/students` | Get all students |
| POST | `/api/students` | Create student |
| GET | `/api/fees` | Get all fees |
| POST | `/api/payments` | Record payment |
| GET | `/api/dashboard/stats` | Dashboard statistics |

## 🧪 Test API (Postman)

```
Base URL: http://localhost:8080/api

Example: GET http://localhost:8080/api/students
```

## 🐳 Docker Setup

```bash
docker-compose up -d
# Runs on http://localhost:4200
```

## 📚 Key Files

| File | Purpose |
|------|---------|
| `pom.xml` | Maven dependencies |
| `application.properties` | Database & server config |
| `package.json` | Node dependencies |
| `angular.json` | Angular configuration |

## 🔐 Security Tips

- Use environment variables for credentials
- Enable CORS in Spring Boot
- Use JWT for authentication
- Validate all inputs
- Use HTTPS in production

## 🐛 Troubleshooting

**Port 8080 in use?**
```bash
lsof -i :8080 && kill -9 <PID>
```

**Database connection error?**
- Verify MySQL is running
- Check credentials in `application.properties`

**npm install fails?**
```bash
npm cache clean --force && npm install
```

## 📊 Database Schema

```sql
CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    enrollment_number VARCHAR(50) UNIQUE
);

CREATE TABLE fees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    amount DECIMAL(10,2),
    due_date DATE,
    status ENUM('PENDING','PAID'),
    FOREIGN KEY (student_id) REFERENCES students(id)
);

CREATE TABLE payments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    amount DECIMAL(10,2),
    payment_date DATE,
    status ENUM('SUCCESS','PENDING'),
    FOREIGN KEY (student_id) REFERENCES students(id)
);
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/YourFeature`
3. Commit changes: `git commit -m 'Add YourFeature'`
4. Push: `git push origin feature/YourFeature`
5. Open Pull Request

🔗 Live Demo

Frontend:
https://fees-frontend.onrender.com

Backend API:
https://fees-management-springboot-angular.onrender.com/student_fee/register

## 📝 License

MIT License - feel free to use commercially

## 👩‍💻 Author

**Ankita Santosh Gaikwad**  
Java / Full-Stack Developer  
📌 GitHub: [@springstack123](https://github.com/springstack123)

## ⭐ Support

- ⭐ Star this repository
- 🔗 Fork and contribute
- 📝 Report issues
- 💬 Provide feedback

---

**Repository:** [fees-management-springboot-angular](https://github.com/springstack123/fees-management-springboot-angular)  
**Status:** Active Development  
**Version:** 1.0.0
