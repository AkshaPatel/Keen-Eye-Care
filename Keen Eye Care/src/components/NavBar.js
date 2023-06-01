import './css/NavBar.css';

import Home from './Home';
import About from './About';
import Appointments from './Appointments';
import Reviews from './Reviews';
import InvalidURL from './InvalidURL';

import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import RateReviewIcon from '@mui/icons-material/RateReview';

import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';


const linkStyle = {textDecoration: "none", color: "black"};
function Layout() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link style={linkStyle} to='/'>
                            <Button color='primary' variant="contained" 
                               startIcon={<HomeIcon />} sx={{margin:1.5}}>Home</Button>
                        </Link>
                    </li>
                    <li>
                        <Link style={linkStyle} to='about'>
                            <Button variant="contained" 
                                startIcon={<InfoIcon />} sx={{margin:1.5}}>
                                    About
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link style={linkStyle} to='appointments'>
                            <Button 
                            variant="contained" startIcon={<BookmarkBorderIcon />}sx={{margin:1.5}}>
                                Appointments
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link style={linkStyle} to='reviews'>
                            <Button 
                            variant="contained" startIcon={<RateReviewIcon />} sx={{margin:1.5}}>
                                    Reviews
                            </Button>
                        </Link>
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