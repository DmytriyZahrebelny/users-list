import React from 'react';
import { Typography } from '@material-ui/core';

import { Icon } from '../Icon';
import { useUserCardStyles } from './useUserCardStyles';

export const UserCard = ({ name, count_pub, pageviews, gold, silver, bronze, index }) => {
  const classes = useUserCardStyles({ index })();

  return (
    <div className={classes.card}>
      <div className={classes.userInfo}>
        <Typography variant="body1" className={classes.icon}>
          {name[0]}
        </Typography>
        <div>
          <Typography variant="body1">{name}</Typography>
          <Typography variant="body2">{`${count_pub} публ.`}</Typography>
        </div>
      </div>
      <div>{(gold || silver || bronze) && <Icon name={`${gold || silver || bronze}-medal`} />}</div>
      <Typography variant="body1">{pageviews}</Typography>
    </div>
  );
};
