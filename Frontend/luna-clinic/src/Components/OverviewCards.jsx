import { useEffect, useState } from 'react';
import axios from 'axios'
import './OverviewCards.css';
function OverviewCards(){
    const [stats,setStats]=useState({
        total_patients:0,
        new_patients_today:0,
        appointments_today:0,
        pending_appointments:0
    });
    useEffect(()=>{
        const fetchStats=async () => {
            try {
                const result=await axios.get(
                    "http://localhost:3000/luma-clinic/dashboard/stats"
                );
                setStats(result.data.data)
            } catch (error) {
                console.error("Failed to fetch dashboard stats",error);
                
            }
        };
        fetchStats();
    },[])
    return(
        <section className="overview-cards">
            <div className="overview-card">
                <div className="card-icon patients-icon">
                          <i className="ri-group-line"></i>
                </div>
                <h3>Total Patients</h3>
                <p className="card-value">{stats.total_patients}
                    - <span>All Registered patients</span>
                </p>
            </div>

            <div className="overview-card">
                <div className="card-icon new-patients-icon">
                          <i className="ri-user-add-line"></i>
                </div>
                <h3>New Patients Today</h3>
                <p className="card-value">{stats.new_patients_today}
                    - <span>Registered today</span>
                </p>
            </div>

            <div className="overview-card">
                <div className="card-icon appointments-icon">
                          <i className="ri-calendar-check-line"></i>
                </div>
                <h3>Appointments Today</h3>
                <p className="card-value">{stats.appointments_today}
                    - <span>Scheduled for today</span>
                </p>
            </div>

              <div className="overview-card">
                <div className="card-icon pending-icon">
                           <i className="ri-time-line"></i>
                </div>
                <h3>Pending Appointments</h3>{stats.pending_appointments}
                <p className="card-value">
                    - <span>Awaiting action</span>
                </p>
            </div>

            
        </section>
    )
}
export default OverviewCards;