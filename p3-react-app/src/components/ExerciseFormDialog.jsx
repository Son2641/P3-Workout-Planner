import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import ExerciseListForWorkout from './ExerciseListForWorkout';
import TextField from '@mui/material/TextField';

const ExerciseFormDialog = ({ open, onClose, onSubmit }) => {
  const [reps, setReps] = useState('');
  const [sets, setSets] = useState('');
  const [weight, setWeight] = useState('');
  const [selectedExercise, setSelectedExercise] = useState(null);

  const handleExerciseSelect = (exercise) => {
    setSelectedExercise(exercise);
  };

  const handleSubmit = () => {
    const exerciseData = {
      selectedExercise: selectedExercise ? selectedExercise.name : '',
      reps,
      sets,
      weight,
    };
    onSubmit(exerciseData);
    setReps('');
    setSets('');
    setWeight('');
    setSelectedExercise(null);
    onClose();
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

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Exercise</DialogTitle>
      <DialogContent>
        <ExerciseListForWorkout onSelect={handleExerciseSelect} />
        <TextField
          margin='dense'
          label='Reps'
          type='number'
          fullWidth
          value={reps}
          onChange={handleRepsChange}
        />
        <TextField
          margin='dense'
          label='Sets'
          type='number'
          fullWidth
          value={sets}
          onChange={handleSetsChange}
        />
        <TextField
          margin='dense'
          label='Weight'
          type='number'
          fullWidth
          value={weight}
          onChange={handleWeightChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Add</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ExerciseFormDialog;
