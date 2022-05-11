import React, { useState } from 'react';
import Header from "../common/Header";
import Footer from '../common/Footer';
import { HiChevronUp } from "react-icons/hi";
import Card from '../common/Card';

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
        },
        {
            id: 2,
            urlImg: 'https://miro.medium.com/max/1400/0*PrVXsTlI3uZE89jO.png',
            title: 'This is title post 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veritatis eius quisquam explicabo voluptatem rem dolor reiciendis consequuntur? Necessitatibus, a doloribus minima quis iste dolore cupiditate? Sit neque eius deserunt?'
        },
        {
            id: 2,
            urlImg: 'https://miro.medium.com/max/1400/0*PrVXsTlI3uZE89jO.png',
            title: 'This is title post 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veritatis eius quisquam explicabo voluptatem rem dolor reiciendis consequuntur? Necessitatibus, a doloribus minima quis iste dolore cupiditate? Sit neque eius deserunt?'
        },
        {
            id: 2,
            urlImg: 'https://miro.medium.com/max/1400/0*PrVXsTlI3uZE89jO.png',
            title: 'This is title post 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veritatis eius quisquam explicabo voluptatem rem dolor reiciendis consequuntur? Necessitatibus, a doloribus minima quis iste dolore cupiditate? Sit neque eius deserunt?'
        },
        {
            id: 2,
            urlImg: 'https://miro.medium.com/max/1400/0*PrVXsTlI3uZE89jO.png',
            title: 'This is title post 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veritatis eius quisquam explicabo voluptatem rem dolor reiciendis consequuntur? Necessitatibus, a doloribus minima quis iste dolore cupiditate? Sit neque eius deserunt?'
        }
    ]
    
    const [isScroll, setIsScroll] = useState(false)

    const renderCard = data.map(items => {
        return (
            <Card key={items.id} urlImg={items.urlImg} title={items.title} description={items.description} />
        )
    })

    
    window.addEventListener('scroll', () => {
        window.scrollY > 300 ? setIsScroll(true) : setIsScroll(false)
    })


    return (
        <>
            <Header />
            <section className='max-w-screen-lg mx-auto my-5'>
                <div className='container mx-auto p-5 flex items-center flex-col'>
                    {renderCard}
                    <ul className='flex flex-row mx-auto'>
                        <li className='paginate-link px-3 py-1 cursor-pointer border-2 border-blue-700 text-lg mx-1 text-white bg-blue-700 hover:bg-blue-800 hover:text-white duration-300 rounded'>1</li>
                        <li className='paginate-link px-3 py-1 cursor-pointer border-2 border-blue-700 text-lg mx-1 text-gray-900 bg-transperent hover:bg-blue-700 hover:text-white duration-300 rounded'>2</li>
                        <li className='paginate-link px-3 py-1 cursor-pointer border-2 border-blue-700 text-lg mx-1 text-gray-900 bg-transperent hover:bg-blue-700 hover:text-white duration-300 rounded'>3</li>
                    </ul>
                </div>
            </section>
            {isScroll && <a href='#' className='btn-scroll p-3 fixed bottom-0 right-0 bg-gray-600 drop-shadow-xl text-2xl text-white rounded-full mx-5 my-7'><HiChevronUp /></a>}
            <Footer />
        </>
    )
}

export default Home;