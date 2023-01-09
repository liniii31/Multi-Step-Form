import { useState } from 'react';
import { useNavigate } from 'react-router';
import './SelectPlan.css';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';


function SelectPlan() {
    let [mORy, setmORy] = useState(false);
    let navigate = useNavigate();
    mORy?window.localStorage.setItem("mory","Yearly"): window.localStorage.setItem("mory","Monthly"); 
    Array.from(document.getElementsByClassName('plan')).forEach(element => {
        element.addEventListener('click', (e) => {
            updatePlan();
            element.classList.add('selected');
        })
    })
    function updatePlan() {
        Array.from(document.getElementsByClassName('plan')).forEach(element => {
            element.classList.remove('selected');
        })
    }
    function handleCheck(e) {
        let result = e.target.checked; 
        result?window.localStorage.setItem("mory","Yearly"): window.localStorage.setItem("mory","Monthly");    
        setmORy(result);
    }
    function handlePrev() {
        window.localStorage.setItem("total",0);
        navigate('/your_info')
    }
    function handleSubmit(e) {
        e.preventDefault()
        if(!document.getElementById('Arcade').checked && !document.getElementById('Advance').checked && !document.getElementById('Pro').checked ){
            alert('select one plan');
        }else{
            navigate('/add-ons');
        }
        
    }
    function handleRadio(e){
            let total = parseInt(window.localStorage.getItem("total"));
            window.localStorage.setItem("plan",e.target.id);
            if(window.localStorage.getItem("plan")==="Arcade"){
                window.localStorage.setItem("plan-price",9);
                total+=9;                
            }
            if(window.localStorage.getItem("plan")==="Advance"){
                window.localStorage.setItem("plan-price",12);
                total+=12; 
            }
            if(window.localStorage.getItem("plan")==="Pro"){
                window.localStorage.setItem("plan-price",15);
                total+=15; 
            }
            window.localStorage.setItem("total",total);
            console.log(window.localStorage.getItem("total"));
        
    }
    return (
        <div className="main-body">
            <Sidebar />
            <Topbar/>
            <div className='select-info'>
                <div className="select-desc">
                    <h1>Select Plan</h1>
                    <p>You have the option of monthly and yearly billing.</p>
                </div>
                <form>
                    <div className='select'>
                        <input type="radio" id='Arcade' name="select-plan" onChange={e=>handleRadio(e)}/>
                        <label htmlFor='Arcade'>
                            <div id="arcade-icon" className='icon'></div>
                            <div className='select-heading'>Arcade</div>
                            <div className='select-price'>{!mORy?(<p>$9/mo</p>):(<p>$108/yr</p>)}</div>
                        </label>
                        <input type="radio" id="Advance" name="select-plan" onChange={e=>handleRadio(e)}/>
                        <label htmlFor='Advance'>
                            <div id="advance-icon" className='icon'></div>
                            <div className='select-heading'>Advance</div>
                            <div className='select-price'>{!mORy?(<p>$12/mo</p>):(<p>$144/yr</p>)}</div>
                        </label>
                        <input type="radio" id="Pro" name="select-plan" onChange={e=>handleRadio(e)}/>
                        <label htmlFor='Pro'>
                            <div id="pro-icon" className='icon'></div>
                            <div className='select-heading'>Pro</div>
                            <div className='select-price'>{!mORy?(<p>$15/mo</p>):(<p>$180/yr</p>)}</div>
                        </label>
                    </div>
                    <div className='toggle-div'>
                        <div className='toggle'>
                            <label>Monthly</label>
                            <input type="checkbox" id="mory" onChange={e=>handleCheck(e)}/>
                            <label>Yearly</label>
                        </div>
                    </div>
                    <button className='go-prev' onClick={e=>handlePrev(e)}>Go Back</button>
                    <button className='go-next' onClick={e=>handleSubmit(e)}>Go next</button>
                </form>
            </div>

        </div>

    )
}

export default SelectPlan;