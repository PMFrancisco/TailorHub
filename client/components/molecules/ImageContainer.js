import React from 'react';

export const ImageContainer = ({ children }) => {
  return (
    <div className={`w-full h-full overflow-hidden rounded-xl flex justify-center items-center`}>
      {children}
    </div>
  );
};
