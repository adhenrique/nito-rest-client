import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  text: {
    fontSize: '0.8rem',
    color: '#424242',
  },
  iconButton: props => ({ ...props.iconButton }),
  icon: props => ({ ...props.icon }),
  menu: props => ({ ...props.menu }),
});
