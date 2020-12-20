import { makeStyles } from '@material-ui/core';

export const useUsersListStyles = makeStyles((theme) => ({
  containter: {
    width: 600,
    margin: '0 auto',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: theme.colors.white,
  },
}));
