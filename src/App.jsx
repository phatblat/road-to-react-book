'use strict'

import * as React from 'react'

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'DanAbramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
]

function App() {
  return (
    <div className='App'>
      <h1>My Hacker Stories</h1>

      <label htmlFor='search'>Search: </label>
      <input id='search' type='text' />

      <hr />

      <ul>
        {list.map(function (item, index) {
          return (
            <li key={index}>
              {/* only use an index as a last resort */}
              {/* and by the way: that's how you do comments in JSX */}
              {item.title}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
