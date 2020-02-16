import React from 'react';
import { TextField } from '@material-ui/core';

const Input = props => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <TextField variant="outlined" margin="dense" {...props} />
);

export default Input;
