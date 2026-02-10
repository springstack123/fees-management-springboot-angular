Student Fees Management System

Spring Boot + Angular Full-Stack Project

A full-stack Student Fees Management System designed to manage student records, fee collection, and payment tracking efficiently.
This project uses Spring Boot for backend services and Angular for the frontend UI.

📌 Overview

This system allows administrators to register students, track fee payments, and manage records through a secure and responsive web interface.

🚀 Features

Student registration & management

Fee payment tracking

Admin login & dashboard

Secure REST API integration

Feedback & contact modules

Responsive frontend UI

🛠️ Tech Stack
Backend

Java

Spring Boot

Spring Data JPA

REST APIs

Maven

Frontend

Angular

TypeScript

HTML5

CSS3

Database

MySQL

Tools & Platforms

Git & GitHub

Postman

Docker (Optional)

📂 Project Structure
fees-management-springboot-angular/
│
├── backend/              # Spring Boot backend
├── frontend/client/      # Angular frontend
├── README.md
└── index.html

⚙️ Step-by-Step Setup & Run Guide
✅ Prerequisites

Install the following:

Java JDK 17+

Maven

Node.js & npm

Angular CLI

MySQL

Git

Check installation:

java -version
mvn -version
node -v
npm -v
ng version

▶️ Run Backend (Spring Boot)
Step 1 — Clone Repository
git clone https://github.com/springstack123/fees-management-springboot-angular.git
cd fees-management-springboot-angular/backend

Step 2 — Configure Database

Open:

src/main/resources/application.properties


Update:

spring.datasource.url=jdbc:mysql://localhost:3306/feesdb
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true


Create database in MySQL:

CREATE DATABASE feesdb;

Step 3 — Run Backend
mvn spring-boot:run


Backend will start at:

http://localhost:8080

▶️ Run Frontend (Angular)
Step 1 — Navigate to Frontend
cd ../frontend/client

Step 2 — Install Dependencies
npm install

Step 3 — Start Angular Server
ng serve


Frontend runs at:

http://localhost:4200

🔗 API Testing (Optional)

Use Postman to test backend APIs:

Example:

GET http://localhost:8080/api/students

📌 GitHub Repository

👉 https://github.com/springstack123/fees-management-springboot-angular

👩‍💻 Author

Ankita Santosh Gaikwad
Java / Full-Stack Developer

GitHub:
https://github.com/springstack123

⭐ Support

If you like this project:

Star the repository

Fork and contribute

Share feedback
