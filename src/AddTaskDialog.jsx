import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
// import { GlobalContext} from './pages/ToDo.jsx';
import {GlobalContext} from "../src/App.jsx";


export default function AddTaskDialog() {
  const [toDo, setToDo] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [toDoList, setToDoList] = React.useContext(GlobalContext);

  function newOnAdd (description) {
    setToDoList([
      ...toDoList, 
      { id: toDoList.length + 1, 
        description: description,
        completed: false
      } 
    ])
  }

  const handleClickOpen = () => {
    setOpen(true);
    setToDo('');
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddTask = (e)=>{
    setToDo(e.target.value);
  }

  return (
    <React.Fragment>
      <Button 
         sx={{
          margin: '15px',
        }}
      variant="outlined" 
      onClick={handleClickOpen}>
        Add new item
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            newOnAdd(toDo)
            handleClose();
          },
        }}
      >
        <DialogTitle>Add new activity</DialogTitle>
        <DialogContent>

          <TextField
            autoFocus
            required
            margin="dense"
            id="taskFieldName"
            name="taskFieldName"
            label="New to do"
            value={toDo}
            onChange={handleAddTask}
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Add</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}