import React from 'react'
import { Provider } from 'react-redux'
import { Router, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { persistStore } from 'redux-persist'
import { bindActionCreators } from 'redux'
import routes from './routes'
import configureStore from './store/configureStore'
import * as ServicesActions from './actions/services'
import './styles.less'

const store = configureStore({
  services: {
    services: [],
    activeService: null
  }
})

persistStore(store)

const history = syncHistoryWithStore(hashHistory, store)

const ServicesActionCreators = bindActionCreators(ServicesActions, store.dispatch)

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>
    )
  }
}

export default {
  App,
  ServicesActionCreators
}
