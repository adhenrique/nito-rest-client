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
import { pathOr } from 'ramda';
import { Input } from 'components/UI';
import {
  setCollectionItem,
  updateCollectionItem,
} from 'components/App/actions';
import { closeDialog, updateParameters } from '../actions';
import { FOLDER } from '../ids';

const Folder = () => {
  const { id, parameters } = useSelector(state => state.dialogs);
  const dispatch = useDispatch();

  function handleCloseDialog() {
    dispatch(closeDialog());
  }

  function handleCancel() {
    handleCloseDialog();
  }

  function handleSave() {
    if (parameters.item.id) {
      dispatch(updateCollectionItem(parameters.collectionId, parameters.item));
    } else {
      dispatch(setCollectionItem(parameters));
    }
    handleCloseDialog();
  }

  function handleChangeFolderName(e) {
    dispatch(
      updateParameters({
        ...parameters,
        item: {
          ...parameters.item,
          name: e.target.value,
        },
      }),
    );
  }

  return (
    <Dialog
      open={id === FOLDER}
      onClose={handleCloseDialog}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle id="confirm-dialog-title">{parameters.title}</DialogTitle>
      <DialogContent>
        <Typography>{parameters.content}</Typography>
        <Input
          onChange={handleChangeFolderName}
          placeholder="Folder name"
          label="Folder name"
          value={pathOr('', ['item', 'name'], parameters)}
        />
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

export default Folder;
