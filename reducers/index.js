// @flow
import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import services from './services'

function enableBatching (reducer) {
  return function batchingReducer (state, action) {
    switch (action.type) {
      case 'BATCH_ACTIONS':
        return action.actions.reduce(reducer, state)
      default:
        return reducer(state, action)
    }
  }
}

const rootReducer = combineReducers({
  services: enableBatching(services),
  routing
})

export default rootReducer
