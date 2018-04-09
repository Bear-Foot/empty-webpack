import React from 'react'
import ReactDOM from 'react-dom'

import { something, App } from './test.js'
// Step 1

console.log('you made it !')

// Step 2


console.log(something({ stuff: 8 }))

ReactDOM.render(
  <App />,
  document.getElementById('container')
)