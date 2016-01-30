/**
 * Copyright © 2015 Mathieu Darse <hello@mathieudarse.fr>
 * This may be freely distributed under the MIT license.
 */

export default function linkedState(component, key) {
  return new ReactLink(
    component.state[key],
    createMemoizedStateKeySetter(component, key)
  );
}

function ReactLink(value, requestChange) {
  this.value = value;
  this.requestChange = requestChange;
}

// Following taken from https://github.com/facebook/react/blob/0.14-stable/src/renderers/shared/reconciler/ReactStateSetters.js

/**
 * Returns a single-argument callback that can be used to update a single
 * key in the component's state.
 *
 * Note: this is memoized function, which makes it inexpensive to call.
 *
 * @param {ReactCompositeComponent} component
 * @param {string} key The key in the state that you should update.
 * @return {function} callback of 1 argument which calls setState() with
 *                    the provided keyName and callback argument.
 */
function createMemoizedStateKeySetter(component, key) {
  // Memoize the setters.
  var cache = component.__keySetters || (component.__keySetters = {});
  return cache[key] || (cache[key] = createStateKeySetter(component, key));
}

function createStateKeySetter(component, key) {
  // Partial state is allocated outside of the function closure so it can be
  // reused with every call, avoiding memory allocation when this function
  // is called.
  var partialState = {};
  return function stateKeySetter(value) {
    partialState[key] = value;
    component.setState(partialState);
  };
}
