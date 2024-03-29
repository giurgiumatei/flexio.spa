import { TextField } from '@mui/material';
import React from 'react';

const Input = (props) => {
  const { name, label, value, error = null, onChange } = props;

  return (
    <TextField
      variant='outlined'
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      {...(error && { error: true, helperText: error })}
    />
  );
};

export default Input;
