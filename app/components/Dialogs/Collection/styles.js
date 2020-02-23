import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: {
    height: 500,
  },
  content: {
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  tabContent: {
    overflow: 'auto',
  },
  authContent: {
    marginTop: 20,
  },
  inputs: {
    marginBottom: 20,
  },
}));
