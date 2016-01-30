react-link
==========

An utility for [React](https://facebook.github.io/react/) that provides two-way data binding.
In short, this is bringing functionnality from `LinkedStateMixin` to ES6 style components.

## Two-way binding?
Yep, there lots of cases where the one-way data flow enforced by React is not sufficient. For example, when creating forms. React already ships with a [`ReactLink` addon](https://facebook.github.io/react/docs/two-way-binding-helpers.html), but it only works with old-school component style. This library brings the gap between `ReactLink` and modern (ES6) components, without monkey patching or other mixin stuff.

**Note**: There are plans to deprecate ReactLink ([#2302](https://github.com/facebook/react/issues/2302)) so this might be deprecated eventually.

## Installing
```bash
npm install --save react-link
```

## Usage
```es6
import { Component } from 'react';
import linkedState from 'react-link';

export default SignInForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    return (
      <form>
        <input type="text" valueLink={linkedState(this, 'email')}/>
        <input type="password" valueLink={linkedState(this, 'password')}/>
      </form>
    );
  }
}
```

=================

- Author: [Mathieu Darse](http://mathieudarse.fr)
- License: [MIT](http://opensource.org/licenses/MIT)
