import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppBar, Grid, IconButton } from '@material-ui/core';
import { Tabs, Tab } from 'components/UI';
import { Add, Close } from '@material-ui/icons';
import { removeTabByRequestId } from 'components/App/actions';
import { generateFakeID, a11yProps } from 'helpers';
import { useStyles } from './styles';
import StageTabPanel from './components/StageTabPanel';

const Stage = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const { tabs } = useSelector(state => state.app);
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function renderTabLabel(request) {
    return (
      <div>
        {request.name}
        <IconButton
          size="small"
          onClick={() => dispatch(removeTabByRequestId(request.id))}
          className={classes.closeButton}
        >
          <Close fontSize="small" />
        </IconButton>
      </div>
    );
  }

  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Grid container className={classes.container}>
          <Grid item xs={11}>
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabs}
              variant="scrollable"
              scrollButtons="auto"
            >
              {tabs.map((tab, tabIndex) => (
                <Tab
                  key={`tab-${generateFakeID()}`}
                  component="div"
                  label={renderTabLabel(tab)}
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...a11yProps('stage-tab', tabIndex)}
                />
              ))}
            </Tabs>
          </Grid>
          <Grid item xs={1}>
            <IconButton>
              <Add />
            </IconButton>
          </Grid>
        </Grid>
      </AppBar>
      <StageTabPanel value={value} />
    </>
  );
};

export default Stage;
