import React from 'react';
import { render } from 'react-dom';
import useForm from '../../src/index';

const Form = () => {
  const options = {
    initialValues: {
      email: '',
      password1: '',
      password2: ''
    },
    validation: {
      email: (inputs) => {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        
        if (!inputs.email || inputs.email === '') {
          return 'email is required';
        }

        if (!emailRegex.test(inputs.email.toLowerCase())) {
          return 'invalid email';
        }
      },
      password1: (inputs) => {
        const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20})/

        if (!inputs.password1 || inputs.password1 === '') {
          return 'password is required';
        }

        if (!passwordRegex.test(inputs.password1)) {
          return 'password is too simple';
        }
      },
      password2: (inputs) => {
        if (!inputs.password2 || inputs.password2 === '') {
          return 'password is required';
        }

        if (inputs.password1 !== inputs.password2) {
          return 'password are differents';
        }
      }
    },
    callback: () => console.log('works!', inputs),
    debug: true
  }

  const { onSubmit, onChange, inputs, dirty, submitting, reset, errors, valid } = useForm('AdvanceForm', options)

  return (
    <div>
      <form onSubmit={onSubmit} noValidate>
        <h3>Advance Form Demo (<a href='https://github.com/amazingandyyy/use-form-react' target='_blank'>use-form-react</a>)</h3>
        <input
          type='email'
          name="email"
          value={inputs.email}
          placeholder="Email"
          onChange={onChange}
          />
        <div>{errors.email}</div>
        <input
          type='password'
          name="password1"
          value={inputs.password1}
          placeholder="Password"
          onChange={onChange}
          />
        <div>{errors.password1}</div>
        <input
          type='password'
          name="password2"
          value={inputs.password2}
          placeholder="Confirm password"
          onChange={onChange}
          />
          <div>{errors.password2}</div>
        <button disabled={!dirty || !valid || submitting} type="submit">Sign in</button>
      </form>
      <div>
        <button onClick={()=>reset()}>reset</button>
        <pre>{JSON.stringify(inputs,  null, 2)}</pre>
        <pre>{JSON.stringify(errors,  null, 2)}</pre>
        <pre>{JSON.stringify({ dirty, valid, submitting },  null, 2)}</pre>
      </div>
    </div>
  );
}

render(<Form />, document.getElementById('root'))
