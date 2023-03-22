import React from 'react';

export default function CallToAction(props) {
    return (
        <section className='mt-16 md:mt-32 bg-bright-red text-white'>
            <div className='flex flex-col px-8 md:px-12 py-20 gap-12 items-center md:flex-row lg:max-w-[1280px] lg:mx-auto'>
                <div className='basis-0 flex-grow text-4xl font-semibold text-center md:text-left'>
                    Simplify how your team works today.
                </div>
                <div className='basis-0 flex-grow flex'>
                    <button className='ml-auto sm:mr-10 md:mr-16 text-bright-red bg-white flex-shrink-0 px-8 py-4 rounded-[100vw] shadow-[0_5px_10px_#fff]'>Get Started</button>
                </div>
            </div>
        </section>
    )
};
