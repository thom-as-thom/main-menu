import {BrowserRouter, Routes, Route, } from 'react-router-dom';

import './App.css';
import Admin from './components/admin/admin';
import Categories from './components/admin/categories/categories';
import Products from './components/admin/products/products';
import Menu from './components/menu/menu';
import Navbar from './components/navBar/navbar';



function App() {
	return (
		<BrowserRouter>
		<Navbar />
		<Routes>
			<Route path='/' element={
			<Menu/>
			}/>
			<Route path='/admin' element={
			<Admin/>
			}>
			</Route>
			<Route path='/admin/productos' element={
				<Products/>
			}>
			</Route>
			<Route path='/admin/categories' element={
				<Categories />
			}>
			</Route>
		</Routes>
		</BrowserRouter>
  );
}

export default App;
