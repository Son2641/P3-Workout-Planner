import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ExerciseFormDialog from './ExerciseFormDialog';
import Button from '@mui/material/Button';

const ExerciseForm = ({
  title,
  onWorkoutSubmit,
  onSubmit,
  currentExercises,
}) => {
  const [open, setOpen] = useState(false);
  const [exercises, setExercises] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    setExercises(currentExercises);
  }, [currentExercises]);

  const handleExerciseSubmit = (exercise) => {
    if (editIndex !== null) {
      // Editing an exercise
      const updatedExercises = [...exercises];
      updatedExercises[editIndex] = exercise;
      setExercises(updatedExercises);
      setEditIndex(null);
    } else {
      // Adding a new exercise
      setExercises((prevExercises) => [...prevExercises, exercise]);
    }
    onSubmit(exercise);
  };

  const handleExerciseEdit = (index) => {
    setEditIndex(index);
    setOpen(true);
  };

  const handleExerciseDelete = (index) => {
    const updatedExercises = [...exercises];
    updatedExercises.splice(index, 1);
    setExercises(updatedExercises);
  };

  const handleWorkoutSubmit = () => {
    if (exercises.length > 0) {
      onWorkoutSubmit({ title, exercises });
      setExercises([]);
    }
  };

  return (
    <Box>
      <Typography variant='h5' component='h2' gutterBottom>
        {title}
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Button variant='contained' onClick={() => setOpen(true)}>
          Add Exercise
        </Button>
      </Box>
      <ExerciseFormDialog
        open={open}
        onClose={() => {
          setOpen(false);
          setEditIndex(null);
        }}
        onSubmit={handleExerciseSubmit}
        editMode={editIndex !== null}
        exerciseToEdit={editIndex !== null ? exercises[editIndex] : null}
      />

      {exercises.length > 0 && (
        <Box>
          {exercises.map((exercise, index) => (
            <Box key={`exercise-${index}`} sx={{ mt: 2 }}>
              <Typography variant='subtitle1' component='p'>
                Exercise: {exercise.selectedExercise}, Reps: {exercise.reps},
                Sets: {exercise.sets}, Weight: {exercise.weight}
              </Typography>
              <Box sx={{ mt: 1 }}>
                <Button
                  variant='outlined'
                  onClick={() => handleExerciseEdit(index)}
                  sx={{ mr: 1 }}
                >
                  Edit
                </Button>
                <Button
                  variant='outlined'
                  color='error'
                  onClick={() => handleExerciseDelete(index)}
                >
                  Delete
                </Button>
              </Box>
            </Box>
          ))}
          <Box sx={{ mt: 2 }}>
            <Button variant='contained' onClick={handleWorkoutSubmit}>
              Submit Workout
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ExerciseForm;
