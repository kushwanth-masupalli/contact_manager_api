# Contact Manager API

## Overview
A simple RESTful API built with Node.js, Express.js, and MongoDB for managing contacts. Supports basic CRUD operations:

- **Create** a new contact
- **Read** all contacts or a single contact by ID
- **Update** a contact by ID
- **Delete** a contact by ID

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/contact_manager_api.git
cd contact_manager_api
```
2. Install dependencies:
```bash
npm install
```
3. Set up environment variables in `.env`:
```
PORT=8080
MONGO_URI=mongodb://localhost/contacts
```
4. Start the server:
```bash
npm start
```
The API will run at: `http://localhost:8080`

## API Endpoints

| Method | Endpoint           | Description            |
|-------|-------------------|------------------------|
| GET   | /api/contacts      | Get all contacts       |
| POST  | /api/contacts      | Add a new contact      |
| GET   | /api/contacts/:id  | Get contact by ID      |
| PUT   | /api/contacts/:id  | Update contact by ID   |
| DELETE| /api/contacts/:id  | Delete contact by ID   |

## Technologies Used
- Node.js & Express.js
- MongoDB & Mongoose
- dotenv

## License
MIT

## Contact
For questions, email: [your-email@example.com]

---

⭐ Star this repo if you found it helpful!

