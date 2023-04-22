import React, { PropsWithChildren } from 'react';

type RowProps = {
  className?: string | Array<string>,
};

export function Row(props: PropsWithChildren<RowProps>) {
  return (
    <div
      className={`flex flex-row ${props.className || ''}`}
    >
      { props.children }
    </div>
  );
}
