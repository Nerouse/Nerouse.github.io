import React, {useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';


import { Button } from './Button';
import  './Navbar.css';



function Navbar(){
const [click, setClick] = useState(false);
const [button, setButton] = useState(true);

const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);

const showButton = () => {
	if(window.innerWidth <= 960){
		setButton(false);
	} 
	else {
		setButton(true);
	}
};

//allows the button to be just render once
useEffect(() => {
	showButton()
}, []);

window.addEventListener('resize', showButton);


	return (
		<>
			<nav className='navbar'>
				<div className='navbar-container'>
					<Link to="/" className='navbar-logo' onClick ={closeMobileMenu}>
					Nelson Lim
					</Link>
						<div className='menu-icon' onClick={handleClick}>
							<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
						</div>

					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						
						<li className = 'nav-item'>
							<Link to='/' className='nav-links' onClick={closeMobileMenu}>
								Home
							</Link>
						</li>
					
						<li className = 'nav-item'>
							<Link to='/Projects' className='nav-links' onClick={closeMobileMenu}>
								Projects
							</Link>
						</li>

						<li className = 'nav-item'>
							<a class = "git" href="https://github.com/Nerouse" target="_blank" onClick={closeMobileMenu}>
								Github
							</a>
						</li>

						<li className = 'nav-item'>
							<Link to='/Resume' className='nav-links' onClick={closeMobileMenu}>
								Resume
							</Link>
						</li>

					</ul>

				</div>
			</nav>
		</>
	)
}

export default Navbar