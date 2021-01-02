import Routes from './routes/index'
import Header from './components/header/Header';
import { useState, useEffect } from 'react'
import auth from './components/firebase'
import { UserProvider } from './firebase/UserProvider'

function App() {

  return (
    <UserProvider>
      <div >
        <Header />
        <Routes />
      </div>
    </UserProvider>
  );
}

export default App;

