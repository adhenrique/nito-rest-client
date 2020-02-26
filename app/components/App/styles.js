import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  sidebar: {
    // background: '#ccc',
    width: 350,
    padding: 20,
  },
  stage: {
    width: 'calc(100% - 350px)',
    padding: 20,
  },
}));
