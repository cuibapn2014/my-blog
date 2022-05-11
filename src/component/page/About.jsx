import React from 'react';
import Header from "../common/Header";
import Footer from '../common/Footer';
import imgMe from '../../assets/image/me.jpg';
import { AiOutlineHeart } from 'react-icons/ai'
import { AiOutlineProject } from 'react-icons/ai'
import { BiDetail } from 'react-icons/bi'
import { BiBulb } from 'react-icons/bi'
import { FaBirthdayCake } from 'react-icons/fa'
import { MdLocationPin } from 'react-icons/md'
import { MdOutlineSmartphone } from 'react-icons/md'
import { HiMail } from 'react-icons/hi'


const Home = () => {
    return (
        <>
            <Header />
            <section className='container max-w-screen-lg mx-auto my-5'>
                <h2 className='text-3xl mx-auto text-center font-thin __latest my-2'>About me</h2>
                <div className='p-5 flex lg:flex-row flex-col items-center lg:items-start'>
                    <div className='lg:w-2/4 w-full'>
                        <div className='__card flex flex-col'>
                            <img src={imgMe} alt="" className='h-48 w-48 mx-auto object-cover object-top rounded-full border-4 border-gray-900 p-1' />
                            <h2 className='w-full p-4 text-3xl text-center font-thin'>Nguyen Manh Tuan</h2>
                            <p className='w-full px-4 text-lg'><FaBirthdayCake className='float-left mt-1 mr-2' /> 27-05-2001</p>
                            <p className='w-full px-4 text-lg'><MdLocationPin className='float-left mt-1 mr-2' /> Tan Phu District, Ho Chi Minh City</p>
                            <p className='w-full px-4 text-lg'><MdOutlineSmartphone className='float-left mt-1 mr-2' /> 0388 794 915</p>
                            <p className='w-full px-4 text-lg'><HiMail className='float-left mt-1 mr-2' /> nmtworks.7250@gmail.com</p>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='__box-details flex flex-col'>
                            <h2 className='w-full p-4 text-3xl font-thin'>Description <BiDetail className='float-left mt-1 mr-2' /></h2>
                            <p className='w-full px-4 text-lg'>Third Year IT Student in Gia Dinh University. My goal is to be fullstack developer</p>
                            <h2 className='w-full p-4 text-3xl font-thin'>Skills <BiBulb className='float-left mt-1 mr-2' /></h2>
                            <p className='w-full px-4 text-lg'>PHP, Java, Javascript, HTML, CSS, Bootstrap, Tailwindcss, Spring Boot, Laravel, ReactJS, REST API, Sass</p>
                            <h2 className='w-full p-4 text-3xl font-thin'>Project <AiOutlineProject className='float-left mt-1 mr-2' /></h2>
                            <ul className='w-full px-4 text-lg'>
                                <li className='mb-2'>
                                    <p>Website Selling Computer</p>
                                    <p className='w-100 text-base'>- Link: local</p>
                                    <p className='w-100 text-base'>- Source:
                                        <a href="https://github.com/cuibapn2014/WebPrograming" className='text-blue-600 mx-2' target="_blank" rel="noopener noreferrer">https://github.com/cuibapn2014/WebPrograming</a>
                                    </p>
                                    <p className='w-100 text-base'>- Java, Spring Boot, Javascript, CSS, ReactJS, REST API, Html, JWT Token</p>
                                </li>
                                <li className='mb-2'>
                                    <p>Clothing Mobile Application</p>
                                    <p className='w-100 text-base'>- Link: local</p>
                                    <p className='w-100 text-base'>- Source:
                                        <a href="https://github.com/cuibapn2014/tatshop-android-app" className='text-blue-600 mx-2' target="_blank" rel="noopener noreferrer">https://github.com/cuibapn2014/tatshop-android-app</a>
                                    </p>
                                    <p className='w-100 text-base'>- Java, REST API, XML</p>
                                </li>
                                <li className='mb-2'>
                                    <p>Website Clothes Online</p>
                                    <p className='w-100 text-base'>- Link:
                                        <a href="https://tatshop.tech" className='text-blue-600 mx-2' target="_blank" rel="noopener noreferrer">https://tatshop.tech/</a></p>
                                    <p className='w-100 text-base'>- Source:
                                        <a href="https://github.com/cuibapn2014/tatshop" className='text-blue-600 mx-2' target="_blank" rel="noopener noreferrer">https://github.com/cuibapn2014/tatshop</a>
                                    </p>
                                    <p className='w-100 text-base'>- PHP, Laravel, Javascript, CSS, Jquery, Ajax, Html</p>
                                </li>
                            </ul>
                            <h2 className='w-full p-4 text-3xl font-thin'>Favorite <AiOutlineHeart className='float-left mt-1 mr-2' /></h2>
                            <p className='w-full px-4 text-lg'>Football, watch movies, music, gaming, blog</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Home;