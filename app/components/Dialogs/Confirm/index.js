import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { CONFIRM } from '../ids';
import { closeDialog } from '../actions';

const Confirm = () => {
  const { id, parameters } = useSelector(state => state.dialogs);
  const dispatch = useDispatch();

  function handleCloseDialog() {
    dispatch(closeDialog());
  }

  function handleCancel() {
    handleCloseDialog();
  }

  function handleOk() {
    parameters.callback();
  }

  return (
    <Dialog
      open={id === CONFIRM}
      onClose={handleCloseDialog}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle id="confirm-dialog-title">{parameters.title}</DialogTitle>
      <DialogContent>
        <Typography>{parameters.content}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={handleOk} color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Confirm;
