import { Add } from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar
} from '@mui/material';
import React, { useState } from 'react';
import LogoImage from '../../static/assets/logo.svg';

const StyledAppbar = styled(AppBar)({
  backgroundColor: '#6667ab61'
});

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
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
  return (
    <StyledAppbar position='sticky'>
      <StyledToolbar>
        <Logo src={LogoImage} alt='Flexio' />
        <Search>
          <InputBase placeholder='search' />
        </Search>
        <Icons>
          <Badge color='error'>
            <Add color='action' />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            onClick={() => setOpen(true)}
          />
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
