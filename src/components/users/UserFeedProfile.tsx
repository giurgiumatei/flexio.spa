import React from 'react';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography
} from '@mui/material';
import { UserFeedProfileProps } from '../../interfaces/users/userFeedProfileProps';
import TestImage from '../../static/assets/images/Gabor.png';

const UserFeedProfile: React.FC<UserFeedProfileProps> = ({userId, displayName, city, photo, lastComment }) => {
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '#6667ab61' }} aria-label='recipe'>
            {displayName[0]}
          </Avatar>
        }
        action={
          <h3>{city}</h3>
        }
        title={displayName}
      />
      <CardMedia component='img' height='20%' image={'https://flexio.blob.core.windows.net/1-andrei-gabor/Gabor.png'} alt={photo} />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          <strong>
            {lastComment != null ? (lastComment.isAnonymous ? 'Anonymous: ' : lastComment.displayName + ': ') : ''}
          </strong>
          {lastComment != null ? lastComment.text : ''}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      </CardActions>
    </Card>
  );
};

export default UserFeedProfile;
