import React from 'react';
import Logo from '../../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div><img src={Logo} alt="" /></div>
            <ul>
                <li>Order</li>
                <li>Order Review</li>
                <li>Manage Inventory</li>
                <li>Login</li>
            </ul>
        </div>
    );
};

export default Header;