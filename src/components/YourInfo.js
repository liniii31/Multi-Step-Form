import './YourInfo.css';
import Sidebar from './Sidebar';
import { useState } from 'react';
import { useNavigate } from 'react-router';

function YourInfo() {
    let [yourinfo, setYourinfo] = useState({
        name: "",
        email: "",
        phone: ""
    });
    let navigate = useNavigate();
    function handleChange(e) {
        setYourinfo({ ...yourinfo, [e.target.name]: e.target.value });
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(yourinfo);
        document.getElementById('name-error').style.display = "none";
        document.getElementById('email-error').style.display = "none";
        document.getElementById('phone-error').style.display = "none";
        document.getElementById('name').style.borderColor = "lightgrey";
        document.getElementById('email').style.borderColor = "lightgrey";
        document.getElementById('phone').style.borderColor = "lightgrey";
        if (yourinfo.name === "") {
            document.getElementById('name-error').style.display = "block";
            document.getElementById('name').style.borderColor = "red";
        }
        if (yourinfo.email === "") {
            document.getElementById('email-error').style.display = "block";
            document.getElementById('email').style.borderColor = "red";
        }
        if (yourinfo.phone === "") {
            document.getElementById('phone-error').style.display = "block";
            document.getElementById('phone').style.borderColor = "red";
        }
        if (yourinfo.name !== "" && yourinfo.email !== "" && yourinfo.phone !== "") {
            navigate('/select_plan');
        }

    }
    return (
        <div className="main-body">
            <Sidebar />
            <div id='your-info'>
                <div className="info-desc">
                    <h1>Personal info</h1>
                    <p>Provide your Name, Email address and Phone number.</p>
                </div>
                <form onSubmit={e => handleSubmit(e)} >
                    <div className='info-form'>
                        <label htmlFor='name'>Name</label>
                        <input type='text' placeholder='e.g. Shalini Anand' id='name' name='name' onChange={e => handleChange(e)} />
                        <div className='error' id='name-error'>Name is required</div>
                    </div>
                    <div className='info-form'>
                        <label htmlFor='email'>Email Address</label>
                        <input type='email' placeholder='e.g. shalini@gmail.com' id='email' name='email' onChange={e => handleChange(e)} />
                        <div className='error' id='email-error'>Email Address is required</div>
                    </div>
                    <div className='info-form'>
                        <label htmlFor='phone'>Phone Number</label>
                        <input type='text' placeholder='e.g. 1234589076' id='phone' name='phone' onChange={e => handleChange(e)} />
                        <div className='error' id='phone-error'>Phone is required</div>
                    </div>
                    <button type='submit'>Next Step</button>
                </form>
            </div>
        </div>
    )

}

export default YourInfo;