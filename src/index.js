import '@riotjs/hot-reload'
import { component } from 'riot'
import App from './app.riot'
import registerGlobalComponents from './register-global-components'
import installGlobalModules from './install-global-modules'

// register
registerGlobalComponents()

// install
installGlobalModules()

// mount the root tag
component(App)(document.getElementById('root'))
