import {
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Box
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
    <Box
      flex={4}
      style={{ display: 'flex', alignItems: 'flex-start' }}
      sx={{ width: '30vw' }}
    >
      <Card
        sx={{
          margin: 5,
          width: { xs: '100%', sm: '40%' },
          marginLeft: { sm: '20%' }
        }}
      >
        <CardMedia
          component='img'
          height='20%'
          image={userProfile?.photo}
          alt={userProfile?.photo}
        />
        <CardContent>
          <Typography variant='body2' color='text.secondary'></Typography>
        </CardContent>
        <CardActions disableSpacing></CardActions>
      </Card>
    </Box>
  );
};

export default UserProfile;
