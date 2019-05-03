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
          'email': '',
          'password1': '',
          'password2': ''
      },
      callback: () => console.log('it works'),
      debug: true
  }
  const {
    onSubmit, onChange, inputs, dirty, submitting, reset
  } = useForm('myAdvanceFormName', option)
  
  useEffect(() => {
    if(inputs.password1!==inputs.password2) console.log('password not matched')
  });
  return (
    <form onSubmit={onSubmit}>
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
      <button disabled={!dirty || error || submitting} type="submit">Sign up</button>
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

