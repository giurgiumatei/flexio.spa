import { Grid } from '@mui/material';
import React, {  } from 'react';
import { useForm, Form } from '../../customHooks/useForm';
import { AddUserProfileProps } from '../../interfaces/users/addUserProfileProps';
import genderMap from '../../mappers/genderMap';
import userService from '../../services/users/userService';
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
  const validate = (fieldValues = values) => {
    const temp = { ...errors };
    if ('firstName' in fieldValues) {
      temp.firstName = fieldValues.firstName ? '' : 'First name is required';
    }

    if ('lastName' in fieldValues) {
      temp.lastName = fieldValues.lastName ? '' : 'Last name is required';
    }

    if ('city' in fieldValues) {
      temp.city = fieldValues.city ? '' : 'City is required';
    }

    if ('country' in fieldValues) {
      temp.country = fieldValues.country ? '' : 'Country is required';
    }

    setErrors({ ...temp });

    if (fieldValues == values) {
      return Object.values(temp).every((x) => x == '');
    }
  };

  const { values, setValues, errors, setErrors, handleInputChange } = useForm(
    initialValues,
    true,
    validate
  );

  const submit = async (data: AddUserProfileProps) =>
    await userService.addUserProfile(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const newProfile: AddUserProfileProps = {
        firstName: values.firstName,
        lastName: values.lastName,
        city: values.city,
        country: values.country,
        genderId: genderMap[values.gender]
      };
      submit(newProfile);
      window.location.reload();
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container alignItems='center' justifyContent='center'>
        <Grid item xs={6}>
          <Controls.Input
            name='firstName'
            label='First Name'
            value={values.firstName}
            onChange={handleInputChange}
            error={errors.firstName}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.Input
            name='lastName'
            label='Last Name'
            value={values.lastName}
            onChange={handleInputChange}
            error={errors.lastName}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.Input
            name='city'
            label='City'
            value={values.city}
            onChange={handleInputChange}
            error={errors.city}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.Input
            name='country'
            label='Country'
            value={values.country}
            onChange={handleInputChange}
            error={errors.country}
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
