import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

export default function ControlledCheckbox(onChange) {
  const [checked, setChecked] = React.useState(false);
  

//event handler klopt 
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
    //   inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}