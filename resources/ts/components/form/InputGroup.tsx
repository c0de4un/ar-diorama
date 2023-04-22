import React, { PropsWithChildren } from 'react';

type InputGroupProps = {
  className?: string
};

export function InputGroup(props: PropsWithChildren<InputGroupProps>) {
  return (
    <div className={`input-group flex flex-col justify-center ${props.className || ''}`}>
      { props.children }
    </div>
  );
}
