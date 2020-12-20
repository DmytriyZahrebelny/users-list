import { makeStyles } from '@material-ui/core';

export const usePagesControllerStyles = makeStyles((theme) => ({
  counter: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 100,
    margin: '20px auto',
  },
  icon: {
    width: 24,
    cursor: 'pointer',
  },
  text: {
    color: theme.colors.lightgray,
  },
}));
