import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import useForm from '../../src/index';

const Form = () => {
  const [error, setError] = useState('')
  const options = {
    initialValues: {
      'email': '',
      'password1': '',
      'password2': ''
    },
    callback: () => console.log('works!', inputs),
    debug: true
  }
  useEffect(() => {
    setError('');
    if(inputs.password1&&inputs.password2&&(inputs.password1!==inputs.password2)) setError('password not matched');
  });
  const { onSubmit, onChange, inputs, dirty, submitting, reset } = useForm('AdvanceForm', options)
  return (
    <div>
      {error&&<div>error: {error}</div>}
      <form onSubmit={onSubmit}>
        <h3>Advance Form Demo (<a href='https://github.com/amazingandyyy/use-form-react' target='_blank'>use-form-react</a>)</h3>
        <input
          type='email'
          name="email"
          value={inputs.email}
          placeholder="Email"
          required
          onChange={onChange}
          />
        <input
          type='password'
          name="password1"
          value={inputs.password1}
          placeholder="Password"
          onChange={onChange}
          required
          />
        <input
          type='password'
          name="password2"
          value={inputs.password2}
          placeholder="Confirm password"
          onChange={onChange}
          required
          />
        <button disabled={!dirty || error || submitting} type="submit">Sign in</button>
      </form>
      <div>
        <button onClick={()=>reset()}>reset</button>
          <pre>{JSON.stringify(inputs,  null, 2)}</pre>
        <pre>{JSON.stringify({ dirty, submitting },  null, 2)}</pre>
      </div>
    </div>
  );
}

render(<Form />, document.getElementById('root'))
