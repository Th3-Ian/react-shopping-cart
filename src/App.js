import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Shopping from './components/Shopping';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/shop' element={<Shopping />} />
				</Routes>
			</BrowserRouter>
    </>
  );
}

export default App;
