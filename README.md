<h1 align="center">
⚡ useForm
</h1>
<p align="center">
Form hook made blazing fast and easy.
</p>

<p align="center">
    <a href="https://circleci.com/gh/amazingandyyy/use-form-react">
      <img src="https://circleci.com/gh/amazingandyyy/use-form-react.svg?style=svg" />
    </a>
    <a href="https://github.com/amazingandyyy/use-form-react/blob/master/LICENSE">
      <img src="https://img.shields.io/badge/License-MIT-green.svg" />
    </a>
    <a href="https://github.com/amazingandyyy/use-form/pulls">
        <img src="https://camo.githubusercontent.com/d4e0f63e9613ee474a7dfdc23c240b9795712c96/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5052732d77656c636f6d652d627269676874677265656e2e737667" />
    </a>
</p>

> The most unopinionated form hook.

## Installation

```shell
npm i --save use-form-react
# or
yarn add use-form-react
```

## Have a good to use form in 10 seconds

![demo](https://media.giphy.com/media/jkYpOoNMkZAk8y9u8F/giphy.gif)

## Usage

### Basic Usage

check [basic example](https://github.com/amazingandyyy/use-form-react/blob/master/examples/basic/index.js)

```jsx
import useForm from 'use-form-react'

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
```

### Advance Usage

check [advance example](https://github.com/amazingandyyy/use-form-react/blob/master/examples/advance/index.js)

```jsx
import React, { useEffect } from 'react';
import useForm from 'use-form-react'

const SignUp = () => {
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
    callback: () => console.log('works!', inputs)
  }

  const { onSubmit, onChange, inputs, dirty, submitting, reset, errors, valid } = useForm('AdvanceForm', options)

  return (
    <form onSubmit={onSubmit} noValidate>
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
      <button disabled={!dirty || !valid || submitting} type="submit">Sign up</button>
    </form>
  );
}
```

## To Do

- [ ] better test case
- [ ] debounce the error
- [ ] built-in validation


## License

MIT

