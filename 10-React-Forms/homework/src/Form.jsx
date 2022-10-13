import React from 'react';
import { useState } from 'react';

export const validate = (input) => {
  let errors = {};
  if (!input.username) {
     errors.username = "Username is required";
  }
  else if (!/\S+@\S+\.\S+/.test(input.username)) {
     errors.username = "Username is invalid";
  }

  if (!input.password) {
    errors.password = "Password is required";
  }
  else if (!/(?=.*[0-9])/.test(input.password)){
    errors.password = "Password is invalid";
  }
  return errors;
}


export default function  Form() {

  const [input, setInput] = useState({
    username: "",
    password: ""
  });

  const [errors, setError] = useState({});
 
  const handleInputChange = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });

    setError(validate({
      ...input,
      [e.target.name]: e.target.value}));
  }

  return (
    <form>
      <div>
        <label>Username:</label>
        <input 
          type="text" 
          name="username"
          value={input.username} 
          onChange={handleInputChange}
          className={errors.username && 'danger'}
        />
        {errors.username && (<p className='danger'>{errors.username}</p>)}
      </div>
      <div>
        <label>Password:</label>
        <input 
          type="password" 
          name="password" 
          value={input.password} 
          onChange={handleInputChange}
          className={errors.password && 'danger'}
        />
        {errors.password && (<p className='danger'>{errors.password}</p>)}
      </div>
      <div>
        <input 
          type="submit"
          disabled={Object.keys(errors).length > 0 || !input.username || !input.password} 
        />
      </div>
    </form>
  )
}
