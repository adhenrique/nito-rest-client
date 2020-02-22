import React, { useCallback, useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { NEW_COLLECTION } from 'components/Dialogs/ids';
import { closeDialog, updateParameters } from 'components/Dialogs/actions';
import { setCollection, updateCollection } from 'components/App/actions';
import { Input, Tabs, Tab, TabPanel, Duplicate } from 'components/UI';
import { pathOr } from 'ramda';
import { useStyles } from './styles';

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

  function handleChangePrescripts(e) {
    dispatch(
      updateParameters({
        ...parameters,
        preScript: e.target.value,
      }),
    );
  }

  function handleChangeName(e) {
    dispatch(
      updateParameters({
        ...parameters,
        name: e.target.value,
      }),
    );
  }

  return (
    <Dialog
      open={id === NEW_COLLECTION}
      onClose={handleCloseDialog}
      fullWidth
      maxWidth="sm"
      onExited={() => setTab(0)}
      classes={{ paper: classes.root }}
    >
      <DialogTitle id="form-dialog-title">New Collection</DialogTitle>
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
            <Tab label="Pre scripts" />
          </Tabs>
        </Box>
        <TabPanel value={tab} index={0} className={classes.tabContent}>
          <Duplicate
            onChange={handleChangeVariables}
            data={pathOr([], ['variables'], parameters)}
          />
        </TabPanel>
        <TabPanel value={tab} index={1} className={classes.tabContent}>
          <Input
            onChange={handleChangePrescripts}
            placeholder="Pré scripts"
            label="Pré scripts"
            multiline
            rows={10}
            value={pathOr('', ['preScript'], parameters)}
          />
        </TabPanel>
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
