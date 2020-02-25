import React from 'react';
import { Grid } from '@material-ui/core';
import Sidebar from 'components/Sidebar';
import {
  CollectionDialog,
  ConfirmDialog,
  FolderDialog,
  RequestDialog,
} from 'components/Dialogs';
import { useStyles } from './styles';

const App = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item className={classes.sidebar}>
        <Sidebar />
      </Grid>
      <Grid item className={classes.stage}>
        stage
      </Grid>
      <CollectionDialog />
      <ConfirmDialog />
      <FolderDialog />
      <RequestDialog />
    </Grid>
  );
};

export default App;
