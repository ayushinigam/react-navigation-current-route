function getCurrentRouteName (navigationState) {
  if (!navigationState || !navigationState.routes) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  if (route.routes) {
    return getCurrentRouteName(route);
  }
  return route.routeName;
}

module.exports = getCurrentRouteName;
