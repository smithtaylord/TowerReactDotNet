import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar.jsx'
import Modal from './components/Modal.jsx'
import CreateEvent from './components/CreateEvent.jsx'
import EditEvent from './components/EditEvent.jsx'
import Login from './components/Login.jsx'


export function App() {

  return (
    <div className="App bg-dark" id="app">
      <header>
      </header>
      <main>
        <Navbar />
        <Outlet />
      </main>
      <footer className='bg-dark bg-gradient'>
        <Login />
      </footer>
      <Modal target='createEventModal'>
        <CreateEvent />
      </Modal>
      <Modal target='editEventModal'>
        <EditEvent />
      </Modal>


    </div>
  )
}
