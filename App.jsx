import React from 'react'
import Index from './src'
import { AuthState } from './src/context'

const App = () => {
  return (
    <AuthState>
      <Index />
    </AuthState>
  )
}

export default App
