import React from 'react';

type InputProps = {
  type?: string;
  placeholder?: string;
  name: string;
  value?: any;
  onChange: Function;
  readonly?: boolean;
};

export function Input(props: InputProps) {
  return (
    <input
      type={ props.type || 'text' }
      className={ `block w-full px-4 py-2 mt-2 text-blue-500 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40`}
      placeholder={ props.placeholder || '' }
      autoComplete={ (props.type !== 'password') ? 'off' : '' }
      readOnly={ props.readonly }
      value={ props.value || undefined }
      onChange={(event) => {
        props.onChange(event)
      }}
    />
  );
}