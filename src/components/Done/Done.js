import './Done.css';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';

function Done(){
    return(
        <div className="main-body">
            <Sidebar/>
            <Topbar />
            <div className='done'>
                <div className='thankyou-icon'></div>
                <h1>Thank you!</h1>
                <p>Thanks for confirming your subscription!We hope you have</p>
                <p>fun using our platforms. If you ever need support, please feel</p>
                <p>free to contact us at support@samplemail.com</p>
            </div>
        </div>
    )
}

export default Done;