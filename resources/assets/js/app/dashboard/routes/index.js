import { Dashboard } from '../components'

export default [
    {
        path: '/dashboard',
        component: Dashboard,
        name: 'dashboard',
        meta: {
            auth: true
        }
    }
]