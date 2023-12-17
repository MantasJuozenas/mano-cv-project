import { useState } from 'react';
import { IndependentTabStyled, TabStyled } from './TabList.styled';
import { TabListProps, TabType } from '../../types/types';

export const TabList = (props: TabListProps) => {
  const [tabList, setTabList] = useState<TabType[]>(props.data || []);

  const handleClick = (e: React.MouseEvent) => {
    const newTabList = [...tabList];
    newTabList.forEach((prop) => {
      const clickedElement = e.target as HTMLElement;
      prop.name === clickedElement.innerHTML ? (prop.isActive = 'true') : (prop.isActive = 'false');
    });
    setTabList(newTabList);
  };

  return (
    <TabStyled>
      {tabList.map((tab) => (
        <IndependentTabStyled
          key={tab.name}
          onClick={(e) => handleClick(e)}
          active={tab.isActive}
          last={tab.isLast}
          to={tab.link}
        >
          {tab.name}
        </IndependentTabStyled>
      ))}
    </TabStyled>
  );
};
