import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';

import { Icon } from '../Icon';
import { usePagesControllerStyles } from './usePagesControllerStyles';
import { nextPageData, getPaginationData, prevPageData } from '../../store/user-data';

export const PagesController = () => {
  const dispatch = useDispatch();
  const { nextPage, prevPage, page, usersCount } = useSelector(getPaginationData);
  const classes = usePagesControllerStyles();
  const nextPageHandler = () => {
    if (nextPage) {
      dispatch(nextPageData());
    }
  };

  const prevPageHandler = () => {
    if (prevPage || prevPage === 0) {
      dispatch(prevPageData());
    }
  };

  return (
    <div className={classes.counter}>
      <div className={classes.icon} onClick={prevPageHandler}>
        {(Boolean(prevPage) || prevPage === 0) && <Icon name="arrow-left" />}
      </div>
      <Typography variant="body2" className={classes.text}>{`${
        prevPage || prevPage === 0 ? page * 10 : 1
      } - ${nextPage ? page * 10 + 10 : usersCount}`}</Typography>
      <div className={classes.icon} onClick={nextPageHandler}>
        {Boolean(nextPage) && <Icon name="arrow-right" />}
      </div>
    </div>
  );
};
