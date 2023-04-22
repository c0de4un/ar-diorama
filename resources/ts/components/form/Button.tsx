import React, { PropsWithChildren } from 'react';

type ButtonProps = {
  className?: string,
  size?: string,
  type?: string,
  onClick?: Function,
  disabled?: boolean,
};

export function Button(props: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={`btn ${props.size || 'sm'} ${props.type || 'default'} ${props.className || ''} p2 w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500`}
      disabled={ props.disabled }
      onClick={() => {
        props.onClick && props.onClick()
      }}
    >
      { props.children }
    </button>
  )
}