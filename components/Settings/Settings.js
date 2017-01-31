import React, { Component, PropTypes } from 'react'
import bem from 'js-kit/dom/bem'
import SettingsLink from '../SettingsLink/SettingsLink'

class Settings extends Component {
  static propTypes = {
    services: PropTypes.array.isRequired,
    updateServiceSubscription: PropTypes.func.isRequired
  };

  constructor (props) {
    super(props)
    this.state = {
      filterText: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({filterText: event.target.value})
  }

  matchesFilter (str) {
    if (!this.state.filterText) return true
    const filterText = this.state.filterText
    return str.toLowerCase().indexOf(filterText.toLowerCase()) !== -1
  }

  render () {
    const c = bem('Settings')
    const {
      services,
      updateServiceSubscription
    } = this.props

    const servicesHtml = services.map((s, i) => (
      this.matchesFilter(s.name + s.id) ? (
        <div className={c('&__option')} key={i}>
          <label className={c('&__field')}>
            <span className={c('&__toggle')}>
              <input
                type='checkbox'
                checked={s.subscribed}
                onChange={(e) => {
                  updateServiceSubscription({ id: s.id, subscribed: e.target.checked })
                }}
              />
              <b />
            </span>
            <span className={c('&__optionTitle')}>{ s.parent }</span> — { s.name }
          </label>
        </div>
      ) : null
    ))

    return (
      <div className='Settings'>

        <div className='Settings__filterContainer'>
          <input
            className='Settings__filter'
            placeholder='Type to filter Services...'
            type='text'
            value={this.state.filterText}
            onChange={this.handleChange}
          />
        </div>

        <div className='Settings__options'>
          { servicesHtml }
        </div>

        <SettingsLink to='/' />
      </div>
    )
  }
}

export default Settings
