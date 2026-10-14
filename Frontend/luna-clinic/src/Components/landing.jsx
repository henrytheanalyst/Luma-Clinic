import { useState } from "react";
import axios from 'axios'

function Landing(){
    const [mode,setMode]=useState('login');
    const [show,setShowPassword]=useState(false);
    const [full_name,setFullName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [msg,setMsg]=useState("");
    const [msgType,setMsgType]=useState("")
    async function handleSubmit(e) {
        e.preventDefault();
        setMsg("")
        
        if(mode === "signup"){
              try {
                const response=await axios.post(
                "http://localhost:3000/luma-clinic/signup",
                {
                    full_name:full_name,
                    email:email,
                    password:password
                }
            )
                setMsg(response.data.message);
                setMsgType("success");
                setEmail("");
                setFullName("")
                setPassword("");
                setMode('login')

            
            
              } catch (error) {
                setMsg(error.response?.data?.messagen || "Sorry we are experiencing some technical problems");    
             
                setMsgType("error")
              }
                        
        }
        else{
            try {
                const response=await axios.post(
                "http://localhost:3000/luma-clinic/login",
                {
                    email:email,
                    password:password
                }
            )
            setMsg(response.data.message);
                setMsgType("success");
            } catch (error) {
                  setMsg(error.response?.data?.message  || "Sorry we are experiencing some technical problems" );     
                setMsgType("error")
            }
                

        }
    }
    return(
        <section className="landing-area">
            {msg && (
                <div className={`message ${msgType}`}>
                    {msg}
                </div>
            )}
            <div className="container">
                <h1 className="welcome-title">
                    {mode === "login"?" Welcome Back":"JOIN LUMA CLINIC"}
                   
                </h1>
                <h2 className="subtitle">
                    {mode === "login" ? "Good to see you again":"Create your account"}
                </h2>
                <p className="sub-paragraph">
                    Sign in to continue to your clinic workspace
                </p>
                <div className="signup-btns">
                    <button type="button" onClick={()=>setMode("login")} className={mode === "login"?"active":""}>Sign In</button>
                    <button type="button" onClick={()=>setMode("signup")} className={mode === "signup"?"active":""}>Create Account</button>
                </div>
                <form action="" onSubmit={handleSubmit}>
                    {mode === "signup" && (
                        <div className="form-group icon-area">
                            <label>Full Name</label>
                            <div className="the-area">
                                <input type="text" placeholder="Dr.Alex Morgan" value={full_name} onChange={(e)=>setFullName(e.target.value)}/>
                                <span className="left">
                                    <i className="ri-user-line"></i>
                                </span>
                            </div>
                            
                        </div>
                    )}
                    <div className="form-group icon-area">
                             <label>Work Email</label>
                             <div className="the-area">
                                <input type="email" placeholder="alex@lumaclinic.com" required value={email} onChange={(e)=>setEmail(e.target.value)} />
                                <span className="left">
                                    <i className="ri-mail-line"></i>
                                </span>
                             </div>
                            
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <div className="the-area">
                            <input type={show ? "text":"password"} placeholder="*******" minLength={7} required value={password} onChange={(e)=>setPassword(e.target.value)} />
                            <span className="left">
                                <i className="ri-shield-fill"></i>
                            </span>
                           <button onClick={()=>setShowPassword(!show)} className="right" type="button">
                            {show ? "Hide":"Show" }
                           </button>
                        </div>
                    </div>
                    <button type="submit">
                        {mode === "login"?"Sign in to workspace":"Create my account"} <span ><i className="ri-arrow-right-line"></i></span>
                    </button>
                </form>
            </div>
        </section>
    );
}
export default Landing