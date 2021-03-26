import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Users from './components/Users'
import User from './components/User'

const App = () => {
  return (
    <div className='text-center'>
      <Router>
        <div className='d-flex justify-content-around'>
          <Link to="/">
            Usuarios
          </Link>
        </div>

        <Switch>
          <Route exact path="/">
              <Users />
          </Route>
          <Route path="/users/:id">
              <User />
          </Route>
        </Switch>

      </Router>
    </div>
  )
}

export default App
