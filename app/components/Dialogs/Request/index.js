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
import { setItemRequest, updateItemRequest } from 'components/App/actions';
import { closeDialog, updateParameters } from '../actions';
import { REQUEST } from '../ids';
import { useStyles } from './styles';

const Request = () => {
  const classes = useStyles();
  const { id, parameters } = useSelector(state => state.dialogs);
  const dispatch = useDispatch();

  function handleCloseDialog() {
    dispatch(closeDialog());
  }

  function handleCancel() {
    handleCloseDialog();
  }

  function handleSave() {
    if (parameters.request.id) {
      dispatch(
        updateItemRequest(
          parameters.collectionId,
          parameters.item.id,
          parameters.request,
        ),
      );
    } else {
      dispatch(setItemRequest(parameters));
    }
    handleCloseDialog();
  }

  function handleChangeRequestName(e) {
    dispatch(
      updateParameters({
        ...parameters,
        request: {
          ...parameters.request,
          name: e.target.value,
        },
      }),
    );
  }

  function handleChangeRequestDescription(e) {
    dispatch(
      updateParameters({
        ...parameters,
        request: {
          ...parameters.request,
          description: e.target.value,
        },
      }),
    );
  }

  return (
    <Dialog
      open={id === REQUEST}
      onClose={handleCloseDialog}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle id="confirm-dialog-title">{parameters.title}</DialogTitle>
      <DialogContent>
        <Typography>{parameters.content}</Typography>
        <Input
          onChange={handleChangeRequestName}
          placeholder="Request name"
          label="Request name"
          value={pathOr('', ['request', 'name'], parameters)}
          className={classes.inputs}
        />
        <Input
          onChange={handleChangeRequestDescription}
          placeholder="Description (optional)"
          label="Description"
          multiline
          rows={10}
          value={pathOr('', ['request', 'description'], parameters)}
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

export default Request;
