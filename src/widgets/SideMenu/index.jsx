import React from 'react';
import { Tooltip } from 'antd';
import { getIcon } from '../../assets/icons';

import { Sider, IconWrapper, IconButton } from './styles';

const SideMenu = ({ children, menulist, onClick }) => (

    <Sider>
      {menulist.map((item) => (
        <IconWrapper key={item.key} data-id={item.key} onClick={onClick}>
          <Tooltip placement="left" title={item.title}>
            <IconButton>{getIcon(`${item.icon}`)}</IconButton>
          </Tooltip>
        </IconWrapper>
      ))}
      {children}
    </Sider>
  
);

export default SideMenu;
