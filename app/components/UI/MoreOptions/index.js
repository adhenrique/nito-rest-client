import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, Menu, MenuItem, Tooltip } from '@material-ui/core';
import { MoreHoriz as MoreHorizIcon } from '@material-ui/icons';
import { useStyles } from './styles';

const defaultStyle = {
  iconButton: {},
  icon: {},
  menu: {},
};

function MoreOptions({
  context,
  className,
  iconSize,
  items,
  outlined,
  disabled,
}) {
  const classes = useStyles({
    ...defaultStyle,
    ...className,
  });
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  }

  function handleItemClick(item, evt) {
    evt.stopPropagation();
    item.onClick(evt, context, item);
    handleClose();
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function renderItems() {
    return items.map((item, key) => (
      <MenuItem
        key={`more-options${key.toString()}`}
        className={classes.text}
        onClick={evt => handleItemClick(item, evt)}
      >
        {item.text}
      </MenuItem>
    ));
  }

  const iconParameters = outlined ? { color: 'inherit' } : {};
  return (
    <>
      <Tooltip title="Opções">
        <IconButton
          size={iconSize}
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          disabled={disabled}
          className={classes.iconButton}
          /* eslint-disable-next-line react/jsx-props-no-spreading */
          {...iconParameters}
        >
          <MoreHorizIcon className={classes.icon} />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={classes.menu}
      >
        {renderItems()}
      </Menu>
    </>
  );
}

MoreOptions.defaultProps = {
  iconSize: 'small',
  outlined: false,
  className: defaultStyle,
};

MoreOptions.propTypes = {
  context: PropTypes.object,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  iconSize: PropTypes.string,
  items: PropTypes.array,
  outlined: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default MoreOptions;
