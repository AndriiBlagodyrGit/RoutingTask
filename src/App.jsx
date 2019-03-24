import React from 'react';
import { Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from 'store';
import { PostsListPage, PostPage, UserPageContainer } from './pages';

const App = () => (
  <Provider store={store}>
    <React.Fragment>
      <Route path="/" exact component={PostsListPage} />
      <Route path="/users/:userId" component={UserPageContainer} />
      <Route path="/posts/:postId" component={PostPage} />
    </React.Fragment>
  </Provider>
);

App.displayName = 'App';

export default App;
