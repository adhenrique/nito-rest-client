import { makeStyles } from '@material-ui/core/styles';
import { getVerbColors } from 'helpers';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  verb: ({ verb }) => ({
    marginRight: 10,
    fontWeight: 500,
    minWidth: 46,
    textAlign: 'center',
    color: getVerbColors(verb || '').color,
  }),
});
