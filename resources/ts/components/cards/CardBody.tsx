import React, { PropsWithChildren } from 'react';

type CardBodyProps = {
};

export function CardBody(props: PropsWithChildren<CardBodyProps>) {
  return (
    <div
      className={'card-body p-6 flex'}
    >
      {props.children}
    </div>
  );
}
