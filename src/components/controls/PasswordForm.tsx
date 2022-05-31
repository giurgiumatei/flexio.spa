import { Input } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(yup);

const schema = yup.object().shape({
  password: yup.string().password().minSymbols(0).required(),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null])
});

const PasswordForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    setError,
    formState: { errors },
    formState
  } = useForm({
    resolver: yupResolver(schema)
  });

  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <div className='Form'>
      <form onSubmit={handleSubmit(submitForm)}>
        <input
          type='password'
          name='password'
          placeholder='Password'
          {...register('password', { required: true })}
        />
        <p>{errors.password?.message}</p>
        <input
          type='password'
          name='confirmPassword'
          placeholder='Confirm Password'
          {...register('confirmPassword', { required: true })}
        />
        <p>{errors.confirmPassword && 'Passwords do not match'}</p>
        <input type='submit' id='submit' />
      </form>
    </div>
  );
};

export default PasswordForm;
