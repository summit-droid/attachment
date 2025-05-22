User Management System
-----------------------

Name: [Wanja Douglas Mwangi]
Registration Number: [SD01/PU/43697/23]
Course: Diploma in Computer Science (Term 5)
Unit: Web Design Skills II - CAT (April 2025)

Project Description:
---------------------
This is a simple User Management Web Application built using:
- HTML, CSS for frontend structure and styling
- JavaScript and jQuery for interactivity and DOM manipulation
- Node.js for server-side logic
- SQLite for database storage

Functional Features:
---------------------
1. Register new users with name, age, gender, contact, username, and password.
2. Login system using localStorage to manage session state.
3. Display a list of all registered users dynamically.
4. Search functionality to filter users by name or ID.
5. Statistics chart that visualizes user gender distribution using Chart.js.
6. Responsive layout for desktop and mobile screens.

Bonus Features Implemented:
----------------------------
- ✅ User authentication (login/logout with session management)
- ✅ Gender statistics chart using Chart.js
- ✅ LocalStorage session persistence
- ✅ Error handling with helpful feedback to the user

Folder Structure:
------------------
/user_management/
│
├── index.html          # Main app page (user list, stats, registration form)
├── login.html          # Login interface
├── register.html       # Separate registration form page
├── style.css           # External CSS styles
├── script.js           # JavaScript for front-end functionality
├── server.js           # Node.js backend with Express + SQLite
├── /db/                # Folder for SQLite database file (auto-generated)
│   └── users.db        # SQLite database file
└── README.txt          # Project instructions and explanation

How to Run This Project:
-------------------------
1. Make sure Node.js is installed on your computer.
2. Open a terminal in the project folder and run:
   > npm install express sqlite3 body-parser

3. Start the server:
   > node server.js

4. Open your browser and navigate to:
   > http://localhost:3000/register.html   ← to register a new user
   > http://localhost:3000/login.html      ← to log in

5. After logging in, you will be redirected to:
   > index.html → view users, search, see stats, and log out

Note:
-----
- Users must be registered first before logging in.
- Session is stored in browser localStorage.
- All data is stored in a local SQLite database file.

Project By:
-----------
[Wanja douglas mwangi]
April 2025
