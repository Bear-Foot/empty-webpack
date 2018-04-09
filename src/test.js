import React from 'react'

export const something = ({ stuff } = {}) => {
  const test = { lol: 'hey' }
  
  return {
    ...test,
    stuff,
  }
}

export const App = () => <div> App </div>