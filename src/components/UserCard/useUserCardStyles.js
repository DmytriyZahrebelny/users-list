import { makeStyles } from '@material-ui/core';

import { CARD_COLORS } from './UserCard.constants';

export const useUserCardStyles = (props) =>
  makeStyles((theme) => {
    return {
      card: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '30px 20px',
        borderBottom: `1px solid ${theme.colors.lightgray}`,

        '&:nth-child(2n)': {
          backgroundColor: theme.colors.gainsboro,
        },

        '&:last-child': {
          borderBottom: 'none',
        },
      },
      userInfo: {
        display: 'flex',
      },
      icon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        marginRight: 10,
        borderRadius: '50%',
        color: theme.colors.white,
        backgroundColor: CARD_COLORS[props.index],
        boxShadow: theme.colors.mainShadow,
      },
    };
  });
