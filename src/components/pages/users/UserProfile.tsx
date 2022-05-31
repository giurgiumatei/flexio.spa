import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Box,
  Stack,
  styled,
  Fab,
  Tooltip,
  CardHeader
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuthInfo from '../../../customHooks/useAuthInfo';
import { UserProfileProps } from '../../../interfaces/users/userProfileProps';
import userService from '../../../services/users/userService';
import '../../../static/css/UserProfile.css';
import authStore from '../../../store/auth';
import Comment from '../../comments/Comment';
import { Show } from '../../Show';
import FaceIcon from '@mui/icons-material/Face';

const TakeOverFab = styled(Fab)({
  color: 'white',
  backgroundColor: '#6667ab61',
  minWidth: '2.5rem',
  minHeight: '2.5rem',
  height: 'auto',
  width: 'auto'
});

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState<UserProfileProps>();
  const params = useParams();
  const isLoggedIn = useAuthInfo(
    (authInfo) => authInfo.isLoggedIn,
    authStore.getState().isLoggedIn
  );
  const navigate = useNavigate();
  const routeChange = () => {
    const path = `/takeOverUser/${params.id}`;
    navigate(path);
  };

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
        <Show
          when={!isLoggedIn && userProfile?.canBeTakenOver}
          fallback={<></>}
        >
          <CardHeader
            avatar={
              <Tooltip title='Take Over'>
                <TakeOverFab color='inherit' aria-label='login'>
                  <FaceIcon
                    sx={{
                      width: 'auto',
                      height: 'auto',
                      bgcolor: 'inherit',
                      borderRadius: '10px'
                    }}
                    onClick={() => routeChange()}
                  />
                </TakeOverFab>
              </Tooltip>
            }
            title={'Take Over Profile'}
          />
        </Show>
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
