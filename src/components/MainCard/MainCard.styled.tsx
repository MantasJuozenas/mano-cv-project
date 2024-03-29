import styled from 'styled-components';

export const MainCardStyled = styled.div`
  max-width: 1200px;
  width: 100%;
  min-height: 800px;
  box-shadow: 0 2px 8px rgb(40, 105, 241);
  border-radius: 10px;
  padding: 10px;
  z-index: 2;
  background-color: white;

  @media screen and (max-width: 800px) {
    box-shadow: none;
  }
`;
