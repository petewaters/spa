import localforage from 'localforage'
import { isEmpty } from 'lodash'

export const setToken = (state, token) => {
    if (isEmpty(token)) {
        localforage.removeItem('auth-token', token)
        return
    }

    localforage.setItem('auth-token', token)
}

export const setAuthenticated = (state, status) => {
    state.user.authenticated = status
}

export const setUserData = (state, data) => {
    state.user.data = data
}