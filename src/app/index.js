import m from 'mithril';

import Dashboard from './modules/dashboard';

import './app.css';

export default {
  view() {
    return m('.content-area', m(Dashboard));
  }
};