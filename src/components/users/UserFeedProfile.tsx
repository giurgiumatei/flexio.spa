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
import { useNavigate } from 'react-router-dom';

const UserFeedProfile: React.FC<UserFeedProfileProps> = ({
  userId,
  displayName,
  city,
  photo,
  lastComment
}) => {
  const navigate = useNavigate();
  const routeChange = () => {
    const path = `/user/${1}`;
    navigate(path);
  };

  return (
    <Card sx={{ margin: 5 }} onClick={routeChange}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '#6667ab61' }} aria-label='recipe'>
            {displayName[0]}
          </Avatar>
        }
        action={<h3>{city}</h3>}
        title={displayName}
      />
      <CardMedia component='img' height='20%' image={photo} alt={photo} />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          <strong>
            {lastComment != null
              ? lastComment.isAnonymous
                ? 'Anonymous: '
                : lastComment.displayName + ': '
              : ''}
          </strong>
          {lastComment != null ? lastComment.text : ''}
        </Typography>
      </CardContent>
      <CardActions disableSpacing></CardActions>
    </Card>
  );
};

export default UserFeedProfile;
