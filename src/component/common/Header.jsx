import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/header.css';
import data from '../../data/menu.json';
import Menu from '../common/MenuMobile';
import { AiOutlineMenu } from 'react-icons/ai';
import { MenuContext } from '../../context/MenuContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
    const context = useContext(MenuContext)
    const [display, setDisplay] = useState(false);
    const [keyword, setKeyword] = useState("");

    const renderMenu =
        data.map(items => {
            return (
                <Link to={items.path}><li className='lg:block hidden nav-link px-3 py-2 cursor-pointer text-base'>{items.title}</li></Link>
            )
        })

    const toggleSearch = (e) => {
        if (keyword.length <= 0) setDisplay(!display)
        else toast('oke')
    }

    const handleChange = (e) => {
        setKeyword(e.target.value)
    }

    const handleKeyPress = (e) => {
        if (e.key == 'Enter') toggleSearch()
    }

    window.addEventListener('scroll', () => { if (window.scrollY > 0) handleScroll() })

    const handleScroll = () => {
        if (display) setDisplay(!display)
    }

    return (
        <>
            <nav class='navbar py-3 px-4 max-w-screen-lg container flex flex-row flex-nowrap items-center justify-between text-center mx-auto box-border'>
                <AiOutlineMenu className='text-xl ml-2 lg:hidden cursor-pointer' onClick={context.toggleMenu} />
                <ul className='flex item-align-center text-xl items-center py-3'>
                    <Link to='/'><h2 className='nav-link text-bold text-3xl mx-5 '>iAmCoder</h2></Link>
                    {renderMenu}
                </ul>
                <div className='flex flex-row relative justify-between items-center'>
                    <div className={`flex flex-row h-12 mx-2 duration-150 ease-in-out __box-search ${!display ? "w-0" : "w-60"}`}>
                        <input autoComplete='off' className='w-full border-b-2 peer outline-none focus:border-sky-400 h-full py-3 text-lg duration-150' type="text" name="keyword" onChange={handleChange} onKeyPress={handleKeyPress} placeholder='Search anything e.t.c' />
                    </div>
                    <button className='rounded-full text-white bg-blue-600 hover:bg-blue-700 duration-100 ease-in p-2 shadow-md' onClick={toggleSearch}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>

            </nav>
            <hr />
            <ToastContainer />
            <Menu />
        </>
    )
}

export default Header;