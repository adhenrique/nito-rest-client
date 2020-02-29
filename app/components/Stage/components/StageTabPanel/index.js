import React from 'react';
import { ButtonGroup, Input, Select, TabPanel } from 'components/UI';
import { generateFakeID } from 'helpers';
import { Button, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useStyles } from './styles';

const StageTabPanel = ({ value }) => {
  const classes = useStyles();
  const { tabs } = useSelector(state => state.app);

  return tabs.map((_, tabIndex) => (
    <TabPanel
      key={`tabpanel-${generateFakeID()}`}
      value={value}
      index={tabIndex}
    >
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Select
            items={[
              { value: 'get', label: 'GET' },
              { value: 'post', label: 'POST' },
            ]}
          />
        </Grid>
        <Grid item xs={7}>
          <Input label="Url" placeholder="Enter a url" />
        </Grid>
        <Grid item xs={3} className={classes.actions}>
          <Button
            variant="contained"
            disableElevation
            className={classes.buttons}
            color="primary"
          >
            Send
          </Button>
          <ButtonGroup
            buttonLabel="Save"
            className={classes.buttons}
            items={[{ text: 'Save as' }]}
          />
        </Grid>
        <Grid item xs={12}>
          asd
        </Grid>
      </Grid>
    </TabPanel>
  ));
};

export default StageTabPanel;
