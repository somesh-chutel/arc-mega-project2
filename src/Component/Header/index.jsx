import { Link } from 'react-router-dom';
import './index.css'


const Header = ()=>{

    return (
        <div className='nav-bar-cont'>

            <ul className='nav-bar'>
                <li>
                    <Link to="/">
                    <img className='nav-logo' src="https://assets.ccbp.in/frontend/react-js/logo-img.png" alt="web logo" />
                    </Link>
                </li>

                <li>    
                    <Link className='n-link' to="/">
                    <a className='nav-text' href="#">Home</a>
                    </Link>
                    <Link className='n-link' to="/jobs">
                    <a className='nav-text' href="#">jobs</a>
                    </Link>
                </li>

                <li>
                    <button className='btn btn-primary'>Logout</button>
                </li>

            </ul>

        </div>

    )
}




export default Header;