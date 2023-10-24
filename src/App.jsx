'use strict'

import * as React from 'react'

const welcome = {
  greeting: 'Hey',
  title: 'React',
}

function getTitle(title) {
  return title
}

function App() {
  return (
    <div>
      <h1>Hello {getTitle('React')}</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  )
}

export default App
