import React, { PropsWithChildren } from 'react';
import { useParams } from 'react-router-dom';

const Invoice: React.FC<PropsWithChildren> = () => {
  const params = useParams<{ id: string }>();
  return <div>{params.id}</div>;
};

export default Invoice;
