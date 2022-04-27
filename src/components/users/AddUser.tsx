import { Add } from '@mui/icons-material';
import { Tooltip, Fab, styled } from '@mui/material';
import React from 'react';

const AddButtonFab = styled(Fab)({
  color: 'black',
  minWidth: '2.5rem',
  minHeight: '2.5rem',
  height: 'auto',
  width: 'auto'
});

const AddUser = () => {
  return (
    <>
      <Tooltip title='Create a profile'>
        <AddButtonFab color='inherit' aria-label='add'>
          <Add />
        </AddButtonFab>
      </Tooltip>
    </>
  );
};

export default AddUser;
