import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function TaskDialog({task, onSubmit}) {
  const [open, setOpen] = React.useState(false);
  const [editedTask, setEditedTask] = React.useState(task.description);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTaskChange = (e) => {
    setEditedTask(e.target.value);
    //setEditedTask(e.target.value); // Update the edited task as user types
  };
 
//   const handleSubmit = () => {
//     console.log('klik')
//   }

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            onSubmit(task.id, editedTask)
            handleClose();
          },
        }}
      >
        <DialogTitle>Edit task</DialogTitle>
        <DialogContent>
          
          <TextField
            autoFocus
            required
            margin="dense"
            id="taskFieldName"
            name="taskFieldName"
            label="Task description"
            value={editedTask}
            onChange={handleTaskChange}
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}