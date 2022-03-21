import React, { useCallback, useState } from 'react';

import Wrapper from './styles';
import SideMenu from '../../widgets/SideMenu';
import SideDrawer from '../../widgets/SideDrawer';
import { IntroEditor } from '../editor/Editor';

const sideBarList = [
  {
    key: 0,
    title: 'Intro',
    icon: 'identity',
    component: <IntroEditor />
  }
];

const LeftNav = () => {
  const [activeTab, setActiveTab] = useState(-1);

  const clickHandler = useCallback ((event) => {
    if (activeTab === event.currentTarget.dataset.id) setActiveTab(-1);
    else setActiveTab(event.currentTarget.dataset.id);
  }, [activeTab, setActiveTab]);
  
  return (
    <Wrapper>
      <SideMenu menulist={sideBarList} onClick={clickHandler} />
      <SideDrawer isShown={activeTab !== -1}>
        {sideBarList[activeTab]?.component} 
      </SideDrawer>
    </Wrapper>
  )
}

export default LeftNav;