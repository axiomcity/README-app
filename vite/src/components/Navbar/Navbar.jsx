import { useState } from 'react';
import logo from './logo.png';

function Navbar() {

    return (
        <nav>
            <div className="navbar">
                <div className='nav-in'>
                    <img className='ico64' src={logo} alt="Logo" />
                    <p>NOTES <br></br>
                        COLLABORATIVES
                    </p>
                </div>

                <p className='nav-txt'>Partagez vos idées et collaborez en temps réel, grace a NOTEME.</p>
            </div>

        </nav>
    );
}

export default Navbar;