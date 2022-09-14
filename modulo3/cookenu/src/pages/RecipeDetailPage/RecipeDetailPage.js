import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';

const RecipeDetailPage = () => {
  useProtectedPage();
  return <h1>RecipeDetailPage</h1>;
};

export default RecipeDetailPage;
