import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <header>
            <nav>
                <img src="https://image.shutterstock.com/image-photo/image-260nw-756525736.jpg" style={{height: "70px", width: "70px"}}/>

                <ul className='menu'>
                    <li>
                        <a href='#'>Import Export</a>
                        <ul className='submenu'>
                            <li>
                                <a href='#'>India</a>
                                <ul className='submenu2'>
                                    <li to="/searhPage"><Link to="/searchpage">Import</Link></li>
                                    <li><a href='#'>Export</a></li>
                                    <li><a href='#'>HSN Code</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href='#'>USA</a>
                                <ul className='submenu2'>
                                    <li><a href='#'>Supplier</a></li>
                                    <li><a href='#'>Buyer</a></li>
                                    <li><a href='#'>Customer</a></li>
                                    <li><a href='#'>Delivery</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><Link to="/login">Login</Link></li>
                    <li><a href='#'>Contact</a></li>
                </ul>

            </nav>
        </header>
    )
}

export default Header