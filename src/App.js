import logo from './logo.svg';
import './App.css';
import Home from './Components/Pages/Home/Home/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from './Components/Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}>
          </Route>
          <Route exact path='*' element={<NotFound />}>
          </Route>
        </Routes>
      </Router>
    </div >
  );
}

export default App;
