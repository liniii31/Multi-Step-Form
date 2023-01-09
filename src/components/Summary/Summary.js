import './Summary.css';
import Sidebar from '../Sidebar/Sidebar';
import { useNavigate } from 'react-router';
import Topbar from '../Topbar/Topbar';

function Summary() {
    let navigate = useNavigate();
    function handlePrev() {
        let total = parseInt(window.localStorage.getItem("total"));
        total-=window.localStorage.getItem("service")==="true"?1:0;
        total-=window.localStorage.getItem("storage")==="true"?1:0;
        total-=window.localStorage.getItem("customize")==="true"?1:0;
        window.localStorage.setItem("total",total);
        window.localStorage.setItem("service",false);
        window.localStorage.setItem("storage",false);
        window.localStorage.setItem("customize",false);
        navigate('/add-ons');
    }
    function handleSubmit(e) {
        window.localStorage.clear()
        navigate('/done');
    }
    return (
        <div className="main-body">
            <Sidebar />
            <Topbar />
            <div id='summary-info'>
                <div className="summary-desc">
                    <h1>Finishing up</h1>
                    <p>Double check everything looks OK before confirming</p>
                </div>
                <form>
                    <div className='upper-summary'>
                        <div className='select-summary'>
                            <div className='select-plan'>
                                <div className='upper-summary-heading'>{window.localStorage.getItem("plan")}({window.localStorage.getItem("mory")})</div>
                                
                            </div>
                            <div className='select-summary-price'>
                                ${window.localStorage.getItem("plan-price")}/mo
                            </div>
                        </div>
                        <hr />
                        <div className='addon-summary'>
                            <div className='addon-plan grey'>
                                {window.localStorage.getItem("service")==="true"?(<div>Online Services</div>):(null)}
                                {window.localStorage.getItem("storage")==="true"?(<div>Larger Storage</div>):(null)}
                                {window.localStorage.getItem("customize")==="true"?(<div>Customizable profile</div>):(null)} 
                                
                            </div>
                            <div className='addon-summary-price'>
                                {window.localStorage.getItem("service")==="true"?(<div>$1/mo</div>):(null)}
                                {window.localStorage.getItem("storage")==="true"?(<div>$1/mo</div>):(null)}
                                {window.localStorage.getItem("customize")==="true"?(<div>$1/mo</div>):(null)}
                            </div>
                        </div>
                    </div>
                    <div className='lower-summary'>
                        <div className='select-summary'>
                            <div className='total grey'>
                                <div>Total(Monthly)</div>                                
                            </div>
                            <div className='select-total-price'>
                                ${window.localStorage.getItem("total")}/mo
                            </div>
                        </div>
                    </div>
                    <button className='go-prev' onClick={e => handlePrev(e)}>Go Back</button>
                    <button className='go-next' id="confirm-button" onClick={e => handleSubmit(e)}>Confirm</button>
                </form>
            </div>

        </div>
    )
}

export default Summary;