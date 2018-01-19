import m from 'mithril';

import Wrapper from '../core/view/wrapper';

import RootRoute from '../route';

const reduceRoutes = (routes) => {
  const reducer = (obj, item) => {
    obj[item[0]] = {
      render() {
        return m(Wrapper, m(item[1]));
      }
    };
  
    return obj;
  };

  return routes.reduce(reducer, {});
};

export default reduceRoutes([
  RootRoute,
]);