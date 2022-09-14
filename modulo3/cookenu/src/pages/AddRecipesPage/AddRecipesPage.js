import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';

const AddRecipePage = () => {
  useProtectedPage();

  return <h1>AddRecipePage</h1>;
};

export default AddRecipePage;
