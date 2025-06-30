import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthContext";
import useAxios from "../hooks/useAxios";
import swal from "sweetalert";


const Login = () => {

    const axiosSecure = useAxios();
    const [form, setForm] = useState({email:'',password:''});
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) =>{
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const res = await axiosSecure.post("/api/auth/login", form);
            signIn(res.data.user, res.data.token);
            console.log(res.data.user);
             swal({
        
            text: "Login successfully",
            icon: "success",
            timer: 1600,
        
      });
      navigate('/');
        }   catch (err) {
       console.log(err);
       swal({
      text: err.response?.data?.msg || "Login failed",
      icon: "error",
        });
       }
    };



    return (
        <div className="my-10">
            <div className="container px-4 mx-auto">
  <div className="max-w-lg mx-auto ">
    <div className="text-center mb-8">
      <h2 className="text-3xl md:text-4xl font-bold font-serif">Login to your account</h2>
    </div>
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-md font-medium" >Email:</label>
        <input onChange={handleChange} className="inline-block w-full p-4 leading-6 text-lg font-medium bg-white shadow border-2 border-blue-700 rounded" type="email" name='email' placeholder="Enter Email" required/>
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block mb-2 text-md font-medium" >Password:</label>
        <input onChange={handleChange}  className="inline-block w-full p-4 leading-6 text-lg font-medium bg-white shadow border-2 border-blue-700 rounded" type="password" name="password" placeholder="Enter Password" required/>
      </div>
    
      <button className="inline-block w-full py-4 px-6 mb-6 text-center text-xl leading-6 text-white font-medium  bg-blue-600 hover:bg-blue-700 border-3 border-blue-800 shadow rounded transition duration-200">Login</button>
      <p className="text-center ">Don&rsquo;t have an account? <Link to='/register' className="text-blue-700 font-bold hover:underline"
          >Registration</Link></p>
    </form>
  </div>
</div>
        </div>
    );
};

export default Login;