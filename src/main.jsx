'use strict'

import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const title = 'React'

createRoot(document.getElementById('root')).render(
  <h1>Hello {title}</h1>
)
