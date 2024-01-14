import styled from 'styled-components';

export const StyledWrapper = styled.div`
  background-color: #fff;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100svh;
  padding: 20px;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50vh;
    background-color: rgba(40, 104, 241, 0.1);
    z-index: 1;
  }
`;
