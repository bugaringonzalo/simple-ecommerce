import logo from './logo.svg';
import {Route, Routes} from 'react-router-dom'
import './App.css';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
    </div>
    
  );
}

export default App;
