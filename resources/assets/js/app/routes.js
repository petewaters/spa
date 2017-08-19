import auth from './auth/routes'
import home from './home/routes'
import dashboard from './dashboard/routes'

export default [...auth, ...home, ...dashboard]