import { isEmpty } from 'lodash'
import { setHttpToken } from '../../../helpers'
import localforage from 'localforage'

export const register = ({ dispatch }, { payload, context }) => {
    return axios.post('/api/register', payload).then((response) => {
        dispatch('setToken', response.data.meta.token).then(() => {
            dispatch('getUser')
        })
    }).catch((error) => {
        context.errors = error.response.data.errors
    })
}

export const login = ({ dispatch }, { payload, context }) => {
    return axios.post('/api/login', payload).then((response) => {
        dispatch('setToken', response.data.meta.token).then(() => {
            dispatch('getUser')
        })
    }).catch((error) => {
        context.errors = error.response.data.errors
    })
}

export const getUser = ({ commit }) => {
    return axios.get('/api/user').then((response) => {
        commit('setAuthenticated', true)
        commit('setUserData', response.data.data)
    })
}

export const setToken = ({ commit, dispatch }, token) => {
    if (isEmpty(token)) {
        return dispatch('tokenExists').then((token) => {
            setHttpToken(token)
        })
    }

    commit('setToken', token)
    setHttpToken(token)
}

export const tokenExists = ({ commit, dispatch }, token) => {
    return localforage.getItem('auth-token').then((token) => {
        if (isEmpty(token)) {
            Promise.reject('NO_AUTH_TOKEN_IN_LOCAL_STORAGE')
        }

        return Promise.resolve(token)
    })
}