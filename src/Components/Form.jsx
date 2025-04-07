import { useState } from "react";

export const Form = () => {
    const[user,setUser]=useState({
        firstName :"",
        lastName : "",
        email : "",
        password : "",
        phone : "",
    });

    const handleInputChange=(e)=>{
       const {name,value}=e.target;
       setUser((prev)=>({...prev, [name]:value}));
       
    }

    const handleFormSubmit=(event)=>{
        event.preventDefault();
        console.log(user);

        setUser({
            firstName :"",
            lastName : "",
            email : "",
            password : "",
            phone : "",

        });
      

    }
    return (
      <div className="form-container">
        <h1>Sign Up</h1>
        <p className="subtitle">Please fill this form to create an account</p>
        <form className="form-fields" onSubmit={handleFormSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" placeholder="Enter First Name" required  value={user.firstName} onChange={handleInputChange}/>
  
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" placeholder="Enter Last Name" required value={user.lastName} onChange={handleInputChange}/>
  
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter Email" required value={user.email} onChange={handleInputChange} />
  
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter Password" required value={user.password} onChange={handleInputChange}/>
  
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder="Enter Phone Number" required value={user.phone} onChange={handleInputChange}/>
  
          <p className="terms">By creating an account, you agree to our <a href="#">Terms & Policy</a>.</p>
          <button type="submit" className="submit-btn">Sign Up</button>
        </form>
      </div>
    );
  };