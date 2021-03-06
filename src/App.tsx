import * as React from 'react'

import { Link, RouteComponentProps, Router } from '@reach/router'

import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { News } from './pages/News'
import { Profile } from './pages/Profile'
import { checkAuthStatus, logout } from './api/auth'
import { Authenticated } from './common/Authenticated'

import './App.css'

const App: React.FC<RouteComponentProps> = props => {
  return (
    <div className="container">
      <h1>TypeScript</h1>
      <nav>
        <Link to="/">Домой</Link> <Link to="news">Новости</Link>{' '}
        {!checkAuthStatus() ? <Link to="/login">Login</Link> : null}
        <Link to="/profile">Профиль</Link>
        {checkAuthStatus() ? <button onClick={logout}>Выйти</button> : null}
      </nav>

      {props.children}
    </div>
  )
}

const RoutedApp = () => {
  return (
    <Router>
      <App path="/">
        <Home path="/" />
        <Login path="/login" />
        <News path="/news" />
        <Authenticated path="/profile">
          <Profile path="/" />
        </Authenticated>
      </App>
    </Router>
  )
}

export { RoutedApp }
