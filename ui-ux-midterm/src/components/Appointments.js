import './css/Appointments.css';
import Button from '@mui/material/Button';

export default function Appointments() {
    return (
        <>
            <div className='appointments'>
                <h1> Book an appointment within seconds... </h1>
                <Button varient='outlined' color='success'> Book an appointment here </Button>
            </div>
        </>
    );
}