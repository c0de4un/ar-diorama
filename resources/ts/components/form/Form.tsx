import React, { PropsWithChildren } from 'react';

type FormProps = {
  className: string | undefined
};

export function Form(props: PropsWithChildren<FormProps>) {
  return (
    <form
      className={`form ${props.className}`}
    >
      {props.children}
    </form>
  );
}
