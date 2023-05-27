import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import SearchBarForWorkouts from './SearchBarForWorkouts';
import Box from '@mui/material/Box';

const WorkoutProgramForm = ({ exercises, onChange }) => {
  const [open, setOpen] = useState(false);
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [reps, setReps] = useState('');
  const [sets, setSets] = useState('');
  const [weight, setWeight] = useState('');
  const [workoutPlan, setWorkoutPlan] = useState('');

  useEffect(() => {
    setSelectedExercises([]);
    setReps('');
    setSets('');
    setWeight('');
    setWorkoutPlan('');
  }, [open]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleExerciseChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedExercises((prevSelected) => [...prevSelected, value]);
    } else {
      setSelectedExercises((prevSelected) =>
        prevSelected.filter((exercise) => exercise !== value)
      );
    }
  };

  const handleRepsChange = (event) => {
    setReps(event.target.value);
  };

  const handleSetsChange = (event) => {
    setSets(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleWorkoutPlanChange = (event) => {
    setWorkoutPlan(event.target.value);
  };

  const handleSubmit = () => {
    const workoutProgram = {
      exercises: selectedExercises,
      reps,
      sets,
      weight,
      workoutPlan,
    };
    onChange(workoutProgram);
    handleClose();
  };

  return (
    <>
      <Button variant='contained' onClick={handleOpen}>
        Create a Workout Program
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          '& .MuiDialog-container': {
            '& .MuiPaper-root': {
              width: '100%',
              maxWidth: '700px', // Set your width here
              height: '100%',
              maxHeight: '500px',
            },
          },
        }}
      >
        <DialogTitle>Create a Workout Program</DialogTitle>
        <DialogContent>
          <FormControl component='fieldset'>
            <FormGroup>
              <SearchBarForWorkouts setExercises={setSelectedExercises} />
              {exercises.map((exercise) => (
                <FormControlLabel
                  key={exercise.id}
                  control={
                    <Checkbox
                      value={exercise.id}
                      onChange={handleExerciseChange}
                    />
                  }
                  label={exercise.name}
                />
              ))}
              <TextField
                id='reps'
                label='Reps'
                variant='outlined'
                value={reps}
                onChange={handleRepsChange}
                sx={{
                  width: { sm: 200, md: 300, lg: 450 },
                  '& .MuiInputBase-root': {
                    height: 50,
                  },
                  margin: '10px',
                }}
              />
              <TextField
                id='sets'
                label='Sets'
                variant='outlined'
                value={sets}
                onChange={handleSetsChange}
                sx={{
                  width: { sm: 200, md: 300, lg: 450 },
                  '& .MuiInputBase-root': {
                    height: 50,
                  },
                  margin: '10px',
                }}
              />
              <TextField
                id='weight'
                label='Weight'
                variant='outlined'
                value={weight}
                onChange={handleWeightChange}
                sx={{
                  width: { sm: 200, md: 300, lg: 450 },
                  '& .MuiInputBase-root': {
                    height: 50,
                  },
                  margin: '10px',
                }}
              />
              <TextField
                id='workoutPlan'
                label='Workout Plan'
                variant='outlined'
                value={workoutPlan}
                onChange={handleWorkoutPlanChange}
                multiline
                rows={4}
                sx={{
                  width: { sm: 200, md: 300, lg: 450 },
                  '& .MuiInputBase-root': {
                    height: 100,
                  },
                  margin: '10px',
                }}
              />
            </FormGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} variant='contained' color='primary'>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default WorkoutProgramForm;
