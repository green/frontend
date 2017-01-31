import React, {Component} from 'react'
import bem from 'js-kit/dom/bem'
import Svg from '../Svg/Svg.js'

export default class StatusDetail extends Component {
  render () {
    const {
      statusCode,
      name,
      parent, // which can be replaced with an svg logo if found
      support // array of links as strings, eg ['https://twitter.com/stripestatus', 'https://status.stripe.com/']
    } = this.props

    function logoFromURI (uri) {
      if (uri.indexOf('twitter.com') !== -1) {
        return 'twitter'
      } else {
        return 'globe'
      }
    }

    const c = bem('StatusDetail')

    let statusText = 'Unknown status'
    switch (statusCode) {
      case 1:
        statusText = 'Operating Normally'
        break
      case 0:
        statusText = 'Service is Unavailable'
        break
      case 2:
        statusText = 'Possible outage — a service that “' + name + '” relies on is unavailable'
        break
    }

    return (
      <div className={c('& &--' + statusCode + ' &--' + parent)}>
        <div className={c('&__header')}>
          {statusCode === 0 ? (
            <span className={c('&__bolt')}>
              {Svg('bolt')}
            </span>
          ) : null}
          <span className={c('&__logo')}>
            {Svg(parent)}
          </span>
        </div>
        <div className={c('&__subHeader')}>
          {statusText}
        </div>

        <div className={c('&__heading')}>Service</div>
        <h1 className={c('&__name')}>
          {name}
        </h1>

        {support && support.length ? (
          <div>
            <div className={c('&__heading')}>Further Information</div>
            {support.map((uri, i) => (
              <a key={i} className={c('&__support')} href={uri} target='_blank'>
                <span className={c('&__supportIcon')}>{Svg(logoFromURI(uri))}</span>
                <span className={c('&__supportUri')}>
                  {uri.split('http://').join('').split('https://').join('')}
                </span>
              </a>
            ))}
          </div>
        ) : ('')}
      </div>
    )
  }
}
