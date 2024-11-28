import React from 'react';
import ExerciseList from '../components/exerciseList';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage({ setExercise }) {
    // Use the history for updating
    const navigate = useNavigate();
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

    // Use state to bring in the data
    const [exercises, setExercises] = useState([]);

    // RETRIEVE the list of exercises
    const loadExercises = async () => {
        const response = await fetch('/exercises');
        if (response.ok) {
            const exercises = await response.json();
            setExercises(exercises); // Save the exercises into state
        } else {
            console.error('Failed to load exercises');
        }
    };



    // UPDATE an exercise
    const onEditExercise = async exercise => {
        setExercise(exercise);
        navigate("/edit-exercise");
    }


    // DELETE an exercises  
    const onDeleteExercise = async (_id) => {
        const response = await fetch(`/exercises/${_id}`, { method: 'DELETE' });

        if (response.status === 204) {
            alert('Exercise deleted successfully!'); // Display success message
            // Refresh the exercises list
            const getResponse = await fetch(`${API_BASE_URL}/exercises`);
            const exercises = await getResponse.json();
            setExercises(exercises); // Update the state with the new list of exercises
        } else {
            console.error(`Failed to delete exercise with _id = ${_id}, status code = ${response.status}`);
            alert(`Failed to delete exercise, status code = ${response.status}`); // Display error message
        }
    };


    // LOAD the exercises
    useEffect(() => {
        loadExercises();
    }, []);

    // DISPLAY the exercises
    return (
        <>
            <article>
                <h2>List of Exercises</h2>
                <p>Log your exercises here.</p>
                <ExerciseList
                    exercises={exercises}
                    onEdit={onEditExercise}
                    onDelete={onDeleteExercise}
                />
            </article>
        </>
    );
}

export default HomePage;