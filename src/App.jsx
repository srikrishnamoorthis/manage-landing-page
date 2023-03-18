import { useState } from 'react';
import classnames from 'classnames';
import logo from './assets/logo.svg';
import illustrationIntro from './assets/illustration-intro.svg';
import MenuIcon from './assets/icon-hamburger.svg';

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="font-be-vietnam lg:max-w-[1024px] bg-light-gray mx-auto">
            <header className='mx-8 my-12 md:mx-16 md:mt-12 flex justify-between items-center'>
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
            </header>
            <section className='mx-8 my-12 md:mx-16 md:mt-12 md:flex flex-row-reverse gap-12 justify-between'>
                <div className='basis-0 flex-grow'>
                    <img src={illustrationIntro} alt="" />
                </div>
                <div className='basis-0 flex-grow sm:mt-8 md:block text-center md:text-left'>
                    <h1 className='text-5xl font-semibold text-dark-blue-600'>
                        Bring everyone together to build better products.
                    </h1>
                    <p className='text-grayish-blue mt-8 md:w-[65%]'>
                        Manage makes it easy for software teams to plan day to day tasks while keeping the larger team goals in view.
                    </p>
                    <button className='h-10 w-32 mt-8 bg-bright-red rounded-3xl text-white'>Get Started</button>
                </div>
            </section>

            <section className='mx-8 my-12 md:mx-16 md:mt-12 md:flex flex-wrap gap-12'>
                <div className='basis-0 flex-grow text-center md:text-left'>
                    <h2 className='text-4xl font-semibold text-dark-blue-600'>What's different about Manage?</h2>
                    <p className='text-grayish-blue mt-8 md:w-[65%]'>
                        Manage provides all the functionality your team needs, without the complexity. Our software is tailor made
                        for modern digital product teams.
                    </p>
                </div>
                <div className='basis-0 flex-grow'>
                    <li className='flex gap-4 mb-6 flex-grow'>
                        <div className='bg-bright-red text-white h-8 w-16 px-2 py-2 rounded-md'>01</div>
                        <div className=''>
                            <h3 className='mb-4 h-8 font-semibold'>Track company-wide progress</h3>
                            <p className='text-grayish-blue'>
                                See how your day-to-day task fit into wider vision. Go from trackin progress at the milestone
                                level all the way done to the smallest of details. Never lose sight of the bigger picture again.
                            </p>
                        </div>
                    </li>
                    <li className='flex gap-4 mb-6'>
                        <div className='bg-bright-red rounded-4xl text-white h-8 w-16 px-2 py-2 rounded-md'>02</div>
                        <div className=''>
                            <h3 className='mb-4 h-8 font-semibold'>Advanced built-in reports</h3>
                            <p className='text-grayish-blue'>
                                Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps
                                you build out the reports you nedd to keep key stakeholders informed.
                            </p>
                        </div>
                    </li>
                    <li className='flex gap-4 mb-6'>
                        <div className='bg-bright-red rounded-4xl text-white h-8 w-16 px-2 py-2 rounded-md'>03</div>
                        <div className=''>
                            <h3 className='mb-4 font-semibold'>Everything you need in one place</h3>
                            <p className='text-grayish-blue'>
                                Stop jumping from one service to another to communicate, store files, track tasks and share
                                documents. Manage offers an all-in-one team productivity solution.
                            </p>
                        </div>
                    </li>
                </div>
            </section>
            <section className='flex flex-col items-center'>
                <h2 className='text-center font-semibold text-dark-blue-600 text-4xl mb-8'>What they&apos;ve said</h2>
                <button className='h-10 w-32 text-white bg-bright-red rounded-3xl'>Get Started</button>
            </section>
            <section className='flex h-40 mt-32 bg-bright-red text-white items-center justify-between'>
                <div className='text-4xl md:px-32 md:py-12 font-semibold'>
                    Simplify how your team works today.
                </div>
                <button className='h-10 w-32 sm:mx-10 md:mx-16 md:my-12 text-bright-red bg-white rounded-3xl flex-shrink-0'>Get Started</button>
            </section>
            <footer>

            </footer>
        </div>
    );
}

export default App;
