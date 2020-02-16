import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  list: {
    '& > li': {
      padding: 0,
      margin: 0,
      '&:not(:last-child)': {
        marginBottom: 10,
      },
    },
  },
  collectionsHeader: {
    borderBottom: '1px solid #ccc',
  },
}));
