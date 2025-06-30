import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import swal from 'sweetalert';


const Registration = () => {
    const axiosSecure = useAxios();
    const [form, setForm]=useState({
        name:'',
        photo:'',
        email:'',
        password:'',
    });

    const navigate = useNavigate();

    const handleChange = (e) =>{
        setForm({...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            await axiosSecure.post('/api/auth/register', form);
            swal({
           text: "Registration done successfully",
           icon: "success",
           timer: 1600,
            })
            navigate('/login');
        } catch (err) {
    console.log(err);
    swal({
      text: err.response?.data?.msg || "Something went wrong",
      icon: "error",
    });
  }
    };

    return (
        <div className="my-10">
             <div className="max-w-lg mx-auto  bg-white  rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
    <h1 className="text-xl font-bold text-center text-blue-600 font-serif mb-5 ">Welcome to EventNest</h1>
    <h3 className="text-lg font-bold text-center text-gray-700 font-serif mb-5 ">Create a account</h3>

    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
      <div className="flex items-start flex-col justify-start">
        <label  className="text-sm text-gray-700  mr-2">User Name:</label>
        <input onChange={handleChange} type="text"  name="name" className="w-full px-3 bg-white py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Enter User Name" required/>
      </div>

      <div className="flex items-start flex-col justify-start">
        <label  className="text-sm text-gray-700  mr-2">Photo URL:</label>
        <input onChange={handleChange} type="url"  name="photo" className="w-full px-3  bg-white py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Enter Photo URL" required/>
      </div>

      <div className="flex items-start flex-col justify-start">
        <label  className="text-sm text-gray-700  mr-2">Email:</label>
        <input onChange={handleChange} type="email"  name="email" className="w-full px-3  bg-white py-2 rounded-md border border-gray-300  focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Enter Email" required/>
      </div>

      <div className="flex items-start flex-col justify-start">
        <label  className="text-sm text-gray-700 mr-2">Password:</label>
        <input onChange={handleChange} type="password"  name="password" className="w-full px-3 bg-white py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Enter password" required/>
      </div>

     

      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm">Register</button>
    </form>

    <div className="mt-4 text-center">
      <span className="text-sm text-gray-500 dark:text-gray-300">Already have an account? </span>
      <Link to='/login' className="text-blue-500 font-semibold hover:text-blue-600">Login</Link>
    </div>
    
  </div>

        </div>
    );
};

export default Registration;