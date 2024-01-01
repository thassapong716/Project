import logo from './logo.svg';
import './App.css';
import MyCards from './components/MyCards';
import MyNavBar from './components/MyNavBar';
import Faqs from './components/Faqs';
//import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <MyNavBar/>
      <h1 className=''>Welcome to my cards</h1>
      <MyCards/>
      {/* <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/acads" element={<Acads/>} />
        <Route path="/Faqs" element={<Faqs/>} />
      </Routes> */}
    </div>
  );
}

export default App;
