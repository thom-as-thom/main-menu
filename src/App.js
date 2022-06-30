import {BrowserRouter, Routes, Route, } from 'react-router-dom';

import './App.css';
import Admin from './components/admin/admin';
import Products from './components/admin/products/products';
import Navbar from './components/navBar/navbar';



function App() {
	return (
		<BrowserRouter>
		<Navbar />
		<Routes>
			<Route path='/admin' element={
			<Admin/>
			}>
			</Route>
				<Route path='/admin/productos' element={
					<Products/>
			}>
					
			</Route>
		</Routes>
		</BrowserRouter>
  );
}

export default App;
