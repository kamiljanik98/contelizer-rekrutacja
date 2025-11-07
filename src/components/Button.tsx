import React, { FC } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({
  onClick,
  children,
  className,
  ...props
}) => {
  return (
    <button {...props} onClick={onClick} className={twMerge(className)}>
      {children}
    </button>
  );
};

export default Button;
