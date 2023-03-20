import { useState } from 'react';
import classnames from 'classnames';
import logo from './assets/logo.svg';
import menuIcon from './assets/icon-hamburger.svg';
import closeIcon from './assets/icon-close.svg';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const openMenu = () => setIsOpen(true);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className='px-8 my-12 md:mx-16 md:mt-16 md:mb-32 lg:max-w-[1280px] lg:mx-auto lg:px-16 relative md:static'>
            <nav className='flex justify-between items-center'>
                <img src={logo} />
                <img src={menuIcon} 
                    className={classnames('md:hidden', {
                        'hidden': isOpen,
                        'inline-block': !isOpen
                    })}
                    onClick={openMenu} 
                />
                <img src={closeIcon}
                    className={classnames('md:hidden', {
                        'hidden': !isOpen,
                        'inline-block': isOpen
                    })}
                    onClick={closeMenu}
                />
                <ul id='nav-menu'
                    className={classnames(` z-20 flex-col absolute inset-0 mt-16 mx-8 h-max bg-white gap-8 text-dark-blue-600 \
                    text-sm text-center md:relative md:flex md:flex-row md:bg-transparent md:mt-0 \
                    `, {
                        'hidden': !isOpen,
                        'flex py-8 rounded-md': isOpen
                    })}
                >
                    <li className='flex-shrink-0'><a href='#'>Pricing</a></li>
                    <li className='flex-shrink-0'><a href='#'>Product</a></li>
                    <li className='flex-shrink-0'><a href='#'>About us</a></li>
                    <li className='flex-shrink-0'><a href='#'>Careers</a></li>
                    <li className='flex-shrink-0'><a href='#'>Community</a></li>
                </ul>
                <button className='h-10 w-32 p-2 bg-bright-red rounded-3xl text-white hidden md:block flex-shrink-0'>
                    Get Started
                </button>
                <span className={classnames('md:hidden absolute cursor-default inset-0 top-[25px] h-[260vmax] bg-gradient-to-b from-transparent to-black', { 'hidden': !isOpen, 'block': isOpen })} />
            </nav>
        </header>
    )
}
