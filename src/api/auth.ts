import { navigate } from '@reach/router'
import { IUserIdentify } from '../models/user'

interface IAuthResponse {
  status: number
  data?: any
  errorText?: string
}

const checkCreditials =  (data: IUserIdentify) : boolean => {
  if (data.username === 'Admin' && data.password === '12345') {
    return true
  } else {
    return false
  }
}

export const authenticate = (data: IUserIdentify): Promise<IAuthResponse> => {
  const promise = new Promise<IAuthResponse>((resolve, reject) => {
    if (!checkCreditials(data)) {
      reject({
        status: 500,
        errorText: 'incorrect login or password'
      })
    }
    window.localStorage.setItem('ts-auth', 'true')
    resolve({
      status: 200,
      data: 'ok'
    })
  })
  return promise
}

export const checkAuthStatus = (): boolean => {
  if (localStorage.getItem('ts-auth')) {
    return true
  } else {
    return false
  }
}

export const logout = (): void => {
  localStorage.removeItem('ts-auth')
  navigate('/')
}