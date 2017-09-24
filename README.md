# react-navigation-current-route

<i>Inspired by react-navigation  [guide](https://github.com/react-community/react-navigation/blob/bbab489a6acfd9ef5185f2c0bcc9d1420a647d78/docs/guides/Screen-Tracking.md). Published for the ease of usage.</i>

Get the current route name for an application which is using [react-navigation](https://github.com/react-community/react-navigation) <br>

<strong>Installation</strong>:
```javascript
npm install react-navigation-current-route --save
```

<strong>Usage</strong>:<br>
<br> Pass the <strong>
* Get the navigation state</strong>, as in redux store -> `navigationState`
* Pass `navigationState` to the method exported from <strong>react-navigation-current-route</strong>
* The method returns the current route name :sunglasses:

```javascript
/* Get current route in a container */

import {connect} from 'react-redux';
import result from 'lodash/result';
import getCurrentRouteName from 'react-navigation-current-route';
...
// Pass the current navigation state object
const currentRoute = getCurrentRouteName(this.props.navigationState)

...
// Get the current navigation state from the redux store
export const mapStateToProps = (state) => ({
  navigationState: result(state, 'nav', {}),
});

export default connect(mapStateToProps, null)(/* component-name*/);
```

```javascript
/* Get current route in a middleware like saga */

import {call,select} from 'redux-saga/effects';
import result from 'lodash/result';
import getCurrentRouteName from 'react-navigation-current-route';

// Get the current navigation state from the redux store
export const getNavigationState = (state) => result(state, 'nav', null);

export function* someSaga () {
    const navigationState = yield select(getNavigationState);
    // Pass the current navigation state object
    const currentRoute = yield call(getCurrentRouteName, navigationState);
    // currentRoute would then have the current route name  
}
```
<strong>References</strong>:
* [react-navigation](https://github.com/react-community/react-navigation)
