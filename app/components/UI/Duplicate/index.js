import React, { useEffect, useState, memo } from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, IconButton, Button } from '@material-ui/core';
import { Input } from 'components/UI';
import { RemoveCircle } from '@material-ui/icons';
import { useStyles } from './styles';

const Duplicate = ({ onChange }) => {
  const classes = useStyles();
  const [lines, setLines] = useState([{ key: '', value: '' }]);

  function renderLines() {
    return lines.map((line, lineIndex) => (
      <Grid id="template-line" container className={classes.line}>
        <Grid item>
          <Input
            placeholder="Key"
            label="Key"
            value={lines[lineIndex].key}
            onChange={e => handleChange(e, lineIndex, 'key')}
          />
        </Grid>
        <Grid item className={classes.spacer}>
          <Typography>:</Typography>
        </Grid>
        <Grid item>
          <Input
            placeholder="Value"
            label="Value"
            value={lines[lineIndex].value}
            onChange={e => handleChange(e, lineIndex, 'value')}
          />
        </Grid>
        <Grid item className={classes.remove}>
          <IconButton
            aria-label="remove"
            onClick={() => handleRemove(lineIndex)}
          >
            <RemoveCircle />
          </IconButton>
        </Grid>
      </Grid>
    ));
  }

  function handleAdd() {
    setLines([...lines, { key: '', value: '' }]);
  }

  function handleRemove(i) {
    const values = [...lines];
    if (lines.length === 1) {
      setLines([{ key: '', value: '' }]);
      return;
    }
    values.splice(i, 1);
    setLines(values);
  }

  function handleChange(event, i, field) {
    const values = [...lines];
    values[i][field] = event.target.value;
    setLines(values);
  }

  useEffect(() => () => onChange(lines));

  return (
    <>
      <Button onClick={handleAdd} className={classes.add}>
        Add
      </Button>
      {renderLines()}
    </>
  );
};

Duplicate.defaultProps = {
  onChange: () => {},
};

Duplicate.propTypes = {
  onChange: PropTypes.func,
};

export default memo(Duplicate);
