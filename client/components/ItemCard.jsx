import React from 'react';

const ItemCard = ({info}) => {
  const {
    common_name, manufacturer, product_id, description, owner, 
  } = info; 

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
    </article>
  );
};

export default ItemCard;
