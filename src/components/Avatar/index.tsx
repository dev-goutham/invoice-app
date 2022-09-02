import { useAuth0 } from '@auth0/auth0-react';
import React, { PropsWithChildren, useRef } from 'react';
import useClickAwayListener from '../../hooks/useClickAwayListener';
import useToggle from '../../hooks/useToggle';
import AvatarDropDown from './AvatarDropDown';
import { StyledAvatar } from './styles';

const Avatar: React.FC<PropsWithChildren> = () => {
  const { user, isAuthenticated } = useAuth0();
  const { state, toggle, close } = useToggle(false);
  const ref = useRef(null);
  useClickAwayListener(ref, close);

  if (!isAuthenticated) return null;

  return (
    <StyledAvatar ref={ref}>
      <button onClick={toggle} className='avatar'>
        <img
          referrerPolicy='no-referrer'
          src={user?.picture}
          alt={user?.nickname}
        />
      </button>
      {state === true && <AvatarDropDown />}
    </StyledAvatar>
  );
};

export default Avatar;
