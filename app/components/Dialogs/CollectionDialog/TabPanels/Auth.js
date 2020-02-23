import React from 'react';
import PropTypes from 'prop-types';
import { TabPanel } from 'components/UI';
import { useStyles } from '../styles';

const AuthorizationTabPanel = ({ tab }) => {
  const classes = useStyles();

  return (
    <TabPanel value={tab} index={1} className={classes.tabContent}>
      authorization tab
    </TabPanel>
  );
};

AuthorizationTabPanel.propTypes = {
  tab: PropTypes.number,
};

export default AuthorizationTabPanel;
