# Exercise Diary

Exercise Diary is a MERN (MongoDB, Express, React, Node.js) application that allows users to log, track, and manage their exercise routines. The application features a user-friendly interface for adding, editing, and viewing exercises.

## Features

- **Add Exercises**: Users can log their exercises with details like name, weight, reps, and date.
- **Edit Exercises**: Update previously added exercise entries.
- **View Exercises**: Display a list of all logged exercises.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js with Express.js
- **Database**: MongoDB

## Project Structure
```
ExerciseDiary/
├── client/                     # Frontend code (React)
│   ├── public/                 # Static files
│   ├── src/                    # React components and pages
│   ├── package.json            # Frontend dependencies and scripts
├── server/                     # Backend code (Express)
│   ├── exercisesController.mjs # API routes
│   ├── exercisesModel.mjs      # Mongoose models
│   ├── server.js               # Entry point for the backend
├── build/                      # Production build of the frontend
├── package.json                # Backend dependencies and scripts
└── README.md                   # Project documentation
```
## Setup Instructions
Prerequisites:
- Node.js and npm installed on your system
- MongoDB instance (local or cloud-based, e.g., MongoDB Atlas)

## Backend Setup
1. Clone the repository
```bash
git clone https://github.com/your-username/ExerciseDiary.git
cd ExerciseDiary
```
2. Navigate to the backend folder
```bash
cd server
```
3. Install backend dependencies
```bash
npm install
```
4. Create a `.env` file in the `server` directory and add your MongoDB connection string
```makefile
MONGODB_URI=<your-mongodb-uri>
```
5. Start the backend server
```bash
npm start
```
The backend should be running on `http://localhost:5000`.

## Frontend Setup
1. Navigate to the frontend folder
```
cd client
```
2. Install frontend dependencies
```
npm install
```
3. Start the frontend development server
```
npm start
```
The frontend should be running on `http://localhost:3000`
4. If deploying the frontend, build the production version
```
npm run build
```
## Full Stack Deployment
- **Backend:** Deploy the backend to a service such as Heroku and update the frontend API URL to point to the deployed backend.
- **Frontend:** Deploy the production build of the frontend to a static hosting service (e.g. Hostinger, Netlify, or Heroku)

## Author
Created by Allysa Foot as a demonstration of a MERN application
