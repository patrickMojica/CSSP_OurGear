import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

//import from components
import Items from './components/Items';
import addNewItem from './components/AddNewItem';
import search from './components/search';
import './styles.css';

const App = props => {
  return(
    <div className='router'>
      <main>
        {/*NOTES: Block comment */}
        <Switch>
          <Route
            exact
            path='/allItems'
            component={Items}
          />
          <Route
            exact
            path='/'
            component={search}
          />
          {/* <Route
            exact
            path='/addUser'
            component={addUsers}
          /> */}
          <Route
            exact
            path='/addNewItem'
            component={addNewItem}
          />
        </Switch>
      </main>
    </div>
  );
};

export default App;