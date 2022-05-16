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
import useAuthInfo from '../../customHooks/useAuthInfo';
import LogoImage from '../../static/assets/logo.svg';
import authStore from '../../store/auth';
import AddUserProfile from '../users/AddUserProfile';
import AuthService from '../../services/auth/authService';
import { Show } from '../Show';
import LoginIcon from '@mui/icons-material/Login';

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

const LoginFab = styled(Fab)({
  color: 'white',
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
  const isLoggedIn = useAuthInfo(
    (authInfo) => authInfo.isLoggedIn,
    authStore.getState().isLoggedIn
  );

  return (
    <StyledAppbar position='sticky'>
      <StyledToolbar>
        <a onClick={routeChange} style={{ cursor: 'pointer' }}>
          <Logo src={LogoImage} alt='Flexio' />
        </a>
        <Search>
          <InputBase placeholder='search' />
        </Search>
        <Icons>
          <Show
            when={isLoggedIn}
            fallback={
              <Tooltip title='Sign In'>
                <LoginFab color='inherit' aria-label='login'>
                  <LoginIcon
                    sx={{ width: 30, height: 30, bgcolor: 'inherit', borderRadius: '10px' }}
                    onClick={() => AuthService.signIn()}
                  />
                </LoginFab>
              </Tooltip>
            }
          >
            <AddUserProfile />
            <Tooltip title='My Profile'>
              <AvatarFab color='inherit' aria-label='avatar'>
                <Avatar
                  sx={{ width: 30, height: 30, bgcolor: 'inherit' }}
                  onClick={() => setOpen(true)}
                />
              </AvatarFab>
            </Tooltip>
          </Show>
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
        <MenuItem onClick={() => AuthService.logOut()}>Logout</MenuItem>
      </Menu>
    </StyledAppbar>
  );
};

export default Navbar;
