<<<<<<< HEAD
# MongoDB Fundamentals - Week 1

## Setup Instructions

Before you begin this assignment, please make sure you have the following installed:

1. **MongoDB Community Edition** - [Installation Guide](https://www.mongodb.com/docs/manual/administration/install-community/)
2. **MongoDB Shell (mongosh)** - This is included with MongoDB Community Edition
3. **Node.js** - [Download here](https://nodejs.org/)

### Node.js Package Setup

Once you have Node.js installed, run the following commands in your assignment directory:

```bash
# Initialize a package.json file
npm init -y

# Install the MongoDB Node.js driver
npm install mongodb
```

## Assignment Overview

This week focuses on MongoDB fundamentals including:
- Creating and connecting to MongoDB databases
- CRUD operations (Create, Read, Update, Delete)
- MongoDB queries and filters
- Aggregation pipelines
- Indexing for performance

## Submission

Complete all the exercises in this assignment and push your code to GitHub using the provided GitHub Classroom link.

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install MongoDB locally or set up a MongoDB Atlas account
4. Run the provided `insert_books.js` script to populate your database
5. Complete the tasks in the assignment document

## Files Included

- `Week1-Assignment.md`: Detailed assignment instructions
- `insert_books.js`: Script to populate your MongoDB database with sample book data

## Requirements

- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- MongoDB Shell (mongosh) or MongoDB Compass

## Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [MongoDB University](https://university.mongodb.com/)
- [MongoDB Node.js Driver](https://mongodb.github.io/node-mongodb-native/) 
=======
# 📚 PLP MongoDB – Week 1: Data Layer Fundamentals and Advanced Techniques

## 🚀 Objective
Learn the fundamentals of MongoDB, including:
- Installation and setup (local or Atlas)
- Creating databases and collections
- Performing CRUD operations
- Using the aggregation pipeline
- Implementing indexing for performance optimization

---

## 📂 Database Setup
**Database Name:** `plp_bookstore`  
**Collection:** `books`

You can alternatively use your custom database (e.g., `ecommerceDB`) for testing purposes — the structure and queries remain the same.

---

## 🧱 Task Overview

### 🧩 Task 1 – Setup
- Created a MongoDB Atlas cluster.
- Created a database called `plp_bookstore`.
- Created a collection called `books`.

### ✍️ Task 2 – Basic CRUD Operations
- Inserted 10+ book documents (using `insert_books.js`).
- Performed:
  - Find by genre
  - Find by author
  - Find books published after a specific year
  - Update book price
  - Delete by title

### 🔎 Task 3 – Advanced Queries
- Filtered books that are both **in stock** and **published after 2010**.
- Used **projection** to return only title, author, and price.
- Implemented **sorting** by price (ascending and descending).
- Added **pagination** using limit and skip.

### 📊 Task 4 – Aggregation Pipeline
- Calculated average price by genre.
- Found the author with the most books.
- Grouped books by publication decade.

### ⚡ Task 5 – Indexing
- Created a single-field index on `title`.
- Created a compound index on `author` and `published_year`.
- Used `explain("executionStats")` to demonstrate performance improvement.

---

## 🧪 Example Collection Screenshot

Below is a screenshot of the collection showing sample documents inserted and displayed in MongoDB Atlas:

![MongoDB Collection Screenshot](screenshot_books_collection.png)

---

## 🧰 Files in This Repository

| File | Description |
|------|--------------|
| `insert_books.js` | Script to insert sample book documents |
| `queries.js` | All CRUD, advanced, and aggregation queries |
| `README.md` | Documentation file (this file) |
| `screenshot_books_collection.png` | Screenshot of MongoDB Atlas showing inserted documents |

---

## 🧩 How to Run
```bash
# Run insert script
mongosh --file insert_books.js

# Run queries script
mongosh --file queries.js
```

Or for MongoDB Atlas:
```bash
mongosh "your-connection-string" --username your-username --file insert_books.js
mongosh "your-connection-string" --username your-username --file queries.js
```

---

## ✅ Expected Outcome
- A functioning MongoDB database with documents inserted.
- Working CRUD and aggregation queries.
- Performance improvement shown through indexing.

---

## 📸 Author
**Name:** Amohelang Ntjanyana  
**Course:** PLP MongoDB Module – Week 1  
**Instructor Review Ready:** ✅
>>>>>>> 2bc85cd (MongoDB Fundamentals Week 1 – Final Submission)
