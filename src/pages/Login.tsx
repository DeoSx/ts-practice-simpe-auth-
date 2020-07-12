import * as React from 'react'
import { RouteComponentProps, navigate } from '@reach/router'

import { IUserIdentify } from '../models/user'
import { authenticate } from '../api/auth'

const Login: React.FC<RouteComponentProps> = () => {
  const [user, setField] = React.useState<IUserIdentify>({
    username: '',
    password: '',
  })
  const [notifications, setNotifications] = React.useState<string>('')

  const onInputChange = (field: string) => (
    e: React.SyntheticEvent<HTMLInputElement>
  ): void => {
    setField({
      ...user,
      [field]: e.currentTarget.value,
    })
    setNotifications('')
  }

  const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    authenticate(user)
      .then(() => {
        navigate('/profile')
      })
      .catch(err => {
        if (err.errorText) {
          setNotifications(err.errorText)
        } else {
          // tslint:disable-next-line: no-console
          console.warn('Some problem with request')
        }
      })
  }
  return (
    <>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        {notifications ? <p>{notifications}</p> : null}
        <input type="text" onChange={onInputChange('username')} />
        <input type="password" onChange={onInputChange('password')} />
        <button>Отправить</button>
      </form>
    </>
  )
}

export { Login }
