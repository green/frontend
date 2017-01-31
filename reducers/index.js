// @flow
import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import services from './services'

const rootReducer = combineReducers({
  services,
  routing
})

export default rootReducer
