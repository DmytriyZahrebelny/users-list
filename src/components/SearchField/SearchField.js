import React from 'react';
import { useDispatch } from 'react-redux';

import { useSearchFieldStyles } from './useSearchFieldStyles';
import { Icon } from '../Icon';
import { searchData } from '../../store/user-data';

export const SearchField = () => {
  const dispatch = useDispatch();
  const classes = useSearchFieldStyles();
  const onChangeHandler = (evt) => {
    dispatch(searchData(evt.target.value));
  };

  return (
    <div className={classes.container}>
      <label htmlFor="search" className={classes.label}>
        <Icon name="search" />
      </label>
      <input
        id="search"
        type="text"
        className={classes.field}
        onChange={onChangeHandler}
        placeholder="Search"
      />
    </div>
  );
};
