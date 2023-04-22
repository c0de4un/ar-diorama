import React, { PropsWithChildren } from 'react';
import './card.css';

type CardProps = {
  size?: string,
  className?: string
};

export function Card(props: PropsWithChildren<CardProps>) {
  return (
    <div
      className={`card ${props.size || 'sm'} flex flex-col w-full m-auto bg-white rounded-md shadow-md lg:max-w-xl ${props.className}`}
    >
      {props.children}
    </div>
  );
}
