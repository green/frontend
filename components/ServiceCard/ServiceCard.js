import React, {Component} from 'react'
import bem from 'js-kit/dom/bem'
import Svg from '../Svg/Svg.js'

export default class ServiceCard extends Component {
  render () {
    const {
      id,
      statusCode,
      name,
      parent, // which can be replaced with an svg logo if found
      isActive,
      lastUpdated,
      toggleActiveService
    } = this.props

    const c = bem('ServiceCard')

    return (
      <a
        onClick={() => {
          toggleActiveService({ id: id })
        }
        }
        className={c('& &--' + statusCode + ' &--' + parent + ' ' + (isActive ? 'is-active' : ''))}
      >
        <div className={c('&__bd')}>
          {statusCode === 0 ? (
            <span className={c('&__bolt')}>
              {Svg('bolt')}
            </span>
          ) : null}
          <span className={c('&__lamp')} />
          <span className={c('&__logo')}>
            {Svg(parent)}
          </span>
          <span className={c('&__name')}>{name}</span>
          <span className={c('&__warn')}>
            {statusCode === 2 ? (
              Svg('warn')
            ) : null}
          </span>
          <span className={c('&__updated')}>{lastUpdated}</span>
        </div>
      </a>
    )
  }
}
