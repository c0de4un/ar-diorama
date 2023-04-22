import React, { PropsWithChildren } from 'react';

type CardHeaderProps = {
};

export function CardHeader(props: PropsWithChildren<CardHeaderProps>) {
  return (
    <div
      className={'card-header p-6'}
    >
      {props.children}
    </div>
  );
}
