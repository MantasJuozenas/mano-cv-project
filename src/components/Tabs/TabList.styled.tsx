import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface IndependentTabProps {
  last?: string;
  active?: string;
}

export const ResponsiveTabStyled = styled.div`
  width: 76%;
  height: 100%;
  overflow: hidden;
  transition: width 0.5s ease;
  background-color: white;
  position: absolute;
  right: 0;
  display: none;
  transition: 0.3s all;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const TabStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-height: 100px;
  height: 100%;
  position: relative;
  &:hover ${ResponsiveTabStyled} {
    display: none;
  }
`;

export const IndependentTabStyled = styled(Link)<IndependentTabProps>`
  border-right: ${(props) => (props.last === 'true' ? 'none' : '1px solid rgb(40, 105, 241)')};
  border-bottom: ${(props) => (props.active === 'true' ? 'none' : '1px solid rgb(40, 105, 241)')};
  font-size: 50px;
  padding: 20px 10px;
  flex: 1;
  text-align: center;
  transition: 0.3s all;
  width: 100%;
  &:hover {
    background-color: rgba(40, 104, 241, 0.571);
    color: white;
    border-top-right-radius: 10px;
  }

  @media screen and (max-width: 1000px) {
    font-size: 30px;
  }
  @media screen and (max-width: 768px) {
    display: inline-block;
  }

  @media screen and (max-width: 425px) {
    font-size: 18px;
    padding: 20px 5px;
  }
`;
