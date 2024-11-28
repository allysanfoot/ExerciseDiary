// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import components and styles
import './App.css';
import Navigation from './components/navigation';

// Import pages
import HomePage from './pages/homepage';
import AddExercise from './pages/addExercisePage';
import EditExercise from './pages/editExercisePage';

function App() {
  const [exercise, setExercise] = useState([]);

  return (
    <>
      <Router>
        <header>
          <h1>Exercise Diary</h1>
          <p>MERN App Demonstration by Allysa Foot</p>
        </header>

        <Navigation />

        <main>
          <Routes>
            <Route path="/" element={<HomePage setExercise={setExercise} />} />
            <Route path="/add-exercise" element={<AddExercise />} />
            <Route path="/edit-exercise" element={<EditExercise exercise={exercise} />} />
          </Routes>

        </main>

        <footer>
          <p>&copy; 2024 Allysa Foot</p>
        </footer>
      </Router>
    </>
  );
}

export default App;
