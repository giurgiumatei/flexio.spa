import {
  AppBar,
  Avatar,
  Box,
  Fab,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Tooltip
} from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoImage from '../../static/assets/logo.svg';
import AddUserProfile from '../users/AddUserProfile';

const StyledAppbar = styled(AppBar)({
  backgroundColor: '#6667ab61'
});

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
});

const AvatarFab = styled(Fab)({
  color: 'black',
  backgroundColor: 'inherit',
  minWidth: '2.5rem',
  minHeight: '2.5rem',
  height: 'auto',
  width: 'auto'
});

const Logo = styled('img')({
  alt: 'Flexio',
  height: 'auto',
  width: 'auto',
  maxWidth: '5rem',
  maxHeight: '5rem'
});

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%'
}));

const Icons = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '20px',
  alignItems: 'center'
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const routeChange = () => {
    const path = '/';
    navigate(path);
  };

  return (
    <StyledAppbar position='sticky'>
      <StyledToolbar>
        <a onClick={routeChange}>
          <Logo src={LogoImage} alt='Flexio' />
        </a>
        <Search>
          <InputBase placeholder='search' />
        </Search>
        <Icons>
          <AddUserProfile />
          <Tooltip title='My Profile'>
            <AvatarFab color='inherit' aria-label='avatar'>
              <Avatar
                sx={{ width: 30, height: 30, bgcolor: 'inherit' }}
                onClick={() => setOpen(true)}
              />
            </AvatarFab>
          </Tooltip>
        </Icons>
      </StyledToolbar>
      <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </StyledAppbar>
  );
};

export default Navbar;
