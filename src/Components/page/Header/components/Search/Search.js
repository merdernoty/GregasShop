import React from 'react';
import './Search.scss';
import { useSearch } from '../../../../../hooks/context/SearchContext';
export const Search = () => {
  const { searchValue, setSearchValue } = useSearch();
  return (
    <div className="nav-container">
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className="search-input"
        placeholder="Search..."
      />
      {searchValue && <svg onClick={() =>  setSearchValue("")} className="clearIcon" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
      </svg>}
    </div>
  );
};
