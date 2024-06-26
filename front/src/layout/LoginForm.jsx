import axios from 'axios';
import { useState } from "react";
import useAuth from '../hooks/useAuth';
import '../layout/style.css';
export default function LoginForm() {
  const { setUser } = useAuth();
  const [input, setInput] = useState({
    email: '', 
    password: '',
    role: 'USER' // Default role
  });

  const hdlChange = e => {
    setInput(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const hdlSubmit = async e => {
    try {
      e.preventDefault();
      // validation
      const rs = await axios.post('http://localhost:8001/auth/login', input);
      console.log(rs.data.token);
      localStorage.setItem('token', rs.data.token);
      const rs1 = await axios.get('http://localhost:8001/auth/me', {
        headers: { Authorization: `Bearer ${rs.data.token}` }
      });
      console.log(rs1.data);
      setUser(rs1.data);
    } catch(err) {
      console.log(err.message);
    }
  };

  return (
    <div className="background-container">
      <div className='b1'>
      <div className="text-3xl mb-5">เข้าสู่ระบบ</div>
      <form className="flex flex-col gap-2" onSubmit={hdlSubmit}>
        <label className="t1">
          <img src="../phpto/images.png" alt=""className='b3 rounded-full h-8 w-8 object-contain float-right mt-[-50px]'/>
          <div className='b2'>
            <span className="label-text  text-black">Email</span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs bg-white"
            name="email"
            value={input.email}
            onChange={hdlChange}
          />
        </label>

        <label className="t2">
          <div className='b2'>
            <span className="label-text  text-black">Password</span>
          </div>
          <input
            type="password"
            className="input input-bordered w-full max-w-xs bg-white"
            name="password"
            value={input.password}
            onChange={hdlChange}
          />
        </label>


        <div className="flex gap-5 ">
          <button type="submit" className="btn btn-outline btn-info mt-7">Login</button>
        </div>
        </form>
      </div>
    </div>
  );
}
