// withSearch.js
import React, { useMemo } from 'react';
import { SearchContext } from '../context/SearchContext';
// import { useSearch } from './SearchContext';

const withSearch = (WrappedComponent) => {
  return (props) => {
    const { searchQuery, highlightIndex, setHighlightIndex } = SearchContext();

    const getHighlightedText = (text, term) => {
      if (!term) return text;

      const regex = new RegExp(`(${term})`, 'gi');
      const parts = text.split(regex);

      let matchCount = 0;
      return parts.map((part, index) => {
        if (part.toLowerCase() === term.toLowerCase()) {
          const isActive = matchCount === highlightIndex;
          matchCount++;
          return (
            <span
              key={index}
              className={`highlight ${isActive ? 'active' : ''}`}
            >
              {part}
            </span>
          );
        }
        return part;
      });
    };

    const handleNext = (totalMatches) => {
      if (totalMatches > 0) {
        setHighlightIndex((prevIndex) => (prevIndex + 1) % totalMatches);
      }
    };

    const handlePrevious = (totalMatches) => {
      if (totalMatches > 0) {
        setHighlightIndex((prevIndex) => (prevIndex - 1 + totalMatches) % totalMatches);
      }
    };

    return (
      <WrappedComponent
        {...props}
        searchQuery={searchQuery}
        getHighlightedText={getHighlightedText}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />
    );
  };
};

export default withSearch;
