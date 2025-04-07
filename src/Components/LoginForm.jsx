import { useState } from "react";

 export const LoginForm=()=>{
    const[user,setUser]=useState({
       email :"",
       password :"",

    });
    const handleInputChange=(e)=>{
        const {name,value}=e.target;
        setUser((prev)=>({...prev,[name]:value}));
    }

    const handleFormSubmit=(event)=>{
        event.preventDefault();
        console.log(user);

        setUser({
            email:"",
            password:"",
        });
    }
    return(
    <>
    <div className="form-container">
        <h1>Login</h1>
        <p className="subtitle">Fill this form for Login</p>
        <form className="form-fields" onSubmit={handleFormSubmit} >
        <label htmlFor="name">Email</label>
        <input type="text" id="email" name="email" placeholder="Enter your email" required value={user.email} onChange={handleInputChange}/>
        <label htmlFor="name">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your Password" required value={user.password} onChange={handleInputChange}/>
        <p className="terms">By creating an account, you agree to our <a href="#">Terms & Policy</a>.</p>
        <button type="submit" className="submit-btn">Login</button>
        </form>
    </div>
    </>
    );
}