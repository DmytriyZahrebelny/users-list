import React from 'react';

import { useSelector } from 'react-redux';
import { UserCard } from '../UserCard';
import { useUsersListStyles } from './useUsersListStyle';
import { getUsersData } from '../../store/user-data';

export const UsersList = () => {
  const classes = useUsersListStyles();
  const data = useSelector(getUsersData);

  return (
    <div className={classes.containter}>
      {data.map((userData, i) => (
        <UserCard key={userData.pageviews} index={i} gold={userData.gold} {...userData} />
      ))}
    </div>
  );
};
