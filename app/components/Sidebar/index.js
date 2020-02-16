import React from 'react';
import { useSelector } from 'react-redux';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
} from '@material-ui/core';
import { AddCircleOutline, Folder as FolderIcon } from '@material-ui/icons';
import { Input, TreeView, TreeItem } from 'components/UI';
import { useStyles } from './styles';
import Request from './Request';

const Sidebar = () => {
  const classes = useStyles();
  const { collections } = useSelector(state => state.app);

  function renderTree() {
    if (collections.length > 0) {
      return (
        <TreeView>
          {collections.map((collection, collectionIndex) => (
            <TreeItem
              nodeId={collectionIndex}
              labelText={collection.name}
              labelIcon={FolderIcon}
            >
              {collection.items.length > 0
                ? renderCollectionItems(collection, collectionIndex)
                : null}
            </TreeItem>
          ))}
        </TreeView>
      );
    }
    return <Typography variant="body2">Adicione uma collection</Typography>;
  }

  function renderCollectionItems(collection, collectionIndex) {
    return collection.items.map((item, itemIndex) => (
      <TreeItem
        nodeId={`${collectionIndex}.${itemIndex}`}
        labelText={item.name}
        labelIcon={FolderIcon}
      >
        {item.items.length > 0
          ? renderItemRequests(item, collectionIndex, itemIndex)
          : null}
      </TreeItem>
    ));
  }

  function renderItemRequests(item, collectionIndex, itemIndex) {
    return item.items.map((request, requestIndex) => (
      <TreeItem
        nodeId={`${collectionIndex}.${itemIndex}.${requestIndex}`}
        labelText={<Request verb={request.verb} name={request.name} />}
      />
    ));
  }

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
        <ListItem disableGutters>{renderTree()}</ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
