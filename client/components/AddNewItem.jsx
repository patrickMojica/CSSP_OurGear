import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';


// Custom hook for handling input boxes
// saves us from creating onChange handlers for them individually
const useInput = init => {
  const [ value, setValue ] = useState(init);
  const onChange = e => {
    setValue(e.target.value);
  };
  // return the value with the onChange function instead of setValue function
  return [ value, onChange ];
};

const AddNewItem = props => {
  const [ common_name, common_nameOnChange ] = useInput('');
  const [ manufacturer, manufacturerOnChange ] = useInput('');
  const [ product_id, product_idOnChange ] = useInput('');
  const [ description, descriptionOnChange ] = useInput('');
  const [ owner, ownerOnChange ] = useInput('');
  const [ nameError, setNameError ] = useState(null);

  const saveItem = () => {
    // check if name is empty
    if (common_name === '') {
      setNameError('required');
    // check if height is not a number
    } else {
      const body = {
        common_name,
        manufacturer,
        product_id,
        description,
        owner
      };
      
      fetch('/api/addNewItem', {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/JSON'
        },
        body: JSON.stringify(body)
      })
        .then(resp => {
          resp.json();
          console.log('Resp: ', resp.json());
        })
        .then((data) => {
          console.log('Data: ', data);
        })
        .then(() => {
          props.history.push('/allItems');
        })
        .catch(err => console.log('AddNewItem fetch /api/addNewItem: ERROR: ', err));
    }
  };

  // useEffect to clear nameError when `name` is changed
  useEffect(()=>{
    setNameError(null);
  }, [common_name]);

  //

  return (
    <section className="mainSection addItemContainer">
      <header className="pageHeader">
        <h2>Add New Item</h2>
        <Link to="/allItems" className="backLink">
          <button type="button" className="btnSecondary">
              Back to all items
          </button>
        </Link>
        <Link to="/" className="backLink">
          <button type="button" className="btnSecondary">
              Back to home / search
          </button>
        </Link>
      </header>
      
      <article className="card addNewItem">
        <h3>Enter your item details</h3>

        <div className="addItemFields">
          <label htmlFor="common_name">Common Name: </label>
          <input name="common name" placeholder="E.g. Anvil" value={common_name} onChange={common_nameOnChange} />
          {nameError ? (<span className="errorMsg">{nameError}</span>) : null}
        </div>
        <div className="addItemFields">
          <label htmlFor="manufacturer">Manufacturer: </label>
          <input name="ACME" placeholder="ACME" value={manufacturer} onChange={manufacturerOnChange} />
        </div>
        <div className="addItemFields">
          <label htmlFor="product_id">Product ID: </label>
          <input name="product_id" placeholder="Anvil No.97" value={product_id} onChange={product_idOnChange} />
        </div>
        <div className="addItemFields">
          <label htmlFor="description">Description: </label>
          <input name="description" placeholder="9kg steel anvil" value={description} onChange={descriptionOnChange} />
        </div>
        <div className="addItemFields">
          <label htmlFor="owner">Owner: </label>
          <input name="owner" placeholder="Road Runner" value={owner} onChange={ownerOnChange} />
        </div>

        <div className="addItemButtonContainer">
          <Link to="/" className="backLink">
            <button type="button" className="btnSecondary">
              Cancel
            </button>
          </Link>
          <button type="button" className="btnMain" onClick={saveItem}>Save</button>
        </div>

      </article>
    </section>
  );
};

export default withRouter(AddNewItem);
