import React, { createContext, useState } from 'react';

export const PaginationContext = createContext();

export const PaginationProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const changePage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 1000, behavior: 'smooth' });
  };

  return (
    <PaginationContext.Provider value={{ currentPage, changePage }}>
      {children}
    </PaginationContext.Provider>
  );
};
