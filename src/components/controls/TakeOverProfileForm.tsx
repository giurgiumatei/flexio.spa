import {
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput
} from '@mui/material';
import userService from '../../services/users/userService';
import authService from '../../services/auth/authService';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import YupPassword from 'yup-password';
import MailIcon from '@mui/icons-material/Mail';
import Controls from './Controls';
import { TakeOverUserProfileProps } from '../../interfaces/users/takeOverUserProfileProps';
import { useParams } from 'react-router-dom';
YupPassword(yup);

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().password().minSymbols(0).required(),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null])
});

interface State {
  email: string;
  password: string;
  confirmPassword: string;
  showPassword: boolean;
  showConfirmPassword: boolean;
}

const TakeOverProfileForm = () => {
  const params = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const [values, setValues] = React.useState<State>({
    email: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false
  });
  
  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    });
  };

  const handleClickShowConfirmPassword = () => {
    setValues({
      ...values,
      showConfirmPassword: !values.showConfirmPassword
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const submit = async (data: TakeOverUserProfileProps) =>
    await userService.takeOverUserProfile(data);

  const submitForm = async (data) => {
    const userProfile: TakeOverUserProfileProps = {
      userId: +params.id,
      email: data.email,
      password: data.password
    };
    await submit(userProfile);
    authService.signIn();
  };

  return (
    <div className='Form'>
      <form onSubmit={handleSubmit(submitForm)}>
        <div style={{ paddingBottom: '10px' }}>
          <InputLabel htmlFor='outlined-adornment-password'>Email</InputLabel>
          <OutlinedInput
            id='outlined-adornment-password'
            type='text'
            value={values.email}
            name='email'
            placeholder='Email'
            {...register('email', { required: true })}
            onChange={handleChange('email')}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton aria-label='toggle password visibility' edge='end'>
                  <MailIcon />
                </IconButton>
              </InputAdornment>
            }
            label='Email'
          />
          <p>{errors.email?.message}</p>
        </div>
        <div style={{ paddingBottom: '10px' }}>
          <InputLabel htmlFor='outlined-adornment-password'>
            Password
          </InputLabel>
          <OutlinedInput
            id='outlined-adornment-password'
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            name='password'
            placeholder='Password'
            {...register('password', { required: true })}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge='end'
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label='Password'
          />
          <p>{errors.password?.message}</p>
        </div>
        <div style={{ paddingBottom: '10px' }}>
          <InputLabel htmlFor='outlined-adornment-password'>
            Confirm Password
          </InputLabel>
          <OutlinedInput
            id='outlined-adornment-password'
            type={values.showConfirmPassword ? 'text' : 'password'}
            value={values.confirmPassword}
            name='confirmPassword'
            placeholder='Confirm Password'
            {...register('confirmPassword', { required: true })}
            onChange={handleChange('confirmPassword')}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge='end'
                >
                  {values.showConfirmPassword ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            }
            label='Confirm Password'
          />
          <p>{errors.confirmPassword && 'Passwords do not match'}</p>
        </div>
        <div style={{ marginLeft: '20px' }}>
          <Controls.Button type='submit' text='Take Over Account' />
        </div>
      </form>
    </div>
  );
};

export default TakeOverProfileForm;
