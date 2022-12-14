import React from 'react';
import Button ,{ButtonType,ButtonSize}from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuitem';
import SubMenu from './components/Menu/subMenu';

function App() {
 

  return (
    <div className="App">
      <header className="App-header">
      
      <Menu defaultIndex='0' onSelect={(index) => {alert(index)}}  mode="vertical" defaultOpenSubMenus={['2']}>
          <MenuItem>
            cool link
          </MenuItem>
          <MenuItem disabled>
            cool link 2
          </MenuItem> 
          <SubMenu title="dropdown">
            <MenuItem>
              dropdown 1
            </MenuItem>
            <MenuItem>
              dropdown 2
            </MenuItem>
          </SubMenu>        
          <MenuItem>
            cool link 3
          </MenuItem>
        </Menu>

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
