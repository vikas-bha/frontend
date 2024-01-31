import React, {useEffect, useState} from 'react';
import { Navigate } from 'react-router-dom';


const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);


    const dummyUser = {
      email : "vbhardwaj347@gmail.com",
      password: "12345678"
    }

    useEffect(()=>{
        console.log("signup got called")
    })
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // call that signup/ login api here
      console.log(`Email: ${email}, Password: ${password}`);
      if(dummyUser.email === email && dummyUser.password === password){
          console.log("password and username is correct")
          setLoggedIn(true);
      }
      else{
        console.log("wrong");
      }
    };

    if(loggedIn){
      return <Navigate to="/dashboard" />;
    }
  
  
    return (
      
  
    
    
      <div className="flex items-center justify-center h-screen">
        <form className="bg-white p-8 rounded shadow-md" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-semibold mb-4">{'Login'}</h2>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline-blue"
          >
            Login
          </button>
        
        </form>
      </div>
    );
}

export default Signup