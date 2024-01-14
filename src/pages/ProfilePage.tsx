import { MainCard } from '../components/MainCard/MainCard';
import { AboutMeProps } from '../types/types';

export const ProfilePage = (props: AboutMeProps) => {
  return (
    <MainCard>
      <p>{props.text}</p>
    </MainCard>
  );
};
