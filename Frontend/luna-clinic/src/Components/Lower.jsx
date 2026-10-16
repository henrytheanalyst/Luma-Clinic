import './Lower.css'
function Lower(){
    return(
        <div className="welcome-section">
            <div className="welcome-text">
                <p className="welcome-date">
                    {new Date().toLocaleDateString()}
                </p>
                <h1>Good Evening, Henry</h1>
                <p>
                    Here's what's happening at Luma today
                </p>
            </div>
            <button type="button" className="new-appoitment" >
                  <i className="ri-add-line"></i>
                New Appointment
            </button>
        </div>
    );
}
export default Lower;