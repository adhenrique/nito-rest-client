import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import { useStyles } from './styles';

const Request = ({ ...props }) => {
  const classes = useStyles(props);
  return (
    <Box className={classes.root}>
      <Typography className={classes.verb}>{props.verb}</Typography>
      <Typography>{props.name}</Typography>
    </Box>
  );
};

Request.propTypes = {
  verb: PropTypes.string,
  name: PropTypes.string,
};

export default Request;
