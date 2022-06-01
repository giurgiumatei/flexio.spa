import { Box, Typography } from '@mui/material';
import React from 'react';
import TakeOverProfileForm from '../../controls/TakeOverProfileForm';

const TakeOverProfile = () => {
  return (
    <Box
      flex={4}
      p={2}
      sx={{
        minHeight: '100vh',
        marginLeft: { xs: '20%', sm: '27%' },
        marginTop: { xs: '20%', sm: '5%' }
      }}
    >
      <TakeOverProfileForm />
    </Box>
  );
};

export default TakeOverProfile;
