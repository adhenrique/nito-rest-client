import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  ButtonGroup as MuiButtonGroup,
  Button,
  Popper,
  Grow,
  ClickAwayListener,
  Paper,
  MenuList,
  MenuItem,
} from '@material-ui/core';
import { ArrowDropDown as ArrowDropDownIcon } from '@material-ui/icons';
import classnames from 'classnames';
import { useStyles } from './styles';

const ButtonGroup = ({ items, context, className, buttonLabel }) => {
  const classes = useStyles();
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  function handleMenuItemClick(evt, item) {
    setOpen(false);
    evt.stopPropagation();
    item.onClick(evt, context, item);
  }

  function handleToggle() {
    setOpen(prevOpen => !prevOpen);
  }

  function handleClose(event) {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  }

  return (
    <>
      <MuiButtonGroup
        variant="contained"
        ref={anchorRef}
        aria-label="split button"
        className={classnames(classes.root, className)}
      >
        <Button disableElevation>{buttonLabel}</Button>
        <Button size="small" onClick={handleToggle} disableElevation>
          <ArrowDropDownIcon />
        </Button>
      </MuiButtonGroup>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            /* eslint-disable-next-line react/jsx-props-no-spreading */
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu">
                  {items.map((item, index) => (
                    <MenuItem
                      key={item.text}
                      onClick={event => handleMenuItemClick(event, index)}
                    >
                      {item.text}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

ButtonGroup.propTypes = {
  context: PropTypes.object,
  items: PropTypes.array,
  className: PropTypes.string,
  buttonLabel: PropTypes.string,
};

export default ButtonGroup;
