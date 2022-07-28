import { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { goToFeed } from '../router/coordinator';

const useUnprotectedPage = () => {
  const navigate = useNavigate();
  useLayoutEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      goToFeed(navigate);
    }
  }, [navigate]);
};

export default useUnprotectedPage;
