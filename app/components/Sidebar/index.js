import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import { Input, TreeView, TreeItem, MoreOptions } from 'components/UI';
import { COLLECTION, CONFIRM } from 'components/Dialogs/ids';
import { callDialog } from 'components/Dialogs/actions';
import { useStyles } from './styles';
import Request from './Request';

const Sidebar = () => {
  const classes = useStyles();
  const { collections } = useSelector(state => state.app);
  const dispatch = useDispatch();

  const collectionMoreOptions = [
    {
      text: 'Edit',
      onClick: (_, context) => openDialog(COLLECTION, context),
    },
    {
      text: 'Delete',
      onClick: () =>
        openDialog(CONFIRM, {
          title: 'Are u sure?',
          content: 'All of folders and configs will be deleted...',
          callback: () => alert('ok'),
        }),
    },
    { text: 'New folder' },
  ];

  function renderTree() {
    if (collections.length > 0) {
      return (
        <TreeView>
          {collections.map((collection, collectionIndex) => (
            <TreeItem
              key={`treeitem-${collectionIndex.toString()}`}
              nodeId={`${collectionIndex}`}
              labelText={collection.name}
              labelIcon={FolderIcon}
              moreOptions={
                <MoreOptions
                  items={collectionMoreOptions}
                  context={collection}
                />
              }
            >
              {collection.items.length > 0
                ? renderCollectionItems(collection, collectionIndex)
                : null}
            </TreeItem>
          ))}
        </TreeView>
      );
    }
    return (
      <Typography variant="body2">There are no collections to list</Typography>
    );
  }

  function renderCollectionItems(collection, collectionIndex) {
    return collection.items.map((item, itemIndex) => (
      <TreeItem
        key={`treeitem-${collectionIndex.toString()}.${itemIndex.toString()}`}
        nodeId={`${collectionIndex}.${itemIndex}`}
        labelText={item.name}
        labelIcon={FolderIcon}
        moreOptions={<MoreOptions items={[{ id: 1, text: 'Edit' }]} />}
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
        key={`treeitem-${collectionIndex.toString()}.${itemIndex.toString()}.${requestIndex.toString()}`}
        nodeId={`${collectionIndex}.${itemIndex}.${requestIndex}`}
        labelText={<Request verb={request.verb} name={request.name} />}
        moreOptions={<MoreOptions items={[{ id: 1, text: 'Edit' }]} />}
      />
    ));
  }

  function openDialog(dialogId, params = {}) {
    dispatch(callDialog(dialogId, params));
  }

  return (
    <Box>
      <List disablePadding className={classes.list}>
        <ListItem disableGutters>
          <Input placeholder="Something..." label="Search" />
        </ListItem>
        <ListItem disableGutters className={classes.collectionsHeader}>
          <ListItemText primary="Collections:" />
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="add"
              onClick={() => openDialog(COLLECTION)}
            >
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
