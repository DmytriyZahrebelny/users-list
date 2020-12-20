import React from 'react';
import { useDispatch } from 'react-redux';

import { PagesController } from './components/PagesController';
import { UsersList } from './components/UsersList';
import { SearchField } from './components/SearchField';
import { addUserData } from './store/user-data';
import { SortControllers } from './components/SortControllers';
import data from './data/data.json';
import './App.css';

function App() {
  const dispatch = useDispatch();
  dispatch(addUserData(Array.from(data)));

  return (
    <div className="App">
      <SearchField />
      <SortControllers />
      <UsersList />
      <PagesController />
    </div>
  );
}

export default App;
