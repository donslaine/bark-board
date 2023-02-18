import { useState } from 'react'
import { Routes, Route } from 'react-router-dom' 
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage'
import GlobalPage from '../GlobalPage/GlobalPage'
import UpdatePost from '../../components/UpdatePost/UpdatePost'
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
            <Route path='/posts' element={<GlobalPage />} />
            <Route path='/update' element={<UpdatePost />} />
          </Routes>
        </>
        ) : (
        <AuthPage setUser={setUser} user={user} />
      )}
    </main>
  );
}

export default App;

