import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CreateWorkoutButton from './CreateWorkoutButton';
import WorkoutTitleDialog from './WorkoutTitleDialog';
import ExerciseForm from './ExerciseForm';
import WorkoutDetails from './WorkoutDetails';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const [title, setTitle] = useState('');
  const [open, setOpen] = useState(false);
  const [exercises, setExercises] = useState([]);
  const [currentExercises, setCurrentExercises] = useState([]);
  const lastIdRef = useRef(0);
  // const [openDialog, setOpenDialog] = useState(false);

  const handleTitleSubmit = (title) => {
    setTitle(title);
    setOpen(true);
  };

  const handleExerciseSubmit = (exercise) => {
    const newExercise = { ...exercise, id: lastIdRef.current };
    setCurrentExercises((prevExercises) => [...prevExercises, newExercise]);
    lastIdRef.current += 1;
  };

  const handleEditSave = (index, editedExercise) => {
    const updatedExercises = [...currentExercises];
    updatedExercises.splice(index, 1, editedExercise);
    setCurrentExercises(updatedExercises);
  };

  const onEdit = (index, editedExercise) => {
    handleEditSave(index, editedExercise);
  };

  const handleWorkoutSubmit = () => {
    const workout = { title, currentExercises };
    setWorkouts([...workouts, workout]);
    setTitle('');
    setExercises([]);
    setCurrentExercises([]);
    setOpen(false);
  };

  const handleWorkoutDelete = (index) => {
    const newWorkouts = [...workouts];
    newWorkouts.splice(index, 1);
    setWorkouts(newWorkouts);

    // Update the currentExercises state
    const updatedCurrentExercises = currentExercises.filter(
      (_, i) => i !== index
    );
    setCurrentExercises(updatedCurrentExercises);
  };

  const handleExerciseEdit = (workoutIndex, exerciseIndex, editedExercise) => {
    const updatedWorkouts = [...workouts];
    const editedWorkout = { ...updatedWorkouts[workoutIndex] };
    editedWorkout.currentExercises[exerciseIndex] = editedExercise;
    updatedWorkouts[workoutIndex] = editedWorkout;
    setWorkouts(updatedWorkouts);
    // setOpenDialog(true);
    console.log('1');
  };

  const handleExerciseDelete = (workoutIndex, exerciseIndex) => {
    const updatedWorkouts = [...workouts];
    const editedWorkout = { ...updatedWorkouts[workoutIndex] };
    editedWorkout.currentExercises.splice(exerciseIndex, 1);
    updatedWorkouts[workoutIndex] = editedWorkout;
    setWorkouts(updatedWorkouts);
  };

  return (
    <Box>
      <Typography variant='h4' component='h1' gutterBottom>
        Workouts
      </Typography>
      <CreateWorkoutButton onClick={() => setOpen(true)} />
      <WorkoutTitleDialog
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={handleTitleSubmit}
      />
      {workouts.map((workout, workoutIndex) => (
        <Box key={`workout-${workoutIndex}`} sx={{ mb: 4 }}>
          <WorkoutDetails
            key={`workout-details-${workoutIndex}`}
            title={workout.title}
            exercises={workout.currentExercises}
            onDelete={() => handleWorkoutDelete(workoutIndex)}
            onExerciseEdit={(exerciseIndex, editedExercise) =>
              handleExerciseEdit(workoutIndex, exerciseIndex, editedExercise)
            }
            onExerciseDelete={(exerciseIndex) =>
              handleExerciseDelete(workoutIndex, exerciseIndex)
            }
          />
        </Box>
      ))}
      {title && (
        <ExerciseForm
          title={title}
          currentExercises={currentExercises}
          onSubmit={handleExerciseSubmit}
          onWorkoutSubmit={handleWorkoutSubmit}
          onEdit={onEdit}
        />
      )}
    </Box>
  );
};

export default Workouts;
