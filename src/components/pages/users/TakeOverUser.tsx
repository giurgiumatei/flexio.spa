import { Box } from '@mui/material';
import React from 'react';
import PasswordInput from '../../controls/PasswordInput';

const TakeOverUser = () => {
  return (
    <Box flex={4} p={2} style={{ marginLeft: '0px' }}>
      <PasswordInput />
    </Box>
  );
};

export default TakeOverUser;
