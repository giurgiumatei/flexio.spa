import {
  Card,
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
import '../../../static/css/UserProfile.css';
import Comment from '../../comments/Comment';

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
      <Stack
        direction={'column'}
        spacing={15}
        justifyContent={'center'}
        sx={{ width: { sm: '70%' } }}
      >
        {userProfile?.comments.length > 0 &&
          userProfile?.comments.map((comment) => (
            <Comment
              key={comment.commentId}
              displayName={comment.displayName}
              isAnonymous={comment.isAnonymous}
              text={comment.text}
              dateAdded={comment.dateAdded}
            />
          ))}
      </Stack>
    </Box>
  );
};

export default UserProfile;
