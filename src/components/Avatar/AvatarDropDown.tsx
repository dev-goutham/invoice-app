import { useAuth0 } from '@auth0/auth0-react';
import React, { PropsWithChildren } from 'react';
import { StyledAvatarDropDown } from './styles';

const AvatarDropDown: React.FC<PropsWithChildren> = () => {
  const { logout } = useAuth0();

  return (
    <StyledAvatarDropDown
      onClick={() =>
        logout({
          returnTo: import.meta.env.VITE_SITE_URL,
        })
      }
    >
      Logout
    </StyledAvatarDropDown>
  );
};

export default AvatarDropDown;
