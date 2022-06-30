import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
export default function Header() {
    return (
        <header className='header'>
            <div className="">
                <h1>
                    <Link to={'/'} className={'logo'}>ShayanShop</Link>
                </h1>

            </div>
            <div className="header-links">
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/signup'}>Signup</Link></li>
                    <li><Link to={'/cart'}>Cart</Link></li>
                </ul> 
            </div>
        </header>
    )
}
