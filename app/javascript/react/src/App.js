import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import MountainIndexContainer from './MountainIndexContainer';
import MountainShowReviewsContainer from './MountainShowReviewsContainer';

const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path="/" component={MountainIndexContainer} />
      <Route exact path="/mountains/:id" component={MountainShowReviewsContainer}/>
    </Router>
  )
}

export default App;
