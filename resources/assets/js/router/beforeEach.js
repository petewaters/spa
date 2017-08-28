import store from '../vuex'
import localforage from 'localforage'

const beforeEach = ((to, from, next) => {
    store.dispatch('auth/tokenExists').then(() => {
        if (to.meta.guest) {
            next({ name: 'home '})
            return
        }

        next()
    }).catch(() => {
        if (to.meta.auth) {
            localforage.setItem('intended-route', to.name)
            next({ name: 'login' })
            return
        }

        next()
    })
})

export default beforeEach