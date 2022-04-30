import { styled } from '@mui/material';
import React, { useState } from 'react';

const StyledForm = styled('form')(
  ({ theme }) => `
    & .MuiFormControl-root {
      width: '80%';
      margin: ${theme.spacing(1)};
    }
  `
);

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  return {
    values,
    setValues,
    handleInputChange
  };
};

export const Form = (props) => {
  return <StyledForm>{props.children}</StyledForm>;
};
