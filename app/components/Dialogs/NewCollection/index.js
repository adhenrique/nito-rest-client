import React, { useCallback, useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { NEW_COLLECTION } from 'components/Dialogs/ids';
import { closeDialog } from 'components/Dialogs/actions';
import { setCollection } from 'components/App/actions';
import { Input, Tabs, Tab, TabPanel, Duplicate } from 'components/UI';

const NewCollectionDialog = () => {
  const { id } = useSelector(state => state.dialogs);
  const dispatch = useDispatch();
  const [tab, setTab] = useState(0);
  const [data, setData] = useState({
    name: '',
    variables: [],
    preScript: '',
  });

  function handleCloseDialog() {
    dispatch(closeDialog());
  }

  function handleSave() {
    dispatch(setCollection(data));
    handleCloseDialog();
  }

  function handleCancel() {
    handleCloseDialog();
  }

  function handleChangeTab(event, newValue) {
    setTab(newValue);
  }

  const handleChangeVariables = useCallback(variables => {
    setData(c => ({
      ...c,
      variables,
    }));
  }, []);

  function handleChangePrescripts(e) {
    setData({
      ...data,
      preScript: e.target.value,
    });
  }

  function handleChangeName(e) {
    setData({
      ...data,
      name: e.target.value,
    });
  }

  return (
    <Dialog
      open={id === NEW_COLLECTION}
      onClose={handleCloseDialog}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle id="form-dialog-title">New Collection</DialogTitle>
      <DialogContent>
        <Input
          placeholder="Enter a name"
          label="Name"
          onChange={handleChangeName}
        />
        <Tabs value={tab} onChange={handleChangeTab}>
          <Tab label="Variables" />
          <Tab label="Pre scripts" />
        </Tabs>
        <TabPanel value={tab} index={0}>
          <Duplicate onChange={handleChangeVariables} />
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <Input
            onChange={handleChangePrescripts}
            placeholder="Pré scripts"
            label="Pré scripts"
            multiline
            rows={10}
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

export default NewCollectionDialog;
