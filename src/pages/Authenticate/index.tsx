import { useAuth0 } from '@auth0/auth0-react';
import React, { PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import StyledAuthenticate from './styles';

const Authenticate: React.FC<PropsWithChildren> = () => {
  const { loginWithPopup, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated]);

  if (isLoading) return null;

  return (
    <StyledAuthenticate>
      <div className='card'>
        <button onClick={() => loginWithPopup()}>Login</button>
        <button>Continue as Guest</button>
      </div>
    </StyledAuthenticate>
  );
};

export default Authenticate;
