<h1 align="center">useForm</h1>
<p align="center">React hook for making form super fast.</p>
<p align="center">
  <a href="https://github.com/amazingandyyy/use-form/pulls">
    <img src="https://camo.githubusercontent.com/d4e0f63e9613ee474a7dfdc23c240b9795712c96/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5052732d77656c636f6d652d627269676874677265656e2e737667" />
  </a>
  <a href="https://circleci.com/gh/amazingandyyy/react-use-form">
    <img src="https://circleci.com/gh/amazingandyyy/react-use-form.svg?style=svg" />
  </a>
</p>

## Installation

```shell
npm i --save react-use-form
```

![demo](https://media.giphy.com/media/jkYpOoNMkZAk8y9u8F/giphy.gif)

## Usage

### Basic Usage

check [basic example](https://github.com/amazingandyyy/react-use-form/blob/master/examples/basic/index.js)

```jsx
import useFetch from 'react-use-form'

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

check [advance example](https://github.com/amazingandyyy/react-use-form/blob/master/examples/advance/index.js)

```jsx
import useFetch from 'react-use-form'

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
  } = useForm('signInForm', option)
  
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
      <button disabled={!dirty || error || submitting} type="submit">Sign in</button>
    </form>
  );
}
```