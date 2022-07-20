import * as React from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

export function ResultField(props) {
  let label = '';
  if (props.option === 'area') {
    label = 'Area';
  } else if (props.option === 'circumference') {
    label = 'Circumference';
  } else if (props.option === 'diameter') {
    label = 'Diameter';
  } else {
    label = 'Select an option above';
  }
  return (
    <FormControl id="area" isReadOnly>
      <FormLabel>{label}</FormLabel>
      <Input
        placeholder={label}
        type={'text'}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
      />
    </FormControl>
  );
}
