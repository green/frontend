import React, { Component } from 'react'
import { Link } from 'react-router'
import Svg from '../Svg/Svg'

export default class Home extends Component {
  render () {
    const { to } = this.props

    return (
      <Link className='SettingsLink' to={to}>
        <i>{Svg('cog')}</i> Settings
      </Link>
    )
  }
}
