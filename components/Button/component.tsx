import { FC } from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = (props) => {
  // STATE
  const { children, ...rest} = props;

  return (
    <button {...rest}>
      {children}
    </button>
  );
}

export default Button;