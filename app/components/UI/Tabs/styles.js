import { withStyles, Tabs as MuiTabs } from '@material-ui/core';

export const StylizedTabs = withStyles(() => ({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#1890ff',
  },
}))(MuiTabs);
