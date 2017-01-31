// @flow
import React, { Component } from 'react'
import ServiceGrid from '../ServiceGrid/ServiceGrid'
import ServiceCard from '../ServiceCard/ServiceCard'
import SettingsLink from '../SettingsLink/SettingsLink'
import StatusDetail from '../StatusDetail/StatusDetail'

export default class Home extends Component {
  render () {
    const {
      services,
      activeService,
      showConfigureMessage,
      toggleActiveService
    } = this.props

    const servicesHtml = services.map(({ id, statusCode, lastUpdated, name, parent }) => (
      <ServiceCard
        key={id}
        id={id}
        isActive={activeService && id === activeService.id}
        statusCode={statusCode}
        lastUpdated={lastUpdated}
        parent={parent}
        name={name}
        toggleActiveService={toggleActiveService}
      />
    ))

    let messageHtml = ''

    if (showConfigureMessage) {
      messageHtml = (<div className='Home__message'>
        <h2>It looks like you are new here!</h2>
        <p>Use the settings screen (bottom right, buddy) to configure the services you wish to monitor.</p>
        <p>Wanna see how it will look when your services go belly up? Configure some services then go <i>View > Monkey Mode</i>.</p>
      </div>)
    }

    return (
      <div className='Home'>
        <div className={'Home__sidebar ' + (activeService && 'is-active')}>
          {activeService ? (
            <StatusDetail
              name={activeService.name}
              statusCode={activeService.statusCode}
              parent={activeService.parent}
              support={activeService.support}
            />
          ) : ('')}
        </div>

        {messageHtml}

        {activeService ? (
          <div className='Home__screen' onClick={() => { toggleActiveService() }} />
        ) : ('')}

        <ServiceGrid>
          {servicesHtml}
        </ServiceGrid>
        <SettingsLink to='/settings' />
      </div>
    )
  }
}
