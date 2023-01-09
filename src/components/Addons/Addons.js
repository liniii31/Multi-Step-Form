import './Addons.css';
import Sidebar from '../Sidebar/Sidebar';
import { useNavigate } from 'react-router';
import Topbar from '../Topbar/Topbar';

function Addons() {
    let navigate = useNavigate();
    
    function handleCheck(e){
        let total = parseInt(window.localStorage.getItem("total"));
        console.log(e.target.id);
        if(e.target.checked){
            document.getElementById(e.target.id).parentElement.style.border=" 2px solid #6c5ce7";
            document.getElementById(e.target.id).parentElement.style.backgroundColor = "#f5f6fa";
            window.localStorage.setItem(e.target.id,true);
            total +=1;

        }else{
            document.getElementById(e.target.id).parentElement.style.border=" 2px solid lightgrey";
            document.getElementById(e.target.id).parentElement.style.backgroundColor = "white";
            window.localStorage.setItem(e.target.id,false);
            total -=1;
        }
        window.localStorage.setItem("total",total);
        console.log(window.localStorage.getItem("total"));
        console.log(window.localStorage.getItem("service"));
        console.log(window.localStorage.getItem("storage"));
        console.log(window.localStorage.getItem("customize"));
    }
    function handlePrev() {
        window.localStorage.removeItem("plan");
        window.localStorage.removeItem("plan-price");
        window.localStorage.removeItem("service");
        window.localStorage.removeItem("storage");
        window.localStorage.removeItem("customize");
        window.localStorage.setItem("total",0);
        navigate('/select_plan');
    }
    function handleSubmit(e) {
        navigate('/summary');
    }
    return (
        <div className="main-body">
            <Sidebar />
            <Topbar/>
            <div id='addons-info'>
                <div className="addons-desc">
                    <h1>Pick add ons</h1>
                    <p>Add-ons help enhance your gaming experience.</p>
                </div>
                <form>
                    <div className='addons'>
                        <label htmlFor='service'>
                            <input id="service" type="checkbox" name="addons" onChange={e=>handleCheck(e)}/>
                            <div className='addons-desc'>
                                <div className='heading'>
                                    Online Services
                                </div>
                                <div className='addons-para'>
                                    Access to multiplayer games
                                </div>
                            </div>
                            <div className='addons-price'>$1/mo</div>
                        </label>
                        <label htmlFor='storage'>
                            <input id="storage" type="checkbox" name="addons" onChange={e=>handleCheck(e)}/>
                            <div className='addons-desc'>
                                <div className='heading'>
                                    Large Storage
                                </div>
                                <div className='addons-para'>
                                    Extra 1TB of cloud save
                                </div>
                            </div>
                            <div className='addons-price'>$1/mo</div>
                        </label>
                        <label htmlFor='customize'>
                            <input id="customize" type="checkbox" name="addons" onChange={e=>handleCheck(e)}/>
                            <div className='addons-desc'>
                                <div className='heading'>
                                    Customizable Profile
                                </div>
                                <div className='addons-para'>
                                    Custom theme on profile.
                                </div>
                            </div>
                            <div className='addons-price'>$1/mo</div>
                        </label>
                    </div>
                    <button className='go-prev' onClick={e => handlePrev(e)}>Go Back</button>
                    <button className='go-next' onClick={e => handleSubmit(e)}>Go next</button>
                </form>
            </div>

        </div>
    )
}

export default Addons;