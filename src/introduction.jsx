import illustrationIntro from './assets/illustration-intro.svg';
import tabletPattern from './assets/bg-tablet-pattern.svg';

export default function Introduction() {
    return (
        <>
            <section className='mx-8 mt-12 md:mx-16 md:mt-12 md:flex flex-row-reverse gap-12 justify-between lg:max-w-[1280px] lg:mx-auto lg:px-16'>
                <div className='basis-0 flex-grow z-[1]'>
                    <img src={illustrationIntro} alt="" className='z-[1] relative mx-auto'/>
                </div>
                <div className='basis-0 flex-grow mt-8 md:mt-0 md:block text-center md:text-left z-[1]'>
                    <h1 className='text-5xl font-semibold text-dark-blue-600 leading-tight'>
                        Bring everyone together to build better products.
                    </h1>
                    <p className='text-base text-grayish-blue mt-8 md:w-[65%]'>
                        Manage makes it easy for software teams to plan day to day tasks while keeping the larger team goals in view.
                    </p>
                    <button className='mt-8 px-8 py-4 text-xs text-white bg-bright-red rounded-[100vw] shadow-[0_5px_20px_#F25F3A]'>Get Started</button>
                </div>
            </section>

            <section className='mx-8 mb-16 mt-24 md:mx-16 md:mt-16 md:flex flex-wrap gap-12 lg:max-w-[1280px] lg:mx-auto lg:px-16 leading-normal'>
                <div className='basis-0 flex-grow text-center md:text-left'>
                    <h2 className='text-4xl font-semibold text-dark-blue-600'>What's different about Manage?</h2>
                    <p className='text-base text-grayish-blue mt-8 md:w-[65%]'>
                        Manage provides all the functionality your team needs, without the complexity. Our software is tailor made
                        for modern digital product teams.
                    </p>
                </div>
                <div className='basis-0 flex-grow mt-12 md:mt-0'>
                    <li className='mb-12 grid grid-cols-[min-content_1fr] gap-4 items-center relative'>
                    <div className='h-[40px] bg-bright-red col-start-1 col-end-2 row-start-1 row-end-2 z-[1] text-white rounded-3xl flex items-center px-6'>01</div>
                        <div className='h-[40px] bg-pale-red col-start-1 col-end-3 row-start-1 row-end-2 z-[0] rounded-3xl md:hidden' />
                        <h3 className='h-[40px] text-dark-blue-600 font-semibold col-start-2 col-end-3 row-start-1 row-end-2 z-[1] flex items-center'>Track company-wide progress</h3>
                        <p className='text-base text-grayish-blue col-start-1 col-end-3 md:col-start-2'>
                            See how your day-to-day task fit into wider vision. Go from trackin progress at the milestone
                            level all the way done to the smallest of details. Never lose sight of the bigger picture again.
                        </p>
                    </li>
                    <li className='mb-12 grid grid-cols-[min-content_1fr] gap-4 items-center'>
                        <div className='h-[40px] bg-bright-red col-start-1 col-end-2 row-start-1 row-end-2 z-[1] text-white rounded-3xl flex items-center px-6'>02</div>
                        <div className='h-[40px] bg-pale-red col-start-1 col-end-3 row-start-1 row-end-2 z-[0] rounded-3xl md:hidden' />
                        <h3 className='h-[40px] text-dark-blue-600 font-semibold col-start-2 col-end-3 row-start-1 row-end-2 z-[1] flex items-center'>Advanced built-in reports</h3>
                        <p className='text-base text-grayish-blue col-start-1 col-end-3 md:col-start-2'>
                            Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps
                            you build out the reports you nedd to keep key stakeholders informed.
                        </p>
                    </li>
                    <li className='mb-12 grid grid-cols-[min-content_1fr] gap-4 items-center'>
                    <div className='h-[40px] bg-bright-red col-start-1 col-end-2 row-start-1 row-end-2 z-[1] text-white rounded-3xl flex items-center px-6'>02</div>
                        <div className='h-[40px] bg-pale-red col-start-1 col-end-3 row-start-1 row-end-2 z-[0] rounded-3xl md:hidden' />
                        <h3 className='h-[40px] text-dark-blue-600 font-semibold col-start-2 col-end-3 row-start-1 row-end-2 z-[1] flex items-center'>Everything you need in one place</h3>
                        <p className='text-base text-grayish-blue col-start-1 col-end-3 md:col-start-2'>
                            Stop jumping from one service to another to communicate, store files, track tasks and share
                            documents. Manage offers an all-in-one team productivity solution.
                        </p>
                    </li>
                </div>
            </section>
        </>
    );
}