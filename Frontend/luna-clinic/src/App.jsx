/*import Landing from './Components/landing';*/
import SideBar from './Components/Sidebar';
import Header from './Components/Header';
import Lower from './Components/Lower';


import './App.css'

function App() {
 
  return (
    <main className="main-section">
      <SideBar/>
      <div className="dashboard-content">
        <Header/>
        <Lower/>
      

      </div>
      
    </main>
  )
}

export default App
