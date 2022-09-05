import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store';
import { hydrate } from '../store/features/auth';

const useAuth = () => {
  const { isAuthenticated, isLoading, user, getAccessTokenSilently } =
    useAuth0();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/authenticate');
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (isAuthenticated) {
      getAccessTokenSilently({
        audience: import.meta.env.VITE_AUTH0_AUDIENCE,
      })
        .then((res) => {
          dispatch(
            hydrate({
              user: user!,
              accessToken: res,
            }),
          );
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      dispatch(
        hydrate({
          user: null,
          accessToken: null,
        }),
      );
    }
  }, [isAuthenticated]);

  return isLoading;
};

export default useAuth;
