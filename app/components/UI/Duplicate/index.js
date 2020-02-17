import React from 'react';
import { Grid, Typography, IconButton } from '@material-ui/core';
import { Input } from 'components/UI';
import { RemoveCircle } from '@material-ui/icons';
import { useStyles } from './styles';

const Duplicate = () => {
  const classes = useStyles();

  return (
    <Grid id="template-line" container className={classes.line}>
      <Grid item>
        <Input placeholder="Key" label="Key" />
      </Grid>
      <Grid item className={classes.spacer}>
        <Typography>:</Typography>
      </Grid>
      <Grid item>
        <Input placeholder="Value" label="Value" />
      </Grid>
      <Grid item className={classes.action}>
        <IconButton aria-label="remove" onClick={() => {}}>
          <RemoveCircle />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Duplicate;
