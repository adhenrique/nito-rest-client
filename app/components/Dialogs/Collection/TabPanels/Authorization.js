import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import { TabPanel, Select, Input } from 'components/UI';
import { updateParameters } from 'components/Dialogs/actions';
import { useDispatch } from 'react-redux';
import { pathOr } from 'ramda';
import { useStyles } from '../styles';

const AuthorizationTabPanel = ({ tab, parameters }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const mode = pathOr('', ['authorization', 'mode'], parameters);

  const typeItems = [
    { value: 'basic', label: 'Basic' },
    { value: 'bearer', label: 'Bearer Token' },
  ];

  function handleChangeAuthorizationType(e) {
    dispatch(
      updateParameters({
        ...parameters,
        authorization: {
          mode: e.target.value,
        },
      }),
    );
  }

  function handleChangeBearerToken(e) {
    dispatch(
      updateParameters({
        ...parameters,
        authorization: {
          ...parameters.authorization,
          params: {
            ...parameters.authorization.params,
            bearer: e.target.value,
          },
        },
      }),
    );
  }

  function handleChangeBasicParams(e, field) {
    dispatch(
      updateParameters({
        ...parameters,
        authorization: {
          ...parameters.authorization,
          params: {
            ...parameters.authorization.params,
            [field]: e.target.value,
          },
        },
      }),
    );
  }

  function renderContent() {
    if (mode === 'basic') {
      return (
        <Box>
          <Input
            label="Username"
            placeholder="Enter a username"
            value={pathOr(
              '',
              ['authorization', 'params', 'username'],
              parameters,
            )}
            onChange={e => handleChangeBasicParams(e, 'username')}
            className={classes.inputs}
          />
          <Input
            label="Password"
            placeholder="Enter a password"
            type="password"
            value={pathOr(
              '',
              ['authorization', 'params', 'password'],
              parameters,
            )}
            onChange={e => handleChangeBasicParams(e, 'password')}
            className={classes.inputs}
          />
        </Box>
      );
    }
    if (mode === 'bearer') {
      return (
        <Input
          placeholder="Enter a Bearer token"
          label="Bearer Token"
          value={pathOr('', ['authorization', 'params', 'bearer'], parameters)}
          onChange={handleChangeBearerToken}
        />
      );
    }
    return (
      <Typography>
        <em>Select type...</em>
      </Typography>
    );
  }

  return (
    <TabPanel value={tab} index={1} className={classes.tabContent}>
      <Select
        label="Type"
        value={mode}
        items={typeItems}
        onChange={handleChangeAuthorizationType}
      />
      <Box className={classes.authContent}>{renderContent()}</Box>
    </TabPanel>
  );
};

AuthorizationTabPanel.propTypes = {
  tab: PropTypes.number,
  parameters: PropTypes.object,
};

export default AuthorizationTabPanel;
