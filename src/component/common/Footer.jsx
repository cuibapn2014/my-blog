import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import data from "../../data/menu.json";

const Footer = () => {
    const renderMenu =
        data.map(items => {
            return (
                <Link to={items.path}> <li className='nav-link px-3 py-2 cursor-pointer hover:text-gray-400 duration-150 ease-in-out'>{items.title}</li></Link>
            )
        })

    return (
        <footer className='w-full text-white'>
            <div className='h-auto w-100 bg-slate-800 p-5 flex flex-col justify-center items-center'>
                <ul className='flex flex-row w-40 my-5 justify-between text-white text-xl'>
                    <a href='https://fb.com/FakerHT' target='_blank'><li className='rounded-full shadow bg-gray-900 p-3 hover:bg-blue-700 ease-in duration-100 cursor-pointer'><FaFacebookF /></li></a>
                    <a href="https://www.instagram.com/manhtuan.n7250/" target="_blank" rel="noopener noreferrer"><li className='rounded-full shadow bg-gray-900 p-3 hover:bg-blue-700 ease-in duration-100 cursor-pointer'><FaInstagram /></li></a>
                    <a href="http://www.github.com/cuibapn2014/" target="_blank" rel="noopener noreferrer"><li className='rounded-full shadow bg-gray-900 p-3 hover:bg-blue-700 ease-in duration-100 cursor-pointer'><FaGithub /></li></a>
                </ul>
                <ul className='flex item-align-center text-md items-center py-3 mb-5'>
                    {renderMenu}
                </ul>
            </div>
            <h2 className='bg-gray-900 p-5 text-center'>Coppyright {new Date().getFullYear()} © Written by Manh Tuan</h2>
        </footer>
    )
}

export default Footer;