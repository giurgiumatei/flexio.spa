import React, { useState } from 'react';
import {
  alpha,
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  FormControlLabel,
  Stack,
  styled,
  Switch,
  Typography
} from '@mui/material';
import { UserFeedProfileProps } from '../../interfaces/users/userFeedProfileProps';
import { useNavigate } from 'react-router-dom';
import CommentBox from '../comments/CommentBox';
import { Show } from '../Show';
import useAuthInfo from '../../customHooks/useAuthInfo';

const ThemedSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: '#6667AB61',
    '&:hover': {
      backgroundColor: alpha('#6667AB61', theme.palette.action.hoverOpacity)
    }
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: '#6667AB61'
  }
}));

const UserFeedProfile: React.FC<UserFeedProfileProps> = ({
  userId,
  displayName,
  city,
  photo,
  lastComment
}) => {
  const navigate = useNavigate();
  const routeChange = () => {
    const path = `/user/${userId}`;
    navigate(path);
  };
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [latestComment, setLatestComment] = useState(lastComment);
  const name = useAuthInfo((authInfo) => authInfo.currentUser.name, false);

  return (
    <>
      <Card
        sx={{
          margin: 5,
          marginTop: 'auto',
          marginInline: 'auto',
          width: { xs: '100%', sm: '47%' }
        }}
        onClick={routeChange}
      >
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
          <Typography
            variant='body2'
            color='text.secondary'
            sx={{
              borderBottom: name != null ? 0.5 : 0,
              paddingBottom: '10px',
              borderColor: '#bdbdbd'
            }}
          >
            <strong>
              {latestComment != null
                ? latestComment.isAnonymous
                  ? 'Anonymous: '
                  : latestComment.displayName + ': '
                : ''}
            </strong>
            {latestComment != null ? latestComment.text : ''}
          </Typography>
        </CardContent>
        <Show when={name != null} fallback={<></>}>
          <CardActions
            disableSpacing
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Stack
              direction={'row'}
              spacing={2}
              justifyContent={'space-between'}
            >
              <CommentBox
                userId={userId}
                isAnonymous={isAnonymous}
                setLatestComment={setLatestComment}
              />
              <FormControlLabel
                control={
                  <ThemedSwitch onChange={() => setIsAnonymous(!isAnonymous)} />
                }
                label='Anonymous'
                style={{ marginBottom: '20px' }}
              />
            </Stack>
          </CardActions>
        </Show>
      </Card>
    </>
  );
};

export default UserFeedProfile;
