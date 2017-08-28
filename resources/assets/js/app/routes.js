import auth from './auth/routes'
import home from './home/routes'
import dashboard from './dashboard/routes'
import errors from './errors/routes'

export default [...auth, ...home, ...dashboard, ...errors]