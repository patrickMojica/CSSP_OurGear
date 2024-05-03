import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ItemCard from './ItemCard';
// import withRouter from '../withRouterUtil.js';

const useInput = init => {
  const [ value, setValue ] = useState(init);
  const onChange = e => {
    setValue(e.target.value);
  };
  // return the value with the onChange function instead of setValue function
  return [ value, onChange ];
};

const search = props => {
  const [ searchQuery, searchQueryOnChange ] = useInput('');

  const searchItems = (searchQueryOnChange) => {
    console.log("SearchQuery: ", searchQueryOnChange);

    
  };

  // componentDidMount() {
  //   fetch('/api/allItems')
  //     .then(res => res.json())
  //     .then((items) => {
  //       if (!Array.isArray(items)) items = [];
  //       return this.setState({
  //         items,
  //         fetchedItems: true
  //       });
  //     })
  //     .catch(err => console.log('items.componentDidMount: get items: ERROR: ', err));
  // }

  return (
    <section className="mainSection">
      <header className="pageHeader">
        <h2>Search for Items</h2>
        <Link to={'/addNewItem'}>
          <button
            type="button"
            className="btnSecondary"
          >
            Add New Item
          </button>
        </Link>

        <Link to="/allItems" className="backLink">
          <button type="button" className="btnSecondary">
            Display all items
          </button>
        </Link>
      </header>
      
      <article className="card searchItems">
        <h3>Search for Items</h3>

        <div className="searchItemsFields">
          <label htmlFor="searchQuery">Search For: </label>
          <input name="searchQuery" placeholder="" value={searchQuery} onChange={searchQueryOnChange} />
        </div>

        <div className="addItemButtonContainer">
          <button type="button" className="btnMain" onClick={searchItems}>Search</button>
        </div>
      </article>
    </section>
  );
};

// export default withRouter(search);
export default search;