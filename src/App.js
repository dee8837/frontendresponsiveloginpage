
import './App.css';
import Loginpages from './components/Loginpages';
import Registration from './pages/Registration';
import { Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';


function App() {
  return (
    <>

    {/* <Loginpages/> */}
    <Routes>
     <Route path='/' element={<Loginpages/>}></Route>
     <Route path='/Registration' element={<Registration />} />
     <Route path='/WelcomePage' element={<WelcomePage />} />

     </Routes>
    
    </>
    
  );
}

export default App;
