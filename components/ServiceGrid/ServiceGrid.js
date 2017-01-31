import React, {Component} from 'react'
import bem from 'js-kit/dom/bem'

export default class ServiceGrid extends Component {
  render () {
    const {
      children
    } = this.props

    const c = bem('ServiceGrid')

    let items = []
    children.forEach((x, i) => {
      items.push((
        <div key={i} className={c('&__item')}>
          { x }
        </div>
      ))
      items.push(' ')
    })

    return (
      <div className={c('&')}>
        <div className={c('&__bd')}>
          {items}
        </div>
      </div>
    )
  }
}
