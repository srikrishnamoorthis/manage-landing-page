import facebookIcon from './assets/icon-facebook.svg';
import instagramIcon from './assets/icon-instagram.svg';
import pinterestIcon from './assets/icon-pinterest.svg';
import twitterIcon from './assets/icon-twitter.svg';
import youtubeIcon from './assets/icon-youtube.svg';
import logo from './assets/logo.svg';

export default function Footer() {
    return (
        <footer className='py-20 md:py-16 bg-dark-blue-700 h-auto'>
            <div className='px-8 md:px-12 flex flex-col-reverse gap-12 items-center md:flex-row md:flex-wrap md:items-start md:justify-between md:gap-8 lg:max-w-[1280px] lg:mx-auto'>
                <div className='flex flex-col gap-12 md:flex-col-reverse'>
                    <ul className='flex gap-8 md:gap-4 text-lg'>
                        <li className='h-8 w-8 md:h-6 md:w-6'>
                            <img src={facebookIcon} alt="" />
                        </li>
                        <li className='h-8 w-8 md:h-6 md:w-6'>
                            <img src={youtubeIcon} alt="" />
                        </li>
                        <li className='h-8 w-8 md:h-6 md:w-6'>
                            <img src={twitterIcon} alt="" />
                        </li>
                        <li className='h-8 w-8 md:h-6 md:w-6'>
                            <img src={pinterestIcon} alt="" />
                        </li>
                        <li className='h-8 w-8 md:h-6 md:w-6'>
                            <img src={instagramIcon} alt="" />
                        </li>
                    </ul>
                    <img src={logo} className='text-white' />
                </div>
                <div className='flex justify-evenly text-white gap-24 md:gap-12'>
                    <ul className='flex-shrink-0'>
                        <li className='mb-4'>Home</li>
                        <li className='mb-4'>Pricing</li>
                        <li className='mb-4'>Products</li>
                        <li className='mb-4'>About Us</li>
                    </ul>
                    <ul className='flex-shrink-0'>
                        <li className='mb-4'>Careers</li>
                        <li className='mb-4'>Community</li>
                        <li className='mb-4'>Privacy Policy</li>
                    </ul>
                </div>
                <div className='flex gap-4 items-center mx-8 md:mx-0 w-[350px] md:mr-16 md:w-auto flex-shrink'>
                    <input type="text" className='outline-none rounded-3xl p-4 h-12 flex-grow'
                        placeholder='Updates in your inbox...'

                    />
                    <button className='bg-bright-red text-white rounded-3xl p-4 h-12 w-16 cursor-pointer'>Go</button>
                </div>
            </div>
        </footer>
    )
};
