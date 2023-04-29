import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar.jsx'
import Modal from './components/Modal.jsx'
import CreateEvent from './components/CreateEvent.jsx'


export function App() {

  return (
    <div className="App bg-dark" id="app">
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <Modal>
        <CreateEvent />
      </Modal>


    </div>
  )
}
