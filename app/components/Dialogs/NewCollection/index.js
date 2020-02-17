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
import { Input } from 'components/UI';

const NewCollectionDialog = () => {
  const { id } = useSelector(state => state.dialogs);
  const dispatch = useDispatch();

  function handleClose() {
    dispatch(closeDialog());
  }

  return (
    <Dialog
      open={id === NEW_COLLECTION}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle id="form-dialog-title">New Collection</DialogTitle>
      <DialogContent>
        <Input placeholder="Enter a name" label="Name" />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
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
