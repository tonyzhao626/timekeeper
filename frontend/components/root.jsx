import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import Loading from './loading/loading';
import TimerContainer from './timer/main_timer_container';
import ProjectsContainer from './project/main_projects_container';
import ProjectDetailContainer from './project/project_detail_container';
import TagsContainer from './tags/main_tags_container';
import HelpContainer from './help/main_help_container';

const Root = ({ store }) => {
  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App } />
        <Route path="/timer" component={ TimerContainer } onEnter={_ensureLoggedIn} />
        <Route path="/projects" component={ ProjectsContainer } onEnter={_ensureLoggedIn} />
        <Route path="/projects/:id" component= { ProjectDetailContainer } onEnter={_ensureLoggedIn} />
        <Route path="/tags" component={ TagsContainer } onEnter={_ensureLoggedIn} />
        <Route path="/help" component={ HelpContainer } onEnter={_ensureLoggedIn} />
        <Route path="/loading" component={ Loading } />
      </Router>
    </Provider>
  );
};

export default Root;
