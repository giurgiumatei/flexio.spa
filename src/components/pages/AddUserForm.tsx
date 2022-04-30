import { Grid } from '@mui/material';
import React from 'react';
import { useForm, Form } from '../../customHooks/useForm';
import Controls from '../controls/Controls';

const genderItems = [
  { id: 'male', title: 'Male' },
  { id: 'female', title: 'Female' },
  { id: 'other', title: 'Other' }
];

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
      <Grid container alignItems='center' justifyContent='center'>
        <Grid item xs={6}>
          <Controls.Input
            name='firstName'
            label='First Name'
            value={values.firstName}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.Input
            name='lastName'
            label='Last Name'
            value={values.lastName}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.Input
            name='city'
            label='City'
            value={values.city}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.Input
            name='country'
            label='Country'
            value={values.country}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
            name='gender'
            label='Gender'
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          />
          <div>
            <Controls.Button type='submit' text='Add Profile' />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
};

export default AddUserForm;
