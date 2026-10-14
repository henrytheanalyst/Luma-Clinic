function SideBar(){
    return(
        <aside className="sidebar">
            <div className="sidebar-header">
                <div className="love">
                    <i className="ri-service-line"></i>
                    
                </div>
                <div className="sidebar-logo">
                        <h2>Luma</h2>
                        <p>FAMILY CLINIC</p>
                 </div>
            </div>
            <div className="sidebar-content">
                <div className="content">
                    <i className="ri-dashboard-line"></i>
                    <h2>Overview</h2>
                </div>
                <div className="content">
                    <i class="ri-calendar-line"></i>
                    <h2>Appointments</h2>
                </div>
                <div className="content">
                    <i class="ri-group-line"></i>
                    <h2>Overview</h2>
                </div>
                
            </div>
        </aside>
    );
}
export default SideBar;