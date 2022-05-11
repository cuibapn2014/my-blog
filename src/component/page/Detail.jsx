import React, { useState } from 'react';
import Header from "../common/Header";
import Footer from '../common/Footer';
import { HiChevronUp } from "react-icons/hi";
import { HiOutlineCalendar } from "react-icons/hi";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { FacebookShareButton, FacebookIcon } from 'react-share';


const Detail = () => {
    const [isScroll, setIsScroll] = useState(false)
    
    return (
        <>
            <Header />
            <section className='lg:max-w-screen-md mx-auto my-5'>
                <div className='container mx-auto p-5'>
                    <p><HiOutlineCalendar className='float-left m-1 ml-0' />MAY 9,2022</p>
                    <h1 className='text-4xl font-bold mb-4'>This is title</h1>
                    <img src="https://i.ytimg.com/vi/x0fSBAgBrOQ/maxresdefault.jpg" alt="title" className='w-full rounded-md drop-shadow-lg my-2' />
                    <p className='w-full text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti assumenda eveniet ad accusantium alias ipsam, praesentium eos, veniam iste nobis laborum! Possimus nulla earum dolor veritatis reprehenderit reiciendis? Molestias, error?</p>
                </div>
                <FacebookShareButton
                    url={"https://codeify-templateify.blogspot.com/2018/05/studying-listening-to-music-can-help.html"}
                    description={"This is description"}
                    className="Demo__some-network__share-button flex flex-row items-center m-2"
                >
                    <FacebookIcon size={32} round className='mr-2' />
                </FacebookShareButton>
                <div className='flex flex-row flex-nowrap justify-between border-t-2 py-2'>
                    <Link to='/post/id/slug' className='flex flex-row items-center'><FiChevronLeft className='mx-1' /> Previous</Link>
                    <Link to='/post/id/slug' className='flex flex-row-reverse items-center'><FiChevronRight className='mx-1' /> Next</Link>
                </div>
            </section>
            {isScroll && <a href='#' className='btn-scroll p-3 fixed bottom-0 right-0 bg-gray-600 drop-shadow-xl text-2xl text-white rounded-full mx-5 my-7'><HiChevronUp /></a>}
            <Footer />
        </>
    )
}

export default Detail;