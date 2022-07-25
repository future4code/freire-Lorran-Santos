import React from 'react';
import { Button } from '@mui/material';
import { primaryColor } from '../../constants/colors';
import useProtectedPage from '../../hooks/useProtectedPage';

const RecipesListPage = () => {
  useProtectedPage()
  return (
    <div>
      <h1>RecipesListPage</h1>
      <Button variant="contained">
        Clique aqui
      </Button>
    </div>
  );
};

export default RecipesListPage;
