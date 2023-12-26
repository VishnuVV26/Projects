
import { Route, Router, Routes, UNSAFE_DataRouterStateContext } from 'react-router-dom';
import './App.css';
import Home from './Components/Content/Home';
import Filter from './Components/Content/InitialPage';
import Header from './Components//Header/Header';
import About from './Components/Content/About';
import Contact from './Components/Content/Contact';
import Login from './Components/Content/Login';
import Footer from './Components/Footer/Footer';
import Signin from './Components/Content/Signin';
import InitialPage from './Components/Content/InitialPage';
import Data from './Data';
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<InitialPage />} />
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        {/* <Route path='login' element={<Login/>}/> */}
        <Route path='signin' element={<Signin />} />
      </Routes>
      <><br /></>
      <Footer />
      {/* <Data/> */}
      {/* <Header/>
      <Filter/>
    <Demo/>   */}
    </div>
  );
}

export default App;
