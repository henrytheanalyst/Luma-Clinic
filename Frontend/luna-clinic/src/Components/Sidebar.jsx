function SideBar(){
    return(
        <aside className="sidebar">
            <div className="sidebar-logo">
                <div className="logo-area">
                    <i className="ri-heart-add-line"></i>
                </div>
                <div className="sidebar-brand">
                    <h2 className="sidebar-name">
                        Luma
                    </h2>
                    <h3>FAMILY CLINIC</h3>
                </div>
            </div>
            <div className="sidebar-category">
                <div className="cat-1">
                    <i className="ri-dashboard-line"></i>
                    <span>Overview</span>
                </div>

                 <div className="cat-1">
                    <i className="ri-calendar-line"></i>
                    <span>Appointments</span>
                </div>
                
                 <div className="cat-1">
                    <i className="ri-group-line"></i>
                    <span>Patients</span>
                </div>
                
                 <div className="cat-1">
                    <i className="ri-user-settings-line"></i>
                    <span>Settings</span>
                </div>
                
                 <div className="cat-1">
                    <i className="ri-question-line"></i>
                    <span>Support</span>
                </div>
                
            </div>

            <button type="button" className="logout">
                Logout <span>
                    <i className="ri-logout-box-r-line"></i>
                </span>
            </button>
        </aside>
    );
}
export default SideBar;