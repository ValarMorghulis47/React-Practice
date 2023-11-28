import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';

function App() {
  return (
    <>
    <Navbar title="ValarMorghulis" ab="About Us"/>
    <div className="container">
    <Form heading="Enter The Text To Analyze It"/>
    </div>
    </>
  );
}

export default App;
