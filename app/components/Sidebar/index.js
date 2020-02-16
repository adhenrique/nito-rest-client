import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import {
  AddCircleOutline,
  Mail as MailIcon,
  SupervisorAccountOutlined as SupervisorAccountIcon,
} from '@material-ui/icons';
import { Input, TreeView, TreeItem } from 'components/UI';
import { useStyles } from './styles';

const Sidebar = () => {
  const classes = useStyles();

  return (
    <Box>
      <List disablePadding className={classes.list}>
        <ListItem disableGutters>
          <Input placeholder="Digite algo..." label="Pesquise" />
        </ListItem>
        <ListItem disableGutters className={classes.collectionsHeader}>
          <ListItemText primary="Collections:" />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="add">
              <AddCircleOutline />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem disableGutters>
          <TreeView>
            <TreeItem nodeId="1" labelText="Collection" labelIcon={MailIcon}>
              <TreeItem nodeId="2" labelText="Item" labelIcon={MailIcon}>
                <TreeItem
                  nodeId="3"
                  labelText="Request"
                  labelIcon={SupervisorAccountIcon}
                  color="#1a73e8"
                  bgColor="#e8f0fe"
                />
              </TreeItem>
            </TreeItem>
          </TreeView>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
