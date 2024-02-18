import './App.css';
import Header from './Components/Header';
import { Route, Router, Routes, UNSAFE_DataRouterStateContext } from 'react-router-dom';
import Register from './Components/Register';
import Home from './Components/Home';
import Login from './Components/Login';
function App() {
  return (
    <div style={{maxHeight:"100vh"}}>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
