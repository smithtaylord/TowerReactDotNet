import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar.jsx'
import Modal from './components/Modal.jsx'
import CreateEvent from './components/CreateEvent.jsx'
import EditAccount from './components/EditAccount.jsx'
import Login from './components/Login.jsx'


export function App() {

  return (
    <div className="App bg-dark" id="app">
      <header>
      </header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xxl-10 col-lg-9">
            <main>
              <Navbar />
              <Outlet />
            </main>
          </div>
          <div className="d-none d-lg-block col-xxl-2 col-lg-3 position-fixed top-0 end-0">
            <footer className='bg-dark bg-gradient'>
              <Login />
            </footer>
          </div>
        </div>
      </div>

      <Modal target='createEventModal'>
        <CreateEvent />
      </Modal>
      <Modal target='editAccountModal'>
        <EditAccount />
      </Modal>


    </div>
  )
}
