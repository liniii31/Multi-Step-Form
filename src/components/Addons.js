import './Addons.css';
import Sidebar from './Sidebar';
import { useState } from 'react';
import { useNavigate } from 'react-router';

function Addons() {
    let navigate = useNavigate();
    
    function next(){
        navigate('/select_plan')
    }
    function back(){
        navigate('/select_plan');
    }
    return (
        <div className="main-body">
            <Sidebar />
            <div id='add-ons'>
                <div className="addons-desc">
                    <h1>Pick add ons</h1>
                    <p>Add-ons help enhance your gaming experience.</p>
                </div>
                <div className='adds'>
                    <div className='add'>
                        <div className='checkmark'></div>
                        <div className="add-head">
                            <h2>Online Services</h2>
                            Access to multiplayer games.
                        </div>
                        <div className='add-price'>$1/mo</div>
                    </div>
                    <div className='add'>
                        <div className='checkmark'></div>
                        <div className="add-head">
                            <h2>Larger Storage</h2>
                            Extra 1TB of cloud Save.
                        </div>
                        <div className='add-price'>$2/mo</div>
                    </div>
                    <div className='add'>
                        <div className='checkmark'></div>
                        <div className="add-head">
                            <h2>Customizable Profit</h2>
                            Customize theme on your profile.
                        </div>
                        <div className='add-price'>$2/mo</div>
                    </div>
                </div>
                <button id="select-submit" onClick={e=>next(e)}>Go Next</button>
                <button id="select-back" onClick={e=>back(e)}>Go Back</button>
            </div>

        </div>
    )
}

export default Addons;