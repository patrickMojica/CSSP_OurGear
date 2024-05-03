import React, { Component } from 'react';
import {Routes, Route} from 'react-router-dom';

//import from components
import Items from './components/Items';
import AddNewItem from './components/AddNewItem';
import search from './components/search';
import './styles.css';

const App = props => {
  return(
    <div className='router'>
      <main>
        {/*NOTES: Block comment */}
        <Routes>
          <Route
            exact
            path='/allItems'
            element={<Items/>}
          />
          <Route
            exact
            path='/'
            element={<search/>}
          />
          {/* <Route
            exact
            path='/addUser'
            element={<addUsers/>}
          /> */}
          <Route
            exact
            path='/addNewItem'
            element={<AddNewItem/>}
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;