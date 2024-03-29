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
  CardHeader,
  FormControlLabel,
  Switch,
  alpha
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
import { CommentProps } from '../../../interfaces/comments/commentProps';
import CommentBox from '../../comments/CommentBox';

const TakeOverFab = styled(Fab)({
  color: 'white',
  backgroundColor: '#6667ab61',
  minWidth: '2.5rem',
  minHeight: '2.5rem',
  height: 'auto',
  width: 'auto'
});

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

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState<UserProfileProps>();
  const [comments, setComments] = useState<CommentProps[]>([]);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const params = useParams();
  const isLoggedIn = useAuthInfo(
    (authInfo) => authInfo.isLoggedIn,
    authStore.getState().isLoggedIn
  );
  const navigate = useNavigate();
  const routeChange = () => {
    const path = `/takeOverProfile/${params.id}`;
    navigate(path);
  };
  const setData = async () => {
    const userProfile = await userService
      .getUserProfile(params.id, authStore.getState().currentUser.username)
      .then((response) => response.data);
    setUserProfile(userProfile);
    setComments(userProfile?.comments);
  };
  const handleCommentAddition = async () => {
    setData();
  };
  const handleCommentDeletion = (commentId: number) => {
    const index = comments.findIndex(
      (comment) => comment.commentId === commentId
    );

    if (index > -1) {
      setComments((items) => items.filter((_, i) => i !== index));
    }
  };

  useEffect(() => {
    async function fetchUserProfile() {
      setData();
    }

    fetchUserProfile();
  }, [params.id]);

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
          image={userProfile?.photo ?? 'https://flexio.blob.core.windows.net/basic/Basic Profile Picture.png'}
          alt={userProfile?.photo ?? 'photo'}
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
      <Show when={isLoggedIn} fallback={<></>}>
        <CardActions
          disableSpacing
          onClick={(e) => {
            e.stopPropagation();
          }}
          sx={{
            marginLeft: { sm: '16%', xs: '34px' }
          }}
        >
          <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
            <CommentBox
              userId={params.id}
              isAnonymous={isAnonymous}
              setLatestComment={handleCommentAddition}
            />
            <FormControlLabel
              control={
                <ThemedSwitch onChange={() => setIsAnonymous(!isAnonymous)} />
              }
              label='Anonymous'
              labelPlacement='top'
              style={{ marginBottom: '20px' }}
            />
          </Stack>
        </CardActions>
      </Show>
      <Stack
        direction={'column'}
        spacing={15}
        justifyContent={'center'}
        sx={{ width: { sm: '70%' } }}
      >
        {comments.length > 0 &&
          comments.map((comment) => (
            <Comment
              key={comment.commentId}
              commentId={comment.commentId}
              displayName={comment.displayName}
              isAnonymous={comment.isAnonymous}
              text={comment.text}
              dateAdded={comment.dateAdded}
              canBeDeleted={comment.canBeDeleted}
              handleCommentDeletion={handleCommentDeletion}
            />
          ))}
      </Stack>
    </Box>
  );
};

export default UserProfile;
