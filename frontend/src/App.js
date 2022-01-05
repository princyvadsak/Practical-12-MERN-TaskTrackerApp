//import logo from './logo.svg';
import './App.css';
import AddTask from './components/AddTask';
import DisplayTask from './components/DisplayTask';
//import Footer from "./components/Footer";
//import About from "./components/About";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Nav from './components/Nav';



function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
      <div className="container">

        <Routes>
          <Route path="/" element={<AddTask />} />
          <Route path="/displayTask" element={<DisplayTask />} />
          <Route path="/deleteTask" element={<DisplayTask />} />

        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
