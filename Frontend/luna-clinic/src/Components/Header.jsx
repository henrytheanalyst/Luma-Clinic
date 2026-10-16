function Header(){
    return(
        <header className="header">
            <div className="search-area">
                <i className="ri-search-line"></i>
                <input 
                    type="text" 
                    placeholder="Search Patients" 
                />
            </div>            
           
            <div className="header-actions">
                <div className="notification">
                    <i class="ri-notification-line"></i>
                </div>

                <div className="avatar">
                    H
                </div>
                
            </div>
            
        </header>
    );
}
export default Header;