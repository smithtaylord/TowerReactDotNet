import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar.jsx';
import Modal from './components/Modal.jsx';
import CreateEvent from './components/CreateEvent.jsx';
import EditAccount from './components/EditAccount.jsx';
import Login from './components/Login.jsx';
import Tour from 'reactour';
import { AppState } from './AppState.js';
import { observer } from 'mobx-react';

function App() {
  // const [showTour, setShowTour] = useState(true);
  const tourSteps = [
    {
      selector: '#log-in',
      content: 'Welcome to Tower! Begin by creating an account and logging in. You can use any email address for this process, even a fictitious one like example@example.com'
    },
    {
      content: 'You need to log in before you can see the rest of the tour :) ',
      style: {
        backgroundColor: 'black',
        color: 'white',
        border: 'none',
        fontSize: '25px'

      },
      action: () =>
        console.log('WOAH LOOK OVER HERE')
    }
  ];

  return (
    <div className="App bg-dark" id="app">
      <header></header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xxl-10 col-lg-9">
            <main>
              <Navbar />
              <Outlet />
            </main>
          </div>
          <div className="d-none d-lg-block col-xxl-2 col-lg-3 position-fixed top-0 end-0 bg-dark bg-gradient">
            <footer id="log-in">
              <Login />
            </footer>
          </div>
        </div>
      </div>

      {AppState.showTour && (
        <Tour
          isOpen={AppState.showTour}
          steps={tourSteps}
          onRequestClose={() => (AppState.showTour = false)}
        />
      )}

      <Modal target='createEventModal'>
        <CreateEvent />
      </Modal>
      <Modal target='editAccountModal'>
        <EditAccount />
      </Modal>
    </div>
  );
}
export default observer(App)