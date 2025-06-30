// import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import { useState } from "react";
import swal from 'sweetalert';


const AddEvent = () => {
    const {user} = useAuth();
    const axiosSecure = useAxios();
    // const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title:'',
        image:'',
        description:'',
        location:'',
        datetime:'',
    })

    const handleChange = (e) =>{
        setFormData((prev) =>({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(!formData.datetime.includes('T')){
            swal({
            title: 'Error',
            text: 'Invalid date and time format',
            icon: 'error',
          });
          return;

        }

        const [date, time] = formData.datetime.split('T');

        const eventData = {
            title:formData.title,
            image:formData.image,
            description:formData.description,
            location:formData.location,
            date,
            time,
            name:user?.name,
            attendeeCount:0,
            createdBy: user?._id || user?.id,

        };

        try {
            await axiosSecure.post('/events', eventData);
            swal({
            title: 'okay!',
            text: 'Event Created Successfully ',
            icon: 'success',
          });
        
        } catch(err){
            console.log(err);
            swal('Error', err.response?.data?.msg || 'Failed to create event', 'error');
        }
    };


        return (
        <div className="mt-20">
            <div className="flex justify-center items-center min-h-screen bg-gray-100    ">
        <form onSubmit={handleSubmit}  className="bg-cyan-100  rounded-lg p-6 w-full max-w-2xl lg:max-w-4xl xl:max-w-6xl my-10 lg:my-14 shadow-slate-700  ">
          <h2 className="text-4xl font-bold text-sky-700 mb-6 text-center mt-8  ">Add New Event</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-16 mx-4 ">

            <div className="mb-4">
              <label  className="block text-base  font-semibold text-gray-600 mb-2 lg:text-xl ">Event Title:</label>
              <input
              
                type="text" name="title" placeholder="Enter Title" onChange={handleChange} value={formData.title}  required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500  focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label className="block text-base font-semibold text-gray-600 mb-2 lg:text-xl ">Event Image:</label>
              <input
                type="url"
                name="image"
                placeholder="Enter Photo URL"
                 onChange={handleChange} value={formData.image} 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500  focus:outline-none " required
              />
            </div>


            <div className="mb-4">
              <label className="block text-base font-semibold text-gray-600 mb-2 lg:text-xl ">Location:</label>
              <input 
              
                type="text"
                name="location"
                placeholder="Enter Location"
                onChange={handleChange} value={formData.location}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500  focus:outline-none " required
              />
            </div>


            <div className="mb-4">
              <label  className="block text-base font-semibold text-gray-600 mb-2 lg:text-xl ">Date and Time:</label>
              <input
              
                type="datetime-local" name="datetime"
                 onChange={handleChange} value={formData.datetime}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500    focus:outline-none" required
              />
            </div>



            <div className="mb-4 lg:col-span-2">
              <label className="block text-base font-semibold text-gray-600 mb-2 lg:text-xl  ">Description:</label>
              <textarea
               
                type="text" name="description"
                placeholder="Enter description"
                rows="6" onChange={handleChange} value={formData.description}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500  focus:outline-none" required
              ></textarea>
            </div>




          </div>

          {/* Add Button */}
          <div className="mt-6 mb-4 text-center">

            <button
              type="submit"
              className="w-60 lg:w-5/12 text-lg bg-sky-600  text-white font-bold py-4 px-5 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110   "
            >
              Add Event
            </button>
          </div>
        </form>
      </div> 
        </div>
    );
};

export default AddEvent;