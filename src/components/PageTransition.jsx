import React from 'react';

export const PageTransition = ({ children }) => {
  return (
    <div className="w-full min-h-screen pt-8 pb-28 px-4 sm:px-8 md:px-16 max-w-7xl mx-auto text-cabernet dark:text-cream-100">
      {children}
    </div>
  );
};
