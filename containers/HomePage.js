// @flow
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Home from '../components/Home/Home'
import * as ServiceActions from '../actions/services'

function mapStateToProps (state) {
  const services = state.services.services.filter((s) => s.subscribed)
  return {
    services,
    activeService: state.services.activeService,
    showConfigureMessage: services.length === 0
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(ServiceActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
