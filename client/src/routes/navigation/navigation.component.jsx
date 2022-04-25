import { Outlet, Link } from 'react-router-dom';
import './navigation.styles.scss'

const Navigation = () => {
    return(
        <>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    Home
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/castings'>
                        CASTINGS
                    </Link>
                    <Link className='nav-link' to='/applications'>
                        APPLICATIONS
                    </Link>
                    <Link className='nav-link' to='/auth'>
                        SIGN IN
                    </Link>
                </div>
            </div>
            <div className='content'>
                <Outlet />
            </div>
        </>
    )
};

export default Navigation;