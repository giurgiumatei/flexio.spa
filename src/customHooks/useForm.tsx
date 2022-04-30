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

export const useForm = (initialValues, validateOnChange = false, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({} as any);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });

    if (validateOnChange) {
      validate({ [name]: value });
    }
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange
  };
};

export const Form = (props) => {
  const { children, ...other } = props;

  return <StyledForm {...other}>{props.children}</StyledForm>;
};
