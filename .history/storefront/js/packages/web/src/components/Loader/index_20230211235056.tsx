import { useMeta } from '@oyster/common';
import React, { FC } from 'react';

export const LoaderProvider: FC = ({ children }) => {
  const { isLoading } = useMeta();

  return (
    <>
      <div className={`loader-container ${isLoading ? 'active' : ''}`}>
        <div className="loader-block">
          <div className="loader-title">loading</div>
          <Spinner />
        </div>
      </div>
      {children}
    </>
  );
};

export const Spinner = () => {
  return (
   <div></div>
  );
  };