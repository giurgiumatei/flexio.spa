import { Box } from '@mui/material';
import React from 'react';
import UserFeedProfile from '../users/UserFeedProfile';

const Feed = () => {
  return <Box flex={4} p={2}>
    <UserFeedProfile/>
    <UserFeedProfile/>
    <UserFeedProfile/>
  </Box>;
};

export default Feed;
