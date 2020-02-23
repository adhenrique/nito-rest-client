import React from 'react';
import PropTypes from 'prop-types';
import { Input, TabPanel } from 'components/UI';
import { pathOr } from 'ramda';
import { updateParameters } from 'components/Dialogs/actions';
import { useDispatch } from 'react-redux';
import { useStyles } from '../styles';

const PrescriptsTabPanel = ({ tab, parameters }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  function handleChangePrescripts(e) {
    dispatch(
      updateParameters({
        ...parameters,
        preScript: e.target.value,
      }),
    );
  }

  return (
    <TabPanel value={tab} index={2} className={classes.tabContent}>
      <Input
        onChange={handleChangePrescripts}
        placeholder="Pré scripts"
        label="Pré scripts"
        multiline
        rows={10}
        value={pathOr('', ['preScript'], parameters)}
      />
    </TabPanel>
  );
};

PrescriptsTabPanel.propTypes = {
  tab: PropTypes.number,
  parameters: PropTypes.object,
};

export default PrescriptsTabPanel;
