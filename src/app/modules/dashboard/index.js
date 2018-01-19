import m from 'mithril';

import './dashboard.css';

export default {
  view() {
    return m('.dashboard', [
      m('h3.sub-title', 'Hello! this is the app dashboard example module.')
    ]);
  }
};