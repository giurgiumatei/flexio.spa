import { Add } from '@mui/icons-material';
import {
  Tooltip,
  Fab,
  styled,
  Box,
  Modal,
  Typography,
  Avatar
} from '@mui/material';
import React, { useState } from 'react';
import AddUserProfileForm from '../pages/AddUserProfileForm';

const AddButtonFab = styled(Fab)({
  color: 'black',
  minWidth: '2.5rem',
  minHeight: '2.5rem',
  height: 'auto',
  width: 'auto'
});

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '20px'
});

const AddUserProfile = () => {
  const [open, setOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  
  return (
    <>
      <Tooltip title='Create a profile' onClick={() => setOpen(true)}>
        <AddButtonFab color='inherit' aria-label='add'>
          <Add />
        </AddButtonFab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          width={500}
          height={400}
          bgcolor={'background.default'}
          color={'text.primary'}
          p={3}
          borderRadius={5}
        >
          <Typography variant='h6' color='gray' textAlign='center'>
            Create Profile
          </Typography>
          <UserBox>
            <Avatar sx={{ width: 30, height: 30 }} />
          </UserBox>
          <AddUserProfileForm/>
        </Box>
      </StyledModal>
    </>
  );
};

export default AddUserProfile;
