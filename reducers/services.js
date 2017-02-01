import moment from 'moment'
import {
  UPDATE_SERVICE_STATUS,
  POPULATE_SERVICES,
  OVERWRITE_SERVICES,
  UPDATE_SERVICE_SUBSCRIPTION,
  TOGGLE_ACTIVE_SERVICE
} from '../actions/services'

export default function services (state = {}, action) {
  switch (action.type) {
    case UPDATE_SERVICE_STATUS:
      action.data.lastUpdated = moment().format('MMMM Do h:mm:ssa')
      {
        if (state.services.find(({ id }) => id === action.data.id)) {
          const services = state.services.map((service) => {
            if (service.id === action.data.id) {
              return {
                ...service,
                ...action.data
              }
            }
            return service
          })
          return Object.assign({}, state, {services})
        }
        return Object.assign({}, state, {services: [...state.services].concat([action.data])})
      }
    case POPULATE_SERVICES:
      {
        const services = action.data.map((newService) => {
          let updatedService = newService
          state.services.forEach((existingService) => {
            if (existingService.id === newService.id) {
              updatedService = existingService
            }
          })
          if (!updatedService.subscribed) {
            updatedService.subscribed = false
          }
          return updatedService
        })
        return Object.assign({}, state, {services})
      }
    case OVERWRITE_SERVICES:
      {
        const services = action.data.map((newService) => {
          let updatedService = newService
          state.services.forEach((existingService) => {
            if (existingService.id === newService.id) {
              updatedService = existingService
              updatedService.statusCode = newService.statusCode
            }
          })
          if (!updatedService.subscribed) {
            updatedService.subscribed = false
          }
          return updatedService
        })
        return Object.assign({}, state, {services})
      }
    case UPDATE_SERVICE_SUBSCRIPTION:
      {
        const services = state.services.map((service) => {
          if (service.id === action.data.id) {
            service.subscribed = action.data.subscribed
          }
          return service
        })
        return Object.assign({}, state, {services})
      }
    case TOGGLE_ACTIVE_SERVICE:
      {
        if (state.activeService) {
          return Object.assign({}, state, {activeService: null})
        };
        let activeService = null
        state.services.forEach((x) => {
          if (x.id === action.data.id) {
            activeService = x
          }
        })
        return Object.assign({}, state, {activeService})
      }
    default:
      return state
  }
}
