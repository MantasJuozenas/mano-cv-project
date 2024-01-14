// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TabType, WrapperProps } from '../../types/types';
import { TabList } from '../Tabs/TabList';
import { MainCardStyled } from './MainCard.styled';

const tabNameList: TabType[] = [
  { name: 'Profile', isActive: 'true', link: '/' },
  { name: 'Education', isActive: 'false', link: '/education' },
  { name: 'Skills', isActive: 'false', link: '/skills' },
  {
    name: 'Experience',
    isLast: 'true',
    isActive: 'false',
    link: '/experience',
  },
];

export const MainCard = ({ children }: WrapperProps) => {
  return (
    <>
      <MainCardStyled>
        <TabList data={tabNameList} />
        {children}
      </MainCardStyled>
    </>
  );
};
