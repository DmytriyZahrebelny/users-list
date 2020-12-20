import { makeStyles } from '@material-ui/core';

export const useSortControllersStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 600,
    height: 40,
    margin: '0 auto',
    padding: '0 20px',
    backgroundColor: theme.colors.gainsboro,
    borderBottom: theme.colors.lightgray,
    boxSizing: 'border-box',
  },
  sortContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 80,
  },
  topController: {
    width: 25,
    transform: 'rotate(90deg)',
    cursor: 'pointer',
  },
  bottomController: {
    width: 25,
    transform: 'rotate(-90deg)',
    cursor: 'pointer',
  },
}));
