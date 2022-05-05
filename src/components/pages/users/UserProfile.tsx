import {
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  Typography,
  CardActions
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
    <Card sx={{ margin: 5 }}>
      <CardMedia
        component='img'
        height='80%'
        image={userProfile?.photo}
        alt={userProfile?.photo}
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary'></Typography>
      </CardContent>
      <CardActions disableSpacing></CardActions>
    </Card>
  );
};

export default UserProfile;
