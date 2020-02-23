import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Duplicate, TabPanel } from 'components/UI';
import { pathOr } from 'ramda';
import { updateParameters } from 'components/Dialogs/actions';
import { useDispatch } from 'react-redux';
import { useStyles } from '../styles';

const VariablesTabPanel = ({ tab, parameters }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleChangeVariables = useCallback(
    variables => {
      dispatch(
        updateParameters({
          ...parameters,
          variables,
        }),
      );
    },
    [dispatch, parameters],
  );

  return (
    <TabPanel value={tab} index={0} className={classes.tabContent}>
      <Duplicate
        onChange={handleChangeVariables}
        data={pathOr([], ['variables'], parameters)}
      />
    </TabPanel>
  );
};

VariablesTabPanel.propTypes = {
  tab: PropTypes.number,
  parameters: PropTypes.object,
};

export default VariablesTabPanel;
