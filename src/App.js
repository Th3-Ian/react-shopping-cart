import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Shopping from './components/Shopping';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <>
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/shop' element={<Shopping />} />
				</Routes>
				<Footer />
			</BrowserRouter>
    </>
  );
}

export default App;
