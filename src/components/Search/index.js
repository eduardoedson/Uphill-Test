import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import * as searchActions from '../../store/modules/search/actions';
import { Container } from './styled';

export default function SearchInput() {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      dispatch(searchActions.searchChange({ searchText }));
    }
  };

  return (
    <Container>
      <FaSearch />
      <input
        type="text"
        onChange={handleSearch}
        value={searchText}
        placeholder="Search"
        onKeyPress={handleKeyPress}
      />
    </Container>
  );
}
