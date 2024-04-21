import Header from '../components/header';
import Navbar from '../components/navbar';

export default function Page() {
    return (
        <div className='min-h-screen '>
            <Header/>
            <Navbar />
            <p className='flex justify-center'>
                {`
                coming soon`}
            </p>
        </div>
    )
         
        };
