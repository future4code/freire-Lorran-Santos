import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { StyledToolBar } from './styles';
import { goToRecipesList, goToLogin } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <StyledToolBar>
        <Button onClick={() => goToRecipesList(navigate)} color="inherit">
          Cookenu
        </Button>
        <Button onClick={() => goToLogin(navigate)} color="inherit">
          Login
        </Button>
      </StyledToolBar>
    </AppBar>
  );
};

export default Header;
