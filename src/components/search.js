import React, { useState } from 'react';

function Search(props) {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchTermSubmit = (event) => {
    event.preventDefault();
    props.formSubmit(searchValue);
  }

  return (
    <div>
      <form className='search' onSubmit={handleSearchTermSubmit}>
        <input 
          id="searchBlog"
          name="searchBlog"
          type="text" 
          value={searchValue}
          aria-labelledby="lbl-main-menu-mob"
          onChange={event => setSearchValue(event.target.value)}
        />
        <label htmlFor="searchBlog" id="lbl-main-menu-mob">Enter a blog search term to search for</label>
        <button className="btn btn-primary btn-search" aria-label="Search">
          <i className="glyphicon glyphicon-search"></i>
        </button>
      </form>
    </div>
  );
} 

export default Search;