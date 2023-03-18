import React from 'react';

export default function CallToAction(props) {
    return (
        <section className='flex h-40 mt-32 bg-bright-red text-white items-center justify-between'>
            <div className='text-4xl md:px-32 md:py-12 font-semibold'>
                Simplify how your team works today.
            </div>
            <button className='h-10 w-32 sm:mx-10 md:mx-16 md:my-12 text-bright-red bg-white rounded-3xl flex-shrink-0'>Get Started</button>
        </section>
    )
};
