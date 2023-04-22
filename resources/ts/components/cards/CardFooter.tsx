import React, { PropsWithChildren } from 'react';

type CardFooterProps = {
};

export function CardFooter(props: PropsWithChildren<CardFooterProps>) {
  return (
    <div
      className={'card-footer p-6'}
    >
      {props.children}
    </div>
  );
}
