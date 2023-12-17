// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TabType } from '../../types/types';
import { TabList } from '../Tabs/TabList';
import { MainCardStyled } from './MainCard.styled';

const tabNameList: TabType[] = [
  { name: 'About me', isActive: 'true', link: '/aboutme' },
  { name: 'Profile', isActive: 'false', link: '/' },
  { name: 'Education', isActive: 'false', link: '/education' },
  { name: 'Experience', isLast: 'true', isActive: 'false', link: '/experience' },
];

export const MainCard = () => {
  return (
    <>
      <MainCardStyled>
        <TabList data={tabNameList} />
      </MainCardStyled>
    </>
  );
};
