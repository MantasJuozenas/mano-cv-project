import { WrapperProps } from '../../types/types';

export const Wrapper = (props: WrapperProps) => {
  return <div>{props.children}</div>;
};
