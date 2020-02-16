import React from 'react';
import { TreeView as MuiTreeView } from '@material-ui/lab';
import {
  ArrowDropDown as ArrowDropDownIcon,
  ArrowRight as ArrowRightIcon,
} from '@material-ui/icons';
import { useStyles } from './styles';

const TreeView = ({ children }) => {
  const classes = useStyles();

  return (
    <MuiTreeView
      defaultExpanded={['3']}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
      className={classes.root}
    >
      {children}
    </MuiTreeView>
  );
};

export default TreeView;
