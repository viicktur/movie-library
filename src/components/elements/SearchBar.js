import React, { useState, useRef } from "react";
import FontAwesome from "react-fontawesome";
import {
  StyledSearchBar,
  StyledSearchBarContent,
} from "../styles/StyledSearchBar";

const SearchBar = ({ callback }) => {
  const [state, setState] = useState(" ");
  const timeOut = useRef(null);

  // the setTimeout() method returns a value. That value returned is also used to when we call the clearTimeout() method
  const doSearch = (e) => {
    const { value } = e.target;

    clearTimeout(timeOut.current);
    setState(value);
    timeOut.current = setTimeout(() => {
      callback(value);
    }, 500);
  };
  return (
    <StyledSearchBar>
      <StyledSearchBarContent>
        <FontAwesome className="fa-search" name="search" size="2x" />
        <input
          type="text"
          placeholder="Search Movie"
          onChange={doSearch}
          value={state}
        />
      </StyledSearchBarContent>
    </StyledSearchBar>
  );
};

export default SearchBar;
