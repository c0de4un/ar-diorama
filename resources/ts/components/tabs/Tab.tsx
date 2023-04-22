import React, { PropsWithChildren, ReactNode } from 'react';

type TabProps = {
  name: string;
  label?: string;
  enabled: boolean;
  selected: boolean;
  callback: Function;
  component?: ReactNode;
};

export function Tab(props: PropsWithChildren<TabProps>) {
  return (
    <div className={`tab tab-${props.name}`}>
      { props.component }
      {
        !props.component &&
        (
          <div>{ props.label || `Untitled #${props.name}` }</div>
        )
      }
    </div>
  );
}
