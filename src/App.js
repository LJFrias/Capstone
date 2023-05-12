import {useState} from 'react'
import './App.css';
import Title from './components/Title';
import Signin from './components/SIgnin';
import Signup from './components/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const [token, setToken] = useState("")
  const [user, setUser] = useState(null)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin setToken={setToken} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/title" element={<Title token={token} user={user} setUser={setUser}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
