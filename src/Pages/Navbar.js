import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Menu} from 'antd';
import {MenuOutlined, CloseOutlined} from '@ant-design/icons';
import {NavbarData} from './NavbarData';
import './Navbar.css';

function Navbar() {

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return(
    <>
      <div className='navbar'>
        <MenuOutlined className='menu-bars' onClick={showSidebar}/>
      </div>

      <nav className={sidebar ? 'nav-manu active' : 'nav-menu'}>
        <Menu
          className='nav-menu-items'
          mode='inline'
          onClick={showSidebar}
        >
          <Menu.Item className='navbar-toggle'>
            <Link to='/' className='menu-bars'>
            <CloseOutlined onClick={showSidebar}/>
            </Link>
          </Menu.Item>

          {
            NavbarData.map((item, index) => {
              return(
                <Menu.Item key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className='navbar-span'>{item.title}</span>
                  </Link>
                </Menu.Item>
              )
            })
          }
        </Menu>
      </nav>
    </>
  ) // return ends
} // function() ends

export default Navbar
