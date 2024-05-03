import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ItemCard from './ItemCard';

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedItems: false,
      items: [],
    };
    // this.deleteItem = this.deleteItem.bind(this);
  }

  // deleteItem(id) {
    
  //   console.log(item_id);
  //   fetch(`api/deleteItem/${item_id}`, {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type': 'Application/JSON',
  //       'Access-Control-Allow-Origin': '*',
  //     },
  //   })
  //   .then(res => res.json())
  //   .then(res => console.log(res))
  //   .catch(err => console.log('deleteItem fetch /api/deleteItem: ERROR: ', err));


  // };


  componentDidMount() {
    fetch('/api/allItems')
      .then(res => res.json())
      .then((items) => {
        if (!Array.isArray(items)) items = [];
        return this.setState({
          items,
          fetchedItems: true
        });
      })
      .catch(err => console.log('items.componentDidMount: get items: ERROR: ', err));
  }

  render() {
    if (!this.state.fetchedItems) return (
      <div>
        <h1>Loading data, please wait...</h1>
      </div>
    );

    const { items } = this.state;

    if (!items) return null;

    if (!items.length) return (
      <div>Sorry, no items found</div>
    );

    const itemElems = items.map((item, i) => {
      return (
        <ItemCard
          key={i}
          info={item}
        />
      );
    });

    return (
      <section className="mainSection">
        <header className="pageHeader">
          <h2>items</h2>
          <Link to={'/addNewItem'}>
            <button
              type="button"
              className="btnSecondary"
            >
              Add New Item
            </button>
          </Link>

          <Link to="/" className="backLink">
            <button type="button" className="btnSecondary">
                Back to home / search
            </button>
          </Link>
        </header>
        <div className="itemContainer">
          {itemElems}
        </div>
      </section>
    );
  }
}// closing component!

export default Items;
