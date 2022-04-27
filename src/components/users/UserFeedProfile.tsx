import React from 'react';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography
} from '@mui/material';
import { UserFeedProfileProps } from '../../interfaces/users/userFeedProfileProps';
import { MoreVert, Favorite, Share } from '@mui/icons-material';
import TestImage from '../../static/assets/images/Gabor.png';

const UserFeedProfile = () => {
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label='recipe'>
            G
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVert />
          </IconButton>
        }
        title='Andrei Gabor'
      />
      <CardMedia component='img' height='20%' image={TestImage} alt='Gabor' />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          Suiera trenul in gara
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <Favorite />
        </IconButton>
        <IconButton aria-label='share'>
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default UserFeedProfile;
