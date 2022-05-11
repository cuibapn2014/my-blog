import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import data from '../../data/menu.json';
import { IoCloseOutline } from 'react-icons/io5';
import { MenuContext } from '../../context/MenuContext';
const MbMenu = () => {
    const context = useContext(MenuContext)

    const renderMenu = data.map(items => {
        return (
            <li><Link to={items.path} className='z-50 text-lg leading-10' onClick={context.toggleMenu}>{items.title}</Link></li>
        )
    })

    return (
        <div className={`__mnu h-full w-full fixed top-0 left-0 opacity-100 backdrop-blur-md ${!context.isOpen ? "__fade-out __z-hide" : "z-50"}`}>
            <ul className={`flex lg:w-1/4 w-8/12 sm:w-8/12 md:w-2/5 flex-col py-8 bg-white shadow-lg h-full z-10 p-5 absolute top-0 left-0 __menu duration-300 ease-in-out ${!context.isOpen && "__mnu-float-out"}`}>
                <IoCloseOutline className='z-50 absolute right-3 top-3 text-gray-900 text-2xl __iClose-menu cursor-pointer' onClick={context.toggleMenu} />
                {renderMenu}
            </ul>
            <div className='w-full h-full absolute top-0 left-0 z-0 opacity-75 duration-300 ease-in-out overlay' onClick={context.toggleMenu}></div>
        </div>
    )
}

export default MbMenu;