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
  onEdit,
}) => {
  const [open, setOpen] = useState(false);
  const [exercises, setExercises] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    setExercises(currentExercises);
  }, [currentExercises]);

  const handleExerciseSubmit = (exercise) => {
    if (editIndex !== null) {
      setExercises((prevExercises) => {
        const updatedExercises = [...prevExercises];
        updatedExercises[editIndex] = exercise;
        return updatedExercises;
      });
      setEditIndex(null);
    } else {
      setExercises((prevExercises) => [...prevExercises, exercise]);
    }

    onSubmit(exercise);
  };

  const handleExerciseEdit = (index) => {
    setEditIndex(index);
    setOpen(true);
  };

  const handleEditSave = (index, editedExercise) => {
    const updatedExercises = [...exercises];
    updatedExercises.splice(index, 1, editedExercise);
    setExercises(updatedExercises);
    onEdit(index, editedExercise);
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
    <Box
      sx={{
        border: '2px solid #6F61FE',
        width: '60%',
        padding: '10px',
        borderRadius: '10px',
      }}
    >
      <Typography variant='h5' component='h2' gutterBottom>
        Workout Name: {title}
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
        exercises={currentExercises}
        onEdit={handleEditSave}
        editIndex={editIndex}
      />

      {exercises.length > 0 && (
        <Box>
          {exercises.map((exercise, index) => (
            <Box key={`exercise-${index}`} sx={{ mt: 2 }}>
              <Typography
                variant='subtitle1'
                component='p'
                textTransform='capitalize'
              >
                Exercise: {exercise.selectedExercise}, <br />
                Reps: {exercise.reps}, Sets: {exercise.sets}, Weight:{' '}
                {exercise.weight}
              </Typography>
              <Box sx={{ mt: 1 }}>
                <Button
                  variant='outlined'
                  onClick={() => handleExerciseEdit(index)}
                  sx={{ mr: 1, marginRight: '10px' }}
                >
                  Edit Exercise
                </Button>
                <Button
                  variant='outlined'
                  color='error'
                  onClick={() => handleExerciseDelete(index)}
                >
                  Delete Exercise
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
