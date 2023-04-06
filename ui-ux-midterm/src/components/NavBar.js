import './css/NavBar.css';

import Home from './Home';
import About from './About';
import Appointments from './Appointments';
import Reviews from './Reviews';
import InvalidURL from './InvalidURL';

import Button from '@mui/material/Button';

import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';

const linkStyle = {textDecoration: "none", color: "black"};
function Layout() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link style={linkStyle} to='/'><Button variant="text">Home</Button></Link>
                    </li>
                    <li>
                        <Link style={linkStyle} to='about'><Button variant="text">About</Button></Link>
                    </li>
                    <li>
                        <Link style={linkStyle} to='appointments'><Button variant="text">Appointments</Button></Link>
                    </li>
                    <li>
                        <Link style={linkStyle} to='reviews'><Button variant="text">Reviews</Button></Link>
                    </li>
                </ul>
            </nav>

            <Outlet/>
        </>
    );
}

export default function NavBar() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path='about'element={<About/>}/>
                    <Route path='appointments' element={<Appointments/>}/>
                    <Route path='reviews' element={<Reviews/>}/>
                    <Route path='*' element={<InvalidURL/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}