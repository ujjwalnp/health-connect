import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// for testing purposes only
import TestingComponent from './pages/TestingComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TestingComponent />
    </>
  )
}

export default App
