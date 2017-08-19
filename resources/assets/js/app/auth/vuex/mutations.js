import localforage from 'localforage'

export const setToken = (state, token) => {
    localforage.setItem('auth-token', token)
}