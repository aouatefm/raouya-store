import Routes from './routes/index'
import Header from './components/header/Header';
import { useState, useEffect } from 'react'
import auth from './components/firebase'
function App() {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  return (
    <div >
      <Header />
      <Routes />
    </div>
  );
}

export default App;

