import { Add } from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  styled,
  Toolbar
} from '@mui/material';
import React from 'react';
import LogoImage from '../../static/assets/logo.svg';

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
  alignItems:'center'
}));

const Navbar = () => {
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Logo src={LogoImage} alt='Flexio' />
        <Search>
          <InputBase placeholder='search' />
        </Search>
        <Icons>
          <Badge color='error'>
            <Add color='action' />
          </Badge>
          <Avatar sx={{ width: 30, height: 30 }} />
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
