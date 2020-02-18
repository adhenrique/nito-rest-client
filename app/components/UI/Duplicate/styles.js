import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  line: {
    alignItems: 'center',
    '&:not(:last-child)': {
      marginBottom: 10,
    },
    '& > div:nth-child(1)': {
      flex: 1,
    },
    '& > div:nth-child(3)': {
      flex: 1,
    },
  },
  spacer: {
    margin: '0px 10px',
  },
  add: {
    marginBottom: 10,
  },
  remove: {
    margin: '0px 10px',
  },
});
