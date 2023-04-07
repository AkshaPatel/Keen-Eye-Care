import './css/Home.css';


export default function Home() {
    return (
        <>
            <div className='slogan'>
                <h1> Clear Vision Starts Here </h1>           
                <strong> 
                    Your vision care is our top priority! 
                </strong>
            </div>
            
            <div className='contact'> 
                <h1> Contact Us! </h1>
                <div className='location'>
                    <div className='info'>
                        <h3> Address: </h3>
                        <p> 
                            8626 Queens Blvd, Elmhurst, NY 11373, United States
                        </p>
                    </div>
                    <div className='info'>
                        <h3> Phone: </h3>
                        <p> (929)-488-7753 </p>
                    </div>
                    <div>
                        <h3> Email: </h3>
                        <p> KeenEyeCnpmare@gmail.com </p>
                    </div>
                </div>
            </div>

        </>
    );
}