import * as React from 'react';
import { PropsWithChildren } from 'react';

type AuthLayoutProps = {
};

export function AuthLayout(props: PropsWithChildren<AuthLayoutProps>) {
  return (
    <div className="main flex w-full h-screen justify-center">
      { props.children }
    </div>
  );
}
