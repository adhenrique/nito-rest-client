import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { COLLECTION } from 'components/Dialogs/ids';
import { closeDialog, updateParameters } from 'components/Dialogs/actions';
import { setCollection, updateCollection } from 'components/App/actions';
import { Input, Tabs, Tab } from 'components/UI';
import { pathOr } from 'ramda';
import { useStyles } from './styles';
import VariablesTabPanel from './TabPanels/Variables';
import PrescriptsTabPanel from './TabPanels/Prescripts';
import AuthorizationTabPanel from './TabPanels/Authorization';

const Collection = () => {
  const { id, parameters } = useSelector(state => state.dialogs);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [tab, setTab] = useState(0);

  function handleCloseDialog() {
    dispatch(closeDialog());
  }

  function handleSave() {
    if (parameters.id) {
      dispatch(updateCollection(parameters, parameters.id));
    } else {
      dispatch(setCollection(parameters));
    }
    handleCloseDialog();
  }

  function handleCancel() {
    handleCloseDialog();
  }

  function handleChangeTab(event, newValue) {
    setTab(newValue);
  }

  function handleChangeName(e) {
    dispatch(
      updateParameters({
        ...parameters,
        name: e.target.value,
      }),
    );
  }

  function renderTitle() {
    if (parameters.id) {
      return 'Edit a Collection';
    }
    return 'Create new Collection';
  }

  return (
    <Dialog
      open={id === COLLECTION}
      onClose={handleCloseDialog}
      fullWidth
      maxWidth="sm"
      onExited={() => setTab(0)}
      classes={{ paper: classes.root }}
    >
      <DialogTitle id="collection-dialog-title">{renderTitle()}</DialogTitle>
      <DialogContent className={classes.content}>
        <Box>
          <Input
            placeholder="Enter a name"
            label="Name"
            onChange={handleChangeName}
            value={pathOr('', ['name'], parameters)}
          />
          <Tabs value={tab} onChange={handleChangeTab}>
            <Tab selected label="Variables" />
            <Tab label="Authorization" />
            <Tab label="Pre scripts" />
          </Tabs>
        </Box>
        <VariablesTabPanel parameters={parameters} tab={tab} />
        <AuthorizationTabPanel parameters={parameters} tab={tab} />
        <PrescriptsTabPanel parameters={parameters} tab={tab} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Collection;
