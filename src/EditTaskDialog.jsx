import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import {GlobalContext} from "./App" 

export default function EditTaskDialog({task}) {
  const [open, setOpen] = React.useState(false);
  const [editedTask, setEditedTask] = React.useState(task.description);
  const [toDoList, setToDoList] = React.useContext(GlobalContext);

  function saveEdittedTask(activityId, activityDescription) {
    // new list from .map on old
  const newList = toDoList.map(activity =>
    activity.id === activityId ? {...activity, description: activityDescription} : activity
    );

  setToDoList(newList);
}
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTaskChange = (e) => {
    setEditedTask(e.target.value);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            saveEdittedTask(task.id, editedTask)
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