import { useState } from 'react';
import { IndependentTabStyled, ResponsiveTabStyled, TabStyled } from './TabList.styled';
import { TabListProps, TabType } from '../../types/types';

export const TabList = (props: TabListProps) => {
  const [tabList, setTabList] = useState<TabType[]>(props.data || []);

  const handleClick = (e: React.MouseEvent) => {
    const newTabList = [...tabList];

    newTabList.forEach((prop) => {
      const clickedElement = e.target as HTMLElement;
      prop.name === clickedElement.innerHTML ? (prop.isActive = 'true') : (prop.isActive = 'false');
    });

    if (window.innerWidth <= 768) {
      const sortedList = newTabList.sort((a, b) => {
        if (a.isActive === 'true' && b.isActive === 'false') {
          return -1;
        } else if (a.isActive === 'false' && b.isActive === 'true') {
          return 1;
        } else {
          return 0;
        }
      });

      sortedList.forEach((item, index) => {
        item.isLast = index === sortedList.length - 1 ? 'true' : 'false';
      });

      setTabList(sortedList);
    } else {
      newTabList.forEach((item, index) => {
        item.isLast = index === newTabList.length - 1 ? 'true' : 'false';
      });

      setTabList(newTabList);
    }
  };

  return (
    <>
      <TabStyled>
        <ResponsiveTabStyled></ResponsiveTabStyled>
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
    </>
  );
};
