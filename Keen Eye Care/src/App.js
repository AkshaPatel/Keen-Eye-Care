import './App.css';
import NavBar from "./components/NavBar";
import eye_logo from './components/images/eye_logo.png'


function App() {
  return (
    <>
      <div className='head'>
        <img src={eye_logo} alt="eye logo"></img>
        <h1> Keen Eye Care </h1>
      </div>
      <NavBar/>
    </>
  );
}

export default App;
