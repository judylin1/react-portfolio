import React from 'react';
import { ToolbarGroup, Toolbar, ToolbarTitle } from 'material-ui';
const Scroll = require('react-scroll');
const Link = Scroll.Link;

const AppBar = () => {
  const toolbarText = [
    {
      text: 'About',
      jumpTo: 'aboutSection',
    },
    {
      text: 'Projects',
      jumpTo: 'projectsSection',
    },
    {
      text: 'Contact',
      jumpTo: 'contactSection',
    },
  ];

  const genericTextStyle = { color: '#ffffff', fontSize: '16px', padding: '0 15px' };

  return (
    <div style={{ width: '100%', marginTop: '10px' }}>
      <Toolbar style={{ backgroundColor: '#003366' }}>
        <ToolbarGroup firstChild>
          <ToolbarTitle text="Judy Lin" style={{ color: '#ffffff', fontSize: '24px', padding: '0 15px' }} />
        </ToolbarGroup>
        <ToolbarGroup>
          {
            toolbarText.map(header => (
              <Link key={header.text} activeClass="active" to={header.jumpTo} spy smooth duration={500}>
                <ToolbarTitle text={header.text} style={genericTextStyle} />
              </Link>
            ))
          }
        </ToolbarGroup>
      </Toolbar>
    </div>
  );
};

export default AppBar;
