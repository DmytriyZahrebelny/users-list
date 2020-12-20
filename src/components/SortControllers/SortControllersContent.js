import React from 'react';

import { Icon } from '../Icon';
import { useSortControllersStyles } from './useSortControllersStyles';

export const SortControllersContent = ({ sortToLarger, sortToLess }) => {
  const classes = useSortControllersStyles();

  return (
    <div className={classes.sortContainer}>
      <div className={classes.topController} onClick={sortToLarger}>
        <Icon name="arrow-left" />
      </div>
      <div className={classes.bottomController} onClick={sortToLess}>
        <Icon name="arrow-left" />
      </div>
    </div>
  );
};
