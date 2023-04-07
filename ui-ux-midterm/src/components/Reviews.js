import './css/Reviews.css';
import Button from '@mui/material/Button';

export default function Reviews() {
    return (
        <>
            <div className='reviews'>
                <h1> Tell us how we did </h1>
                <Button varient='outlined' color='success'> Review Us! </Button>
            </div>
        </>
    );
}