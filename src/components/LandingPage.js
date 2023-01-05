import './LandingPage.css';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

function LandingPage(){
    return(
        <div className="main-body">
            <Sidebar/>
            <div className='begin'>
                <Link to="/your_info" className='begin-button'>Begin</Link>
            </div>
        </div>
    )
}

export default LandingPage;