import './Sidebar.css';

function Sidebar(){
    return(
        <div className="main">
            <div className="stages">
                <div className="step" id="one">1</div>
                <div className="stages-details">
                    <div className="detail-1">Step 1</div>
                    <div className="detail-2">YOUR INFO</div>
                </div>
            </div>
            <div className="stages">
            <div className="step" id="two">2</div>
                <div className="stages-details">
                    <div className="detail-1">Step 2</div>
                    <div className="detail-2">SELECT PLAN</div>
                </div>
            </div>
            <div className="stages">
            <div className="step" id="three">3</div>
                <div className="stages-details">
                    <div className="detail-1">Step 3</div>
                    <div className="detail-2">ADD-ONS</div>
                </div>
            </div>
            <div className="stages">
            <div className="step" id="four">4</div>
                <div className="stages-details">
                    <div className="detail-1">Step 4</div>
                    <div className="detail-2">SUMMARY</div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;