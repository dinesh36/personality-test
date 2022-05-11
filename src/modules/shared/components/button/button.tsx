import React from 'react';
import { Button as AntdButton, ButtonProps as AntButtonProps } from 'antd';
import styles from './button.module.scss';

interface ButtonProps extends AntButtonProps{
  children: React.ReactNode
  className?: string
}

function Button({ children, className, ...props }: ButtonProps) {
  return (
  // eslint-disable-next-line react/jsx-props-no-spreading
    <AntdButton {...props} className={`${styles.button} ${className}`}>
      {children}
    </AntdButton>
  );
}

Button.defaultProps = {
  className: '',
};

export default Button;
