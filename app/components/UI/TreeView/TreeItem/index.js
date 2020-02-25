import React from 'react';
import { TreeItem as MuiTreeItem } from '@material-ui/lab';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useStyles } from './styles';

const TreeItem = ({
  labelText,
  labelIcon: LabelIcon,
  labelInfo,
  moreOptions,
  color,
  bgColor,
  ...other
}) => {
  const classes = useStyles();
  return (
    <MuiTreeItem
      label={
        <div className={classes.labelRoot}>
          {LabelIcon && (
            <LabelIcon color="inherit" className={classes.labelIcon} />
          )}
          <Typography variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
          {labelInfo && (
            <Typography variant="caption" color="inherit">
              {labelInfo}
            </Typography>
          )}
          {moreOptions}
        </div>
      }
      style={{
        '--tree-view-color': color,
        '--tree-view-bg-color': bgColor || '#eee',
      }}
      classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        group: classes.group,
        label: classes.label,
      }}
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...other}
    />
  );
};

TreeItem.defaultProps = {
  moreOptions: null,
};

TreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType,
  labelText: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  labelInfo: PropTypes.string,
  moreOptions: PropTypes.node,
};

export default TreeItem;
