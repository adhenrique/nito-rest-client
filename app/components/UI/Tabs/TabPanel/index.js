import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Box } from '@material-ui/core';

const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
};

TabPanel.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]),
  value: PropTypes.number,
  index: PropTypes.number,
};

export default TabPanel;
