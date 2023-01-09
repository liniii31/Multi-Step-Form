import './LandingPage.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

function LandingPage(){
    let navigate = useNavigate()
    function Begin(e){
        navigate('/your_info');
    }
    return(
        <div className="main-body">
            <Sidebar/>
            <div className='begin'>
                <button id='begin-button' onClick={e=>Begin(e)}>Begin</button><Link to="/your_info" ></Link>
            </div>
        </div>
    )
}

export default LandingPage;