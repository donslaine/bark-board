import { useState } from 'react'
import { Routes, Route } from 'react-router-dom' 
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage'
import GlobalPage from '../GlobalPage/GlobalPage'
import NavBar from '../../components/NavBar/NavBar'
import './App.css';

function App() {
  const [user, setUser] = useState(getUser())
  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/api/posts/new" element={<GlobalPage />} />
          </Routes>
        </>
        ) : (
        <AuthPage setUser={setUser} user={user} />
      )}
    </main>
  );
}

export default App;

