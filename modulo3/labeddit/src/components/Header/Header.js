import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { goToFeed, goToLogin } from '../../router/coordinator';
import { StyledToolBar } from './styles';

const Header = () => {
  const navigate = useNavigate();

  const onClickLogout = () => {
    localStorage.clear('token');
    goToLogin(navigate);
  };

  return (
    <AppBar
      position="static"
      style={{ background: 'linear-gradient(to right, #ff4081 , #ffdb58)' }}
    >
      <StyledToolBar>
        <Button
          onClick={() => goToFeed(navigate)}
          variant="outlined"
          color="primary"
        >
          LabEddit
        </Button>
        {localStorage.getItem('token') ? (
          <Button onClick={onClickLogout} variant="outlined">
            Logout
          </Button>
        ) : (
          <Button
            onClick={() => {
              goToLogin(navigate);
            }}
            variant="outlined"
            color="primary"
          >
            Login
          </Button>
        )}
      </StyledToolBar>
    </AppBar>
  );
};

export default Header;
