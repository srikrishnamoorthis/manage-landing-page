import { useState } from 'react';
import classnames from 'classnames';
import logo from './assets/logo.svg';
import MenuIcon from './assets/icon-hamburger.svg';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    
    return (
        <header className='mx-8 my-12 md:mx-16 md:mt-12'>
            <nav className='flex justify-between items-center'>
                <img src={logo} />
                <img src={MenuIcon} className='md:hidden' onClick={toggleMenu} />
                <ul id='nav-menu'
                    className={classnames(`flex-col absolute inset-0 mt-32 mx-8 p-16 h-max bg-white gap-8 text-dark-blue-600 \
                    text-sm text-center md:relative md:flex md:flex-row md:bg-transparent md:mt-0`, {
                        'hidden': !isOpen,
                        'flex': isOpen
                    })}
                >
                    <li className='flex-shrink-0'><a href='#'>Pricing</a></li>
                    <li className='flex-shrink-0'><a href='#'>Product</a></li>
                    <li className='flex-shrink-0'><a href='#'>About us</a></li>
                    <li className='flex-shrink-0'><a href='#'>Careers</a></li>
                    <li className='flex-shrink-0'><a href='#'>Community</a></li>
                </ul>
                <button className='h-10 w-32 p-2 bg-bright-red rounded-3xl text-white hidden md:block'>
                    Get Started
                </button>
            </nav>
        </header>
    )
}
