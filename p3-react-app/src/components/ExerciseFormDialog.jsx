import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import ExerciseListForWorkout from './ExerciseListForWorkout';
import TextField from '@mui/material/TextField';

const ExerciseFormDialog = ({
  open,
  onClose,
  onSubmit,
  editMode,
  exerciseToEdit,
  onEdit,
  editIndex,
}) => {
  const [reps, setReps] = useState(editMode ? exerciseToEdit.reps : '');
  const [sets, setSets] = useState(editMode ? exerciseToEdit.sets : '');
  const [weight, setWeight] = useState(editMode ? exerciseToEdit.weight : '');
  const [selectedExercise, setSelectedExercise] = useState(
    editMode && exerciseToEdit.hasOwnProperty('selectedExercise')
      ? exerciseToEdit.selectedExercise
      : null
  );

  const handleExerciseSelect = (exercise) => {
    setSelectedExercise(exercise);
  };

  const handleSubmit = () => {
    const editedExercise = {
      selectedExercise: selectedExercise ? selectedExercise.name : '',
      reps,
      sets,
      weight,
    };

    if (editMode) {
      onEdit(editIndex, editedExercise);
    } else {
      onSubmit(editedExercise);
    }

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
      <DialogTitle>{editMode ? 'Edit Exercise' : 'Add Exercise'}</DialogTitle>
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
        <Button onClick={handleSubmit}>{editMode ? 'Save' : 'Add'}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ExerciseFormDialog;
