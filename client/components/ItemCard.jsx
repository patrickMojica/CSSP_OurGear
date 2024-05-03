import React from 'react';
import { Navigate, useNavigate, Link, useParams } from 'react-router-dom';
// import { baseUrl } from '../shared';
// import NotFound from '../components/NotFound';

// const ItemCard = ({info}) => {
const ItemCard = (props) => {
  const {
    item_id, common_name, manufacturer, product_id, description, owner, 
  } = props.info; 
  
  const navigate = useNavigate();
  // const [item, setItem] = useState();
  // const [notFound, setNotFound] = useState();
  // useEffect(() => {
  //   console.log('C001BABE');
  // });
  // const navigate = useNavigate();
  const deleteItem = () =>  {
    
    console.log(item_id);
    fetch(`api/deleteItem/${item_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'Application/JSON',
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((res) => {
        if(!res.ok) {
          throw new Error('Something went wrong');
        }
        navigate('');
        // return res.json(); depnds if my delete method returns ajson or not
      })
      .catch(err => console.log('deleteItem fetch /api/deleteItem: ERROR: ', err));
    // navigate('/allItems');
  };

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
