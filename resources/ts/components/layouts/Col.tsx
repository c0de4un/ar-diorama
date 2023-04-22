import React, { PropsWithChildren } from 'react';

type ColProps = {
  className?: string | Array<string>,
};

export function Col(props: PropsWithChildren<ColProps>) {
  return (
    <div
      className={`flex flex-col ${props.className || ''}`}
    >
      { props.children }
    </div>
  );
}
