import React from 'react';

const ItemCard = ({info}) => {
  const {
    item_id, common_name, manufacturer, product_id, description, owner, 
  } = info; 

  const deleteItem = () =>  {
    console.log(item_id);
  
    fetch(`api/deleteItem/${item_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'Application/JSON'
      },
    })
      .catch(err => console.log('deleteItem fetch /api/deleteItem: ERROR: ', err));
  }

  return (
    <article className="card itemCard">
      <div className="itemHeadContainer">
        <h3 className="itemName">{common_name}</h3>
      </div>
      <ul className="itemDetailsList">
        <li className="itemDetail">Manufacturer: {manufacturer}</li>
        <li className="itemDetail">Product ID: {product_id}</li>
        <li className="itemDetail">Description: {description}</li>
        <li className="itemDetail">Owner: {owner}</li>
      </ul>
      <button type="button" className="btnDel" onClick={deleteItem}>Delete Item</button>
    </article>
  );
};

export default ItemCard;
