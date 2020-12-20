import React from 'react';
import { useDispatch } from 'react-redux';

import { SortControllersContent } from './SortControllersContent';
import { useSortControllersStyles } from './useSortControllersStyles';
import { sortByName, sortByPageviews } from '../../store/user-data';
import { SORT_DESC, SORT_ASC } from '../../helpers/sort';

export const SortControllers = () => {
  const dispatch = useDispatch();
  const classes = useSortControllersStyles();

  const sortByNameToLargeHandler = () => dispatch(sortByName(SORT_ASC));
  const sortByNameToLessHandler = () => dispatch(sortByName(SORT_DESC));

  const sortByPageviewsToLargeHandler = () => dispatch(sortByPageviews(SORT_DESC));
  const sortByPageviewsToLessHandler = () => dispatch(sortByPageviews(SORT_ASC));

  return (
    <div className={classes.header}>
      <SortControllersContent
        sortToLarger={sortByNameToLargeHandler}
        sortToLess={sortByNameToLessHandler}
      />
      <SortControllersContent
        sortToLarger={sortByPageviewsToLargeHandler}
        sortToLess={sortByPageviewsToLessHandler}
      />
    </div>
  );
};
