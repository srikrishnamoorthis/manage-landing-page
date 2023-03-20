import illustrationIntro from './assets/illustration-intro.svg';

export default function Introduction() {
    return (
        <>
            <section className='mx-8 my-12 md:mx-16 md:mt-12 md:flex flex-row-reverse gap-12 justify-between lg:max-w-[1280px] lg:mx-auto lg:px-16'>
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

            <section className='mx-8 my-12 md:mx-16 md:mt-12 md:flex flex-wrap gap-12 lg:max-w-[1280px] lg:mx-auto lg:px-16'>
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
        </>
    );
}