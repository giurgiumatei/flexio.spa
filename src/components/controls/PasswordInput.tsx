import React, { useState } from 'react';
import NiceInputPassword from 'react-nice-input-password';
import { TextField, InputLabel, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';

interface PasswordFieldProps {
  value: string | undefined;
}

const PasswordInput = () => {
  const [passwordField, setPasswordField] = useState<PasswordFieldProps>();
  const value = passwordField && passwordField.value;
  const handleChange = (data) => {
    setPasswordField({
      value: data.value
    });

    console.log(passwordField.value);
  };

  return (
    <NiceInputPassword
      label='Set Password'
      name='passwordField'
      value={value}
      showSecurityLevelBar
      showSecurityLevelDescription
      onChange={handleChange}
      LabelComponent={InputLabel}
      InputComponent={TextField}
      InputComponentProps={{
        variant: 'outlined',
        InputProps: {
          endAdornment: <LockIcon />
        }
      }}
      securityLevels={[
        {
          descriptionLabel: <Typography>1 number</Typography>,
          validator: /.*[0-9].*/
        },
        {
          descriptionLabel: <Typography>1 lowecase letter</Typography>,
          validator: /.*[a-z].*/
        },
        {
          descriptionLabel: <Typography>1 uppercase letter</Typography>,
          validator: /.*[A-Z].*/
        }
      ]}
    />
  );
};

export default PasswordInput;
