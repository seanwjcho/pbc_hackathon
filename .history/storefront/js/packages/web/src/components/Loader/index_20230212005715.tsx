import { useMeta } from '@oyster/common';
import React, { FC } from 'react';

export const LoaderProvider: FC = ({ children }) => {
  const { isLoading } = useMeta();

  return (
    <>
      {children}
    </>
  );
};

export const Spinner = () => {
  return <div></div>;
};
