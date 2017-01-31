import React from 'react'
import { render } from 'react-dom'
import Green from '../'

const {
  App,
  ServicesActionCreators: {
    populateServices
  }
} = Green

render(
  <App />,
  document.body
)

setTimeout(() => {
  populateServices([
    {
      id: 'google-search',
      name: 'Search',
      parent: 'Google',
      statusCode: 1
    },
    {
      id: 'google-mail',
      name: 'Mail',
      parent: 'Google',
      statusCode: 2
    },
    {
      id: 'google-code',
      name: 'Code',
      parent: 'Google',
      statusCode: 0
    }
  ])
}, 1000)
