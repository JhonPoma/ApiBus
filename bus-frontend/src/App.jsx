import { useState } from 'react'
import BusTable from './components/BusTable'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Sistema de busess</h1>
        <BusTable/>        
      </div>
    </>
  )
}

export default App
