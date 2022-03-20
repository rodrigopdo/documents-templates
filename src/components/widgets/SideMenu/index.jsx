import React from 'react';
import { Tooltip } from 'antd';
import { getIcon } from '../../../assets/icons';

import { Sider, IconWrappper, IconButton } from './styles';

const SideMenu = ({ children, menulist, onClick }) => {
  return (
    <Sider>
      {menulist.map((item) => (
        <IconWrappper key={item.key} data-id={item.key} onClick={onClick}>
          <Tooltip placement="left" title={item.title}>
            <IconButton>{getIcon(`${item.icon}`)}</IconButton>
          </Tooltip>
        </IconWrappper>
      ))};
      {children}
    </Sider>
  )
}

export default SideMenu;