import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CreateWorkoutButton from './CreateWorkoutButton';
import WorkoutTitleDialog from './WorkoutTitleDialog';
import ExerciseForm from './ExerciseForm';
import WorkoutDetails from './WorkoutDetails';
import CompletedWorkout from './CompletedWorkout';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const [title, setTitle] = useState('');
  const [open, setOpen] = useState(false);
  const [exercises, setExercises] = useState([]);
  const [currentExercises, setCurrentExercises] = useState([]);
  const lastIdRef = useRef(0);
  const [completedWorkout, setCompletedWorkout] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  // const [openDialog, setOpenDialog] = useState(false);
  // const [editIndex, setEditIndex] = useState(null);

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
    const workout = { title, currentExercises, isCompleted };
    setWorkouts([...workouts, workout]);
    setTitle('');
    setExercises([]);
    setCurrentExercises([]);
    setOpen(false);
    setIsCompleted(false);
    console.log(workouts);
  };

  const handleWorkoutDelete = (index) => {
    const newWorkouts = [...workouts];
    newWorkouts.splice(index, 1);
    setWorkouts(newWorkouts);
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
    console.log(1);
  };

  const handleExerciseDelete = (workoutIndex, exerciseIndex) => {
    const updatedWorkouts = [...workouts];
    const editedWorkout = { ...updatedWorkouts[workoutIndex] };
    editedWorkout.currentExercises.splice(exerciseIndex, 1);
    updatedWorkouts[workoutIndex] = editedWorkout;
    setWorkouts(updatedWorkouts);
  };

  const handleCompletedWorkout = (event, workoutIndex) => {
    const updatedWorkouts = [...workouts];
    const editedWorkout = { ...updatedWorkouts[workoutIndex] };
    editedWorkout.isCompleted = event.target.checked;
    updatedWorkouts[workoutIndex] = editedWorkout;
    setWorkouts(updatedWorkouts);
  };

  return (
    <>
      <Grid justifyContent='center' alignItems='center'>
        <Grid item xs={12} sm={6} lg={5} order={{ xs: 2, sm: 1 }}>
          <Box
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              borderTop: '4px solid #6F61FE',
              width: '83%',
              margin: 'auto',
              marginTop: '50px',
              boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)',
              padding: '10px',
              borderRadius: '20px',
              paddingLeft: '15px',
            }}
          >
            <Typography
              variant='h4'
              component='h1'
              gutterBottom
              color='text.primary'
              textAlign='center'
            >
              Start your fitness journey by creating your own workouts!
            </Typography>
            <CreateWorkoutButton onClick={() => setOpen(true)} />
            <Box
              sx={{
                display: 'flex',
                // border: '1px solid black',
                gap: '20px',
                // height: '70%',
              }}
            >
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
                      handleExerciseEdit(
                        workoutIndex,
                        exerciseIndex,
                        editedExercise
                      )
                    }
                    onExerciseDelete={(exerciseIndex) =>
                      handleExerciseDelete(workoutIndex, exerciseIndex)
                    }
                  />
                  <FormControlLabel
                    label='Complete Workout'
                    control={
                      <Checkbox
                        checked={workout.isCompleted}
                        onChange={(event) =>
                          handleCompletedWorkout(event, workoutIndex)
                        }
                        color='primary'
                      />
                    }
                  />
                </Box>
              ))}
              {title && (
                <ExerciseForm
                  title={title}
                  currentExercises={exercises}
                  onSubmit={handleExerciseSubmit}
                  onWorkoutSubmit={handleWorkoutSubmit}
                  onEdit={onEdit}
                />
              )}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={5} order={{ xs: 2, sm: 1 }}>
          <Box
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              borderTop: '4px solid #6F61FE',
              width: '83%',
              margin: 'auto',
              marginTop: '50px',
              boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)',
              padding: '10px',
              borderRadius: '20px',
              paddingLeft: '15px',
            }}
          >
            <Typography
              variant='h4'
              component='h1'
              gutterBottom
              color='text.primary'
              textAlign='center'
            >
              View your completed Workouts:
            </Typography>
            <Box sx={{ display: 'flex', gap: '20px' }}>
              {workouts.map((workout, workoutIndex) => {
                if (workout.isCompleted) {
                  return (
                    <Box key={`workout-${workoutIndex}`} sx={{ mb: 4 }}>
                      <CompletedWorkout
                        key={`completed-workout-${workoutIndex}`}
                        title={workout.title}
                        exercises={workout.currentExercises}
                      />
                    </Box>
                  );
                } else {
                  return null;
                }
              })}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Workouts;
