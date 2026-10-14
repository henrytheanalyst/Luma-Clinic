import { useState } from "react";

function Landing(){
    const [mode,setMode]=useState('login');
    const [show,setShowPassword]=useState(false);
    return(
        <section className="landing-area">
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
                <form action="">
                    {mode === "signup" && (
                        <div className="form-group icon-area">
                            <label>Full Name</label>
                            <div className="the-area">
                                <input type="text" placeholder="Dr.Alex Morgan" />
                                <span className="left">
                                    <i class="ri-user-line"></i>
                                </span>
                            </div>
                            
                        </div>
                    )}
                    <div className="form-group icon-area">
                             <label>Work Email</label>
                             <div className="the-area">
                                <input type="email" placeholder="alex@lunaclinic.com" required />
                                <span className="left">
                                    <i class="ri-mail-line"></i>
                                </span>
                             </div>
                            
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <div className="the-area">
                            <input type={show ? "text":"password"} placeholder="*******" minLength={7} required />
                            <span className="left">
                                <i class="ri-shield-fill"></i>
                            </span>
                           <button onClick={()=>setShowPassword(!show)} className="right" type="button">
                            {show ? "Hide":"Show" }
                           </button>
                        </div>
                    </div>
                    <button type="submit">{mode === "login"?"Sign in to workspace":"Create my account"} <span ><i className="ri-arrow-right-line"></i></span></button>
                </form>
            </div>
        </section>
    );
}
export default Landing