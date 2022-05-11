import React from 'react';
import { HiOutlineCalendar } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <div className='flex flex-row flex-nowrap __card py-4 min-h-40 my-2'>
            <img src={props.urlImg} alt="laravel" className='w-1/3 h-48 object-contain object-center' />
            <div className='__summary-box w-full grow px-3 relative'>
                <p className='w-full text-left font-medium text-gray-400'><HiOutlineCalendar className='float-left my-1' /> MAY 9,2022</p>
                <h2 className='font-medium text-2xl line-clamp-3'>{props.title}</h2>
                <p className='line-clamp-3 text-base text-gray-400'>{props.description}</p>
                <Link to='/post/id/slug'><button className='bottom-0 absolute py-1 px-7 inline font-extralight text-lg bg-blue-600 text-white rounded-full hover:bg-blue-400 duration-150'>Read more</button></Link>
            </div>
        </div>
    )
}

export default Card;