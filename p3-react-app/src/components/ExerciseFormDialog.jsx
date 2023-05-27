import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ExerciseFormDialog = ({ open, onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [reps, setReps] = useState('');
  const [sets, setSets] = useState('');
  const [weight, setWeight] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
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

  const handleSubmit = () => {
    onSubmit({ exercise: name, reps, sets, weight });
    setName('');
    setReps('');
    setSets('');
    setWeight('');
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Exercise</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin='dense'
          label='Exercise Name'
          type='text'
          fullWidth
          value={name}
          onChange={handleNameChange}
        />
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
