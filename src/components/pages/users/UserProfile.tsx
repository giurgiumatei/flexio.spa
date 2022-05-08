import {
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Box,
  Stack,
  Paper,
  Grid
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserProfileProps } from '../../../interfaces/users/userProfileProps';
import userService from '../../../services/users/userService';
import '../../../static/css/UserProfile.css';

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
        <Paper style={{ padding: '40px 20px', marginTop: 10 }}>
          <Grid container wrap='nowrap' spacing={2}>
            <Grid item>
              <Avatar alt='Remy Sharp' />
            </Grid>
            <Grid justifyContent='left' item xs zeroMinWidth>
              <h4 style={{ margin: 0, textAlign: 'left' }}>Michel Michel</h4>
              <p style={{ textAlign: 'left' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                luctus ut est sed faucibus. Duis bibendum ac ex vehicula
                laoreet. Suspendisse congue vulputate lobortis. Pellentesque at
                interdum tortor. Quisque arcu quam, malesuada vel mauris et,
                posuere sagittis ipsum. Aliquam ultricies a ligula nec faucibus.
                In elit metus, efficitur lobortis nisi quis, molestie porttitor
                metus. Pellentesque et neque risus. Aliquam vulputate, mauris
                vitae tincidunt interdum, mauris mi vehicula urna, nec feugiat
                quam lectus vitae ex.{' '}
              </p>
              <p style={{ textAlign: 'left', color: 'gray' }}>
                posted 1 minute ago
              </p>
            </Grid>
          </Grid>
        </Paper>
        <Paper style={{ padding: '40px 20px', marginTop: 10 }}>
          <Grid container wrap='nowrap' spacing={2}>
            <Grid item>
              <Avatar alt='Remy Sharp' />
            </Grid>
            <Grid justifyContent='left' item xs zeroMinWidth>
              <h4 style={{ margin: 0, textAlign: 'left' }}>Michel Michel</h4>
              <p style={{ textAlign: 'left' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                luctus ut est sed faucibus. Duis bibendum ac ex vehicula
                laoreet. Suspendisse congue vulputate lobortis. Pellentesque at
                interdum tortor. Quisque arcu quam, malesuada vel mauris et,
                posuere sagittis ipsum. Aliquam ultricies a ligula nec faucibus.
                In elit metus, efficitur lobortis nisi quis, molestie porttitor
                metus. Pellentesque et neque risus. Aliquam vulputate, mauris
                vitae tincidunt interdum, mauris mi vehicula urna, nec feugiat
                quam lectus vitae ex.{' '}
              </p>
              <p style={{ textAlign: 'left', color: 'gray' }}>
                posted 1 minute ago
              </p>
            </Grid>
          </Grid>
        </Paper>
        <Paper style={{ padding: '40px 20px', marginTop: 10 }}>
          <Grid container wrap='nowrap' spacing={2}>
            <Grid item>
              <Avatar alt='Remy Sharp' />
            </Grid>
            <Grid justifyContent='left' item xs zeroMinWidth>
              <h4 style={{ margin: 0, textAlign: 'left' }}>Michel Michel</h4>
              <p style={{ textAlign: 'left' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                luctus ut est sed faucibus. Duis bibendum ac ex vehicula
                laoreet. Suspendisse congue vulputate lobortis. Pellentesque at
                interdum tortor. Quisque arcu quam, malesuada vel mauris et,
                posuere sagittis ipsum. Aliquam ultricies a ligula nec faucibus.
                In elit metus, efficitur lobortis nisi quis, molestie porttitor
                metus. Pellentesque et neque risus. Aliquam vulputate, mauris
                vitae tincidunt interdum, mauris mi vehicula urna, nec feugiat
                quam lectus vitae ex.{' '}
              </p>
              <p style={{ textAlign: 'left', color: 'gray' }}>
                posted 1 minute ago
              </p>
            </Grid>
          </Grid>
        </Paper>
      </Stack>
    </Box>
  );
};

export default UserProfile;
