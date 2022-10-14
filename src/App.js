import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'

import Person from './components/Person'

import Date from './components/Date'

import Experiment from './components/Experiment'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/date" component={Date} />
    <Route exact path="/person" component={Person} />

    <Route exact path="/experiment" component={Experiment} />
  </Switch>
)

export default App
