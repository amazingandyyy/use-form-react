import React from 'react';
import { render } from 'react-dom';
import useForm from '../../src/index';

const Form = () => {
  const { onSubmit, onChange, inputs } = useForm('sampleForm', {
      initialValues: { 'name': '' },
      callback: (inputs) => console.log(inputs)
    }
  )
  return (
    <div>
      <div>Hello {inputs.name}</div>
      <form onSubmit={onSubmit}>
        <input name="name" value={inputs.name} onChange={onChange} />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}

render(<Form />, document.getElementById('root'))
