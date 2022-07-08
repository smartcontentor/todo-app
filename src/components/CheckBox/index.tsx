import React, { useCallback } from 'react';

import { StyledTodoText, StyledTodoCheckbox } from '@components/CheckBox/styles';

export type CheckBoxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  id: string;
  checked: boolean;
  labelText: string;
} & (
    | {
        onChange?: (returnValue: any) => void;
        returnValue?: any;
      }
    | {
        onChange?: undefined;
        returnValue: never;
      }
  );

function CheckBoxComponent({
  id,
  labelText,
  checked,
  returnValue,
  onChange,
}: CheckBoxProps): React.ReactElement {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(() => {
    onChange?.(returnValue);
  }, [returnValue, onChange]);

  return (
    <>
      <StyledTodoCheckbox id={id} type="checkbox" checked={checked} onChange={handleChange} />
      <StyledTodoText htmlFor={id} checked={checked}>
        {labelText}
      </StyledTodoText>
    </>
  );
}

export default CheckBoxComponent;
