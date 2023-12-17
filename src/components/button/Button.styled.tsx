import styled from 'styled-components';

interface StyledButtonProps {
  primaryColor: boolean;
  size: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${(props) => (props.primaryColor ? 'red' : 'yellow')};
  padding: ${(props) => (props.size == 'large' ? '10px 15px' : '5px 10px')};
  font-size: ${(props) => (props.size == 'large' ? '20px' : '10px')};
  border: none;
  border-radius: 8px;
`;
