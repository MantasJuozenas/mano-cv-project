import { ReactNode } from 'react';

export type TabType = {
  name: string;
  isLast?: string;
  isActive: string;
  link: string;
};

export type TabListProps = {
  data: TabType[];
};

export type WrapperProps = {
  children: ReactNode;
};

export type AboutMeProps = {
  text: string;
};
