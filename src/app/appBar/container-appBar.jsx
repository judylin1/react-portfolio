import React, { PropTypes } from 'react';
import { ToolbarGroup, Toolbar, ToolbarTitle } from 'material-ui';

const AppBar = (props) => {
  const {
    value,
    onChangeFunc,
  } = props;

  const genericTextStyle = { color: '#ffffff', fontSize: '16px', padding: '0 15px' };

  return (
    <div style={{ width: '100%', marginTop: '10px' }}>
      <Toolbar style={{ backgroundColor: '#003366' }}>
        <ToolbarGroup firstChild>
          <ToolbarTitle text="Judy Lin" style={{ color: '#ffffff', fontSize: '24px', padding: '0 15px' }} />
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarTitle text="About" style={genericTextStyle} />
          <ToolbarTitle text="Projects" style={genericTextStyle} />
          <ToolbarTitle text="Contact" style={genericTextStyle} />
        </ToolbarGroup>
      </Toolbar>
    </div>
  );
};

AppBar.propTypes = {
  value: PropTypes.string,
  onChangeFunc: PropTypes.func,
};

export default AppBar;
