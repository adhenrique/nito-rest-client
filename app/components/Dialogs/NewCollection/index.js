import React from "react";
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@material-ui/core';

const NewCollectionDialog = ({ open }) => {
  return (
    <Dialog open={open}>
      <DialogTitle id="form-dialog-title">New Collection</DialogTitle>
      <DialogContent>
        <p>asd</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => {}} color="primary">
          Cancel
        </Button>
        <Button onClick={() => {}} color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewCollectionDialog;