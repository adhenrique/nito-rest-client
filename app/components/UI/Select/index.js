import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem, TextField } from '@material-ui/core';

const Select = ({ label, value, onChange, items }) => (
  <TextField
    select
    label={label}
    value={value}
    onChange={onChange}
    variant="outlined"
    margin="dense"
  >
    <MenuItem value="">
      <em>None</em>
    </MenuItem>
    {items.map(item => (
      <MenuItem key={item.value} value={item.value}>
        {item.label}
      </MenuItem>
    ))}
  </TextField>
);

Select.defaultProps = {
  onChange: () => {},
};

Select.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  items: PropTypes.array,
};

export default Select;
