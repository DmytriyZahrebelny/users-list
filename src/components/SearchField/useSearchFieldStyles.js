import { makeStyles } from '@material-ui/core';

export const useSearchFieldStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    width: 600,
    height: 70,
    margin: '0 auto',
  },
  label: {
    position: 'absolute',
    left: '10px',
    top: '0',
    bottom: '0',
    height: 24,
    margin: 'auto',
    cursor: 'pointer',
  },
  field: {
    display: 'block',
    width: '100%',
    height: '100%',
    margin: 'auto 0',
    padding: '0 20px 0 40px',
    backgroundColor: theme.colors.gainsboro,
    border: 'none',
    boxSizing: 'border-box',
    outline: 'none',
    fontSize: '20px',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
}));
