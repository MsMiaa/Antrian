import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import AmbilNomor from './pages/AmbilNomor'
import OperatorPanel from './pages/OperatorPanel'
import LayarAula from './pages/LayarAula'

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/" style={{ marginRight: 10 }}>Ambil Nomor</Link>
        <Link to="/operator" style={{ marginRight: 10 }}>Panel Operator</Link>
        <Link to="/aula">Layar Aula</Link>
      </nav>
      <Routes>
        <Route path="/" element={<AmbilNomor />} />
        <Route path="/operator" element={<OperatorPanel />} />
        <Route path="/aula" element={<LayarAula />} />
      </Routes>
    </div>
  )
}

export default App
