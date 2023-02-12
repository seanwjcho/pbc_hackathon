import { useMeta } from '@oyster/common';
import React, { FC } from 'react';

export const LoaderProvider: FC = ({ children }) => {

  return (
    <>
      {children}
    </>
  );
};

export const Spinner = () => {
  return <div></div>;
};
