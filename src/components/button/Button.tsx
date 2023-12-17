import { StyledButton } from './Button.styled';

type Props = {
  text: string;
  primaryColor: boolean;
  size: string;
};

export const Button = (props: Props) => {
  return (
    <StyledButton size={props.size} primaryColor={props.primaryColor}>
      {props.text}
    </StyledButton>
  );
};
