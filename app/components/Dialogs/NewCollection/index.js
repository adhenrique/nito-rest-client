import React from 'react';
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
import { Input, Tabs, Tab, TabPanel, Duplicate } from 'components/UI';

const NewCollectionDialog = () => {
  const { id } = useSelector(state => state.dialogs);
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);

  function handleCloseDialog() {
    dispatch(closeDialog());
  }

  function handleChangeTab(event, newValue) {
    setValue(newValue);
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
        <Input placeholder="Enter a name" label="Name" />
        <Tabs value={value} onChange={handleChangeTab}>
          <Tab label="Variables" />
          <Tab label="Pre scripts" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Duplicate />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Pre scripts
        </TabPanel>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog} color="primary">
          Cancel
        </Button>
        <Button onClick={() => {}} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewCollectionDialog;
