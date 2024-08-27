

import React, { createContext, useState, useMemo } from 'react';
import { contentIndex } from '../contentIndex/contentIndex';


export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const searchResults = useMemo(() => {
    if (!searchQuery) return [];

    return contentIndex.filter(item =>
      item.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery, searchResults }}>
      {children}
    </SearchContext.Provider>
  );
};
