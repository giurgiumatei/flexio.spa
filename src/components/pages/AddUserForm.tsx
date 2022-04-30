import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField
} from '@mui/material';
import React from 'react';
import { useForm, Form } from '../../customHooks/useForm';

const initialValues = {
  id: 0,
  firstName: '',
  lastName: '',
  city: '',
  country: '',
  gender: 'male'
};

const AddUserForm = () => {
  const { values, setValues, handleInputChange } = useForm(initialValues);

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <TextField
            variant='outlined'
            label='First Name'
            name='firstName'
            value={values.firstName}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            variant='outlined'
            label='Last Name'
            name='lastName'
            value={values.lastName}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            variant='outlined'
            label='City'
            name='city'
            value={values.city}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            variant='outlined'
            label='Country'
            name='country'
            value={values.country}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}></Grid>
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup row
          name='gender'
          value={values.gender}
          onChange={handleInputChange}
        >
            <FormControlLabel value='male' control={<Radio />} label='Male' />
            <FormControlLabel value='female' control={<Radio />} label='Female' />
            <FormControlLabel value='other' control={<Radio />} label='Other' />
          </RadioGroup>
        </FormControl>
      </Grid>
    </Form>
  );
};

export default AddUserForm;
