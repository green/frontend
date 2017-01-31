// @flow
export const UPDATE_SERVICE_STATUS = 'UPDATE_SERVICE_STATUS'
export const POPULATE_SERVICES = 'POPULATE_SERVICES'
export const OVERWRITE_SERVICES = 'OVERWRITE_SERVICES'
export const UPDATE_SERVICE_SUBSCRIPTION = 'UPDATE_SERVICE_SUBSCRIPTION'
export const TOGGLE_ACTIVE_SERVICE = 'TOGGLE_ACTIVE_SERVICE'

export function updateServiceStatus (data: Object) {
  return {
    type: UPDATE_SERVICE_STATUS,
    data
  }
}

export function updateServiceSubscription (data: Object) {
  return {
    type: UPDATE_SERVICE_SUBSCRIPTION,
    data
  }
}

export function toggleActiveService (data: Object) {
  return {
    type: TOGGLE_ACTIVE_SERVICE,
    data
  }
}

export function populateServices (data: Array) {
  return {
    type: POPULATE_SERVICES,
    data
  }
}

export function overwriteServices (data: Array) {
  return {
    type: OVERWRITE_SERVICES,
    data
  }
}
