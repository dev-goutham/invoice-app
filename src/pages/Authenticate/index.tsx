import { useAuth0 } from '@auth0/auth0-react';
import React, { PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import StyledAuthenticate from './styles';
import SEO from '../../components/SEO';

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
    <>
      <SEO title='authenticate' />
      <StyledAuthenticate>
        <div className='card'>
          <button onClick={() => loginWithPopup()} className='google-login'>
            <div className='image-container'>
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
                alt='google login'
              />
            </div>
            <span>Login With Google</span>
          </button>
        </div>
      </StyledAuthenticate>
    </>
  );
};

export default Authenticate;
