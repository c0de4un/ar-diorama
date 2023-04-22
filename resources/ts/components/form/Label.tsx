import React, { PropsWithChildren } from 'react';

type LabelProps = {
  text: string;
  className?: string;
  target?: string;
};

export function Label(props: PropsWithChildren<LabelProps>) {
  return (
    <label
      className={`block text-sm font-semibold text-gray-800 ${props.className || ''}`}
    >
      { props.text }
      { props.children }
    </label>
  );
}