import { Link, Outlet } from 'react-router-dom';
import Header from './components/Header';
import './css/Layout.css';
import { useState } from 'react';

const Layout = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<>
			<Header />

			<button onClick={toggleMenu}>Toggle</button>
			<nav id='main-nav' className={menuOpen ? '' : 'hide-small'}>
				<li><Link to='/'>Home</Link></li>
				<li><Link to='/about'>About</Link></li>
				<li><Link to='/pictures'>Pictures</Link></li>
			</nav>

			<Outlet />

			<p>This is my footer</p>
		</>
	);
};

export default Layout;