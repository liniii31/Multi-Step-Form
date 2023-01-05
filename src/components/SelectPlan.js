import { useState } from 'react';
import { useNavigate } from 'react-router';
import './SelectPlan.css';
import Sidebar from './Sidebar';


function SelectPlan() {
    let [mORy, setmORy] = useState(false);
    let navigate= useNavigate();
    Array.from(document.getElementsByClassName('plan')).forEach(element=>{
        element.addEventListener('click', (e)=>{
            updatePlan();
            element.classList.add('selected');
        })        
    })
    function updatePlan(){
        Array.from(document.getElementsByClassName('plan')).forEach(element=>{
            element.classList.remove('selected');
        })
    }
    function handleCheckbox(e) {
        let result = e.target.checked;
        if (result) {
            document.getElementById('month').style.color = "#b2bec3";
            document.getElementById('year').style.color = "rgb(36, 85, 159)";
        } else {
            document.getElementById('month').style.color = "rgb(36, 85, 159)";
            document.getElementById('year').style.color = "#b2bec3";
        }
        setmORy(result);
    }
    function next(){
        navigate('/add-ons')
    }
    function back(){
        navigate('/your_info');
    }
    return (
        <div className="main-body">
            <Sidebar />
            <div id='select-plan'>
                <div className="select-desc">
                    <h1>Select Plan</h1>
                    <p>You have the option of monthly and yearly billing.</p>
                </div>
                {mORy ? (<div className='plans'>
                    <div className='plan selected'>
                        <div id='arcade'></div>
                        <div className="select-head">Arcade</div>
                        <div className='price'>$135/yr</div>
                    </div>
                    <div className='plan'>
                        <div id='advance'></div>
                        <div className="select-head">Advance</div>
                        <div className='price'>$180/yr</div>
                    </div>
                    <div className='plan'>
                        <div id='pro'></div>
                        <div className="select-head">Pro</div>
                        <div className='price'>$225/yr</div>
                    </div>
                </div>) : (
                    <div className='plans'>
                        <div className='plan selected'>
                            <div id='arcade'></div>
                            <div className="select-head">Arcade</div>
                            <div className='price'>$9/mo</div>
                        </div>
                        <div className='plan'>
                            <div id='advance'></div>
                            <div className="select-head">Advance</div>
                            <div className='price'>$12/mo</div>
                        </div>
                        <div className='plan'>
                            <div id='pro'></div>
                            <div className="select-head">Pro</div>
                            <div className='price'>$15/mo</div>
                        </div>
                    </div>
                )}
                <div className='toggle-div'>
                    <div className='toggle'>
                        <label id="month">Monthly</label>
                        <input id="select-checkbox" onClick={e => handleCheckbox(e)} type="checkbox" className='toggle-btn' />
                        <label id="year">Yearly</label>
                    </div>
                </div>
                <button id="select-submit" onClick={e=>next(e)}>Go Next</button>
                <button id="select-back" onClick={e=>back(e)}>Go Back</button>
            </div>
        </div>
    )
}

export default SelectPlan;