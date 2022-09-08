import React, { PropsWithChildren } from 'react';
import { Helmet } from 'react-helmet';

interface Props extends PropsWithChildren {
  title: string;
}

const SEO: React.FC<Props> = ({ title }) => {
  return (
    <Helmet>
      <title>{title} | Invoice App</title>
    </Helmet>
  );
};

export default SEO;
