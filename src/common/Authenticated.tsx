import * as React from 'react'
import { RouteComponentProps, Redirect } from '@reach/router'

import { checkAuthStatus } from '../api/auth'

const Authenticated: React.FC<RouteComponentProps> = props => {
  return checkAuthStatus() ? (
    <>{props.children}</>
  ) : (
    <Redirect to="/login" noThrow={true} />
  )
}

export { Authenticated }
