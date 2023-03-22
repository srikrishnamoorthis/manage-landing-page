import avatarAli from './assets/avatar-ali.png';
import avatarAnisha from './assets/avatar-anisha.png';
import avatarRichard from './assets/avatar-richard.png';
import avatarShanai from './assets/avatar-shanai.png';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Testimonials() {
    return (
        <section className='mt-20'>
            <h2 className='text-center font-semibold text-dark-blue-600 text-4xl mb-8'>What they&apos;ve said</h2>
            <Slider />
            <div className='flex mt-12 md:mt-12'>
                <button className='px-8 py-4 text-xs text-white bg-bright-red rounded-[100vw] mx-auto shadow-[0_5px_20px_#F25F3A]'>Get Started</button>
            </div>
        </section>
    )
}

function Slider() {
    return (
        <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                }
            }}
            className='flex mx-8 md:mx-0 mt-16'>
            <SwiperSlide className='h-auto'>
                <li className="text-grayish-blue mt-8 h-full">
                    <div className='bg-gray-100 p-8 text-center h-full flex flex-col items-center flex-grow flex-shrink-0 rounded-md'>
                        <img src={avatarAnisha} className='h-20 w-20 rounded-full -mt-16' />
                        <div className='font-semibold text-dark-blue-600 pt-6'>Anisha Li</div>
                        <p className='pt-6'>
                            "Manage has supercharged our team's workflow. The ability to maintain visiblity on larger milestones at all times keeps everyone motivated"
                        </p>
                    </div>
                </li>
            </SwiperSlide>
            <SwiperSlide className='h-auto'>
                <li className="text-grayish-blue mt-8 h-full">
                    <div className='bg-gray-100 p-8 text-center h-full flex flex-col items-center flex-grow flex-shrink-0 rounded-md'>
                        <img src={avatarAli} className='h-20 w-20 rounded-full -mt-16' />
                        <div className='font-semibold text-dark-blue-600 pt-6'>Ali Bravo</div>
                        <p className='pt-6'>
                            "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and
                            everyone is much more focused.""
                        </p>
                    </div>
                </li>
            </SwiperSlide>
            <SwiperSlide className='h-auto'>
                <li className="text-grayish-blue mt-8 h-full">
                    <div className='bg-gray-100 p-8 text-center h-full flex flex-col items-center flex-grow flex-shrink-0 rounded-md'>
                        <img src={avatarRichard} className='h-20 w-20 rounded-full -mt-16' />
                        <div className='font-semibold text-dark-blue-600 pt-6'>Richard Watts</div>
                        <p className='pt-6'>
                            "Manage allows us to provide structure and process. It keeps us organized and focused. I can't stop recommending them to everyone I talk to"
                        </p>
                    </div>
                </li>
            </SwiperSlide>
            <SwiperSlide className='h-auto'>
                <li className="text-grayish-blue mt-8 h-full">
                    <div className='bg-gray-100 p-8 text-center h-full flex flex-col items-center flex-grow flex-shrink-0 rounded-md'>
                        <img src={avatarShanai} className='h-20 w-20 rounded-full -mt-16' />
                        <div className='font-semibold text-dark-blue-600 pt-6'>Shanai Gough</div>
                        <p className='pt-6'>
                            "Their software allows us to track, manage and colloborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive."
                        </p>
                    </div>
                </li>
            </SwiperSlide>
        </Swiper>
    );
}