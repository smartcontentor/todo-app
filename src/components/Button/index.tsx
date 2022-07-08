import React, { useCallback } from 'react';

import { StyledButton } from '@components/Button/styles';
import { Theme } from '@emotion/react';

export type ButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> & {
  icon?: string;
  text?: string;
} & (
    | {
        onClick: (returnValue: any) => void;
        returnValue?: any;
        type?: undefined;
      }
    | {
        onClick?: undefined;
        returnValue?: never;
        type: 'submit';
      }
  ) &
  (
    | {
        color: keyof Theme['colors'];
        colorIcon?: undefined;
      }
    | {
        color?: undefined;
        colorIcon: keyof Theme['colors'];
      }
  );

function ButtonComponent({
  text,
  type,
  returnValue,
  icon,
  color,
  colorIcon,
  'aria-label': ariaLabel,
  onClick,
}: ButtonProps): React.ReactElement {
  const handleClick = useCallback(() => {
    onClick?.(returnValue);
  }, [onClick, returnValue]);

  return (
    <StyledButton
      aria-label={ariaLabel}
      color={color}
      colorIcon={colorIcon}
      type={type}
      onClick={handleClick}
    >
      {icon ? <i className={icon}></i> : text}
    </StyledButton>
  );
}

export default ButtonComponent;
