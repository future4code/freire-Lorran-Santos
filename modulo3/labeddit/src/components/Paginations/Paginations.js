import React, { useContext } from 'react';
import PostsContext from '../../context/PostsContext';
import { ContainerPagination, StyledPagination } from './style.js';

const Paginations = () => {
  const { page, setPage } = useContext(PostsContext);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <ContainerPagination>
      <StyledPagination
        color="primary"
        count={20}
        page={page}
        onChange={handleChange}
      />
    </ContainerPagination>
  );
};

export default Paginations;
