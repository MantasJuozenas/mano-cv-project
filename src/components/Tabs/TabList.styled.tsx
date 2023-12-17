import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface IndependentTabProps {
  last?: string;
  active?: string;
}

export const TabStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  max-height: 100px;
  height: 100%;
`;

export const IndependentTabStyled = styled(Link)<IndependentTabProps>`
  border-right: ${(props) => (props.last === 'true' ? 'none' : '1px solid rgb(40, 105, 241)')};
  border-bottom: ${(props) => (props.active === 'true' ? 'none' : '1px solid rgb(40, 105, 241)')};
  font-size: 50px;
  padding: 20px 10px;
  flex: 1;
  text-align: center;
  transition: 0.3s all;
  &:hover {
    background-color: rgba(40, 104, 241, 0.571);
    color: white;
    /* border-bottom-right-radius: 10px; */
    border-top-right-radius: 10px;
  }
`;
