import React, { PropsWithChildren, useEffect } from 'react';

import { FormDescription } from '../FormDescription';
import { InputDescription } from '../InputDescription';
import { EInputTypes } from './EInputTypes';

import { Form } from '../Form';
import { InputGroup } from '../InputGroup';
import { Input } from '../Input';
import { Label } from '../Label';

type FormBuilderProps = {
  className?: string;
  formDescription: FormDescription;
  validation?: boolean;
  disabled?: boolean;
};

export function FormBuilder(props: PropsWithChildren<FormBuilderProps>) {
  useEffect(
    () => {
    },
    []
  );

  const handleChange = (event: Event, field: InputDescription) => {
    event.preventDefault();
    
    const element: HTMLInputElement|null = event.target as HTMLInputElement|null;
    if (!element) {
      return;
    }

    props.formDescription.setValue(field.name, element.value);
  };

  return (
    <Form
      className={`form-builder form w-full ${props.className}`}
    >
      {
        props.formDescription.fields.map((field, fieldIdx) => {
          return (
            <InputGroup
              key={field.name}
              className={`${fieldIdx ? 'mt-3' : ''}`}
            >
              { /** Label */ }
              {
                field.hasLabel() &&
                  <Label
                    text={field.getLabel()}
                  />
              }
              { /** string */ }
              {
                field.getType() === EInputTypes.string &&
                (
                  <Input
                    type={ 'text' }
                    name={ field.name }
                    value={ props.formDescription.getValue(field.name) }
                    readonly={ props.disabled }
                    onChange={ (event: Event) => {
                      handleChange(event, field)
                    } }
                  />
                )
              }
              { /** password */ }
              {
                field.getType() === EInputTypes.password &&
                (
                  <Input
                    type={ 'password' }
                    name={ field.name }
                    value={ props.formDescription.getValue(field.name) }
                    onChange={ (event: Event) => {
                      handleChange(event, field)
                    } }
                  />
                )
              }
            </InputGroup>
          );
        })
      }
    </Form>
  );
}