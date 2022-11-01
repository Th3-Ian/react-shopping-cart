import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Shopping from './components/Shopping';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <div className='App'>
          <Nav />
          <Route path='/' component={<Home />} />
          <Route path='/shop' component={<Shopping />} />
        </div>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
