// @flow
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Settings from '../components/Settings/Settings'
import * as ServiceActions from '../actions/services'

function mapStateToProps (state) {
  return {
    services: state.services.services
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(ServiceActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
