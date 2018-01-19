import m from 'mithril';

import routes from './app/core/routes';

import './index.css';

m.route.prefix("#");

m.route(document.body, '/', routes);