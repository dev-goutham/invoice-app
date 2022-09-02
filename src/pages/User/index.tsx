import { useAuth0 } from '@auth0/auth0-react';
import React, { PropsWithChildren } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../../components/BackButton';

const User: React.FC<PropsWithChildren> = () => {
  const params = useParams();
  const { user } = useAuth0();
  return (
    <div>
      <BackButton />
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default User;
