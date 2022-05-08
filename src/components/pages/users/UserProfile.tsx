import {
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Box,
  Stack
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserProfileProps } from '../../../interfaces/users/userProfileProps';
import userService from '../../../services/users/userService';

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState<UserProfileProps>();
  const params = useParams();

  useEffect(() => {
    async function fetchUserProfile() {
      const userProfile = await userService
        .getUserProfile(params.id)
        .then((response) => response.data);
      setUserProfile(userProfile);
    }

    fetchUserProfile();
  }, []);

  return (
    <Box flex={4}>
      <Card
        sx={{
          margin: 5,
          width: { xs: '85%', sm: '40%' },
          marginLeft: { sm: '16%' }
        }}
      >
        <CardMedia
          component='img'
          height='20%'
          image={userProfile?.photo}
          alt={userProfile?.photo}
        />
        <CardContent>
          <Stack direction={'row'} spacing={15} justifyContent={'center'}>
            <Box>
              <Typography
                sx={{ fontSize: 14 }}
                color='text.secondary'
                gutterBottom
              >
                Name:
              </Typography>
              <Typography variant='h5' component='div'>
                {userProfile?.displayName}
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color='text.secondary'
                gutterBottom
              >
                City:
              </Typography>
              <Typography variant='h5' component='div'>
                {userProfile?.city}
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{ fontSize: 14 }}
                color='text.secondary'
                gutterBottom
              >
                Country:
              </Typography>
              <Typography variant='h5' component='div'>
                {userProfile?.country}
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color='text.secondary'
                gutterBottom
              >
                Gender:
              </Typography>
              <Typography variant='h5' component='div'>
                {userProfile?.gender}
              </Typography>
            </Box>
          </Stack>
        </CardContent>
        <CardActions disableSpacing></CardActions>
      </Card>
    </Box>
  );
};

export default UserProfile;
