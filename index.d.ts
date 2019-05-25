declare module 'use-form-react' {
  import React from 'react';
  export type ValidationFunc<Fields> = (fields: Fields) => string | undefined;

  export interface UseFormConfig<Fields extends Record<string, any>> {
    initialValues?: Partial<Fields>;
    validation?: Partial<Record<keyof Fields, ValidationFunc<Fields>>>;
    debug?: boolean;
    callback?: (inputs: Fields)=> void;
  }

  export interface UseFormState<Fields> {
    onSubmit: (event: React.SyntheticEvent<HTMLFormElement>) => void,
    onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void,
    inputs: Fields,
    submitting: boolean,
    dirty: boolean,
    reset: () => void,
    setInputs: (fields: Fields) => void,
    errors: Record<keyof Fields, string>,
    valid: boolean,
  }

  const useForm: <Fields = any>(name: string, config: UseFormConfig<Fields>) => UseFormState<Fields>;

  export default useForm;
}
