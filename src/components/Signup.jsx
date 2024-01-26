import React, {useEffect, useState} from 'react'

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(true);

    useEffect(()=>{
        console.log("signup got called")
    })
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // call that signup/ login api here
      console.log(`Email: ${email}, Password: ${password}, Mode: ${isSignUp ? 'Sign Up' : 'Login'}`);
    };
  
  
    return (
      
  
    
    
      <div className="flex items-center justify-center h-screen">
        <form className="bg-white p-8 rounded shadow-md" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-semibold mb-4">{isSignUp ? 'Sign Up' : 'Login'}</h2>
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
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>
          <p className="mt-4">
            {isSignUp ? 'Already have an account? ' : 'Don\'t have an account? '}
            <button
              type="button"
              className="text-blue-500 underline focus:outline-none"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? 'Login' : 'Sign Up'}
            </button>
          </p>
        </form>
      </div>
    );
}

export default Signup