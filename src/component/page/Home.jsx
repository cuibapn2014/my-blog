import React from 'react';
import Header from "../common/Header";
import Footer from '../common/Footer';
import imgMe from '../../assets/image/me.jpg';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiOutlineCalendar } from "react-icons/hi";
import Card from '../common/Card';
import { Link } from 'react-router-dom';

const Home = () => {
    const data = [
        {
            id: 1,
            urlImg: 'https://ecn-storage.s3.us-west-2.amazonaws.com/articles/laravel-8-ajax-post-request-examplex980.webp',
            title: 'This is title post',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veritatis eius quisquam explicabo voluptatem rem dolor reiciendis consequuntur? Necessitatibus, a doloribus minima quis iste dolore cupiditate? Sit neque eius deserunt?'
        },
        {
            id: 2,
            urlImg: 'https://miro.medium.com/max/1400/0*PrVXsTlI3uZE89jO.png',
            title: 'This is title post 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veritatis eius quisquam explicabo voluptatem rem dolor reiciendis consequuntur? Necessitatibus, a doloribus minima quis iste dolore cupiditate? Sit neque eius deserunt?'
        }
    ]

    const renderCard = data.map(items => {
        return (
            <Card key={items.id} urlImg={items.urlImg} title={items.title} description={items.description} />
        )
    })

    return (
        <>
            <Header />
            <aside className='flex flex-col bg-cover bg-center bg-home h-96 p-5 w-full justify-between items-center'>
                <img src={imgMe} alt="avatar" className='w-44 h-44 rounded-full border-4 border-sky-400 my-5 p-1 object-cover object-top drop-shadow-lg' />
                <ul className='flex flex-row w-40 my-5 justify-between text-white text-xl'>
                    <a href='https://fb.com/FakerHT' target='_blank'><li className='rounded-full shadow bg-gray-900 p-3 hover:bg-blue-700 ease-in duration-100 cursor-pointer'><FaFacebookF /></li></a>
                    <a href="https://www.instagram.com/manhtuan.n7250/" target="_blank" rel="noopener noreferrer"><li className='rounded-full shadow bg-gray-900 p-3 hover:bg-blue-700 ease-in duration-100 cursor-pointer'><FaInstagram /></li></a>
                    <a href="http://www.github.com/cuibapn2014/" target="_blank" rel="noopener noreferrer"><li className='rounded-full drop-shadow-lg bg-gray-900 p-3 hover:bg-blue-700 ease-in duration-100 cursor-pointer'><FaGithub /></li></a>
                </ul>
            </aside>
            <section className='max-w-screen-lg mx-auto my-5'>
                <div className='container mx-auto p-5'>
                    <h2 className='text-xl font-thin __latest my-2 uppercase'>Latest Post</h2>
                    <div className='__lastest-post h-auto flex flex-col my-5'>
                        <img src="https://i.ytimg.com/vi/x0fSBAgBrOQ/maxresdefault.jpg" alt="title" className='w-full rounded-md drop-shadow-lg' />
                        <div className='box__summary'>
                            <p className='w-full text-left font-medium my-2 text-gray-400'><HiOutlineCalendar className='float-left my-1' /> MAY 9,2022</p>
                            <h2 className='__box-title text-4xl font-medium my-2'>How to learning ReactJS on a week ?</h2>
                            <p className='w-full line-clamp-3 text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, saepe explicabo obcaecati velit libero dolorum est excepturi dignissimos minima doloremque id veniam quae ea fuga dolor et, animi harum nesciunt!</p>
                            <button className='py-1 px-7 inline font-extralight text-lg bg-blue-600 text-white rounded-full my-2 hover:bg-blue-400 duration-150'>Read more</button>
                        </div>
                    </div>
                </div>
                <div className='container mx-auto p-5 flex items-center flex-col'>
                    {renderCard}
                    <Link to='/blog'><button className='p-3 rounded-lg bg-blue-600 text-white text-xl font-light my-5'>View more</button></Link>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Home;