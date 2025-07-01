import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAxios from '../hooks/useAxios';
import swal from "sweetalert";


const UpdateEvent = () => {
    const {id} = useParams();
   
    const axiosSecure = useAxios();
    const navigate = useNavigate();
     const [myEvents, setMyEvents] = useState([]);
     const [loading, setLoading] = useState(true);

     const fetchEvent = async () => {
  try {
    setLoading(true);
    const res = await axiosSecure.get(`/event/${id}`);
    setMyEvents(res.data);
  } catch (error) {
    console.error("Error fetching event:", error);
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
  if (id) fetchEvent();
}, [id]);

    const handleUpdate = async (e) =>{
        e.preventDefault();
        const form = e.target;
        const updateEvent = {
            title:form.title.value,
            name:form.name.value,
            image:form.image.value,
            location: form.location.value,
      description: form.description.value,
      date: form.datetime.value.split("T")[0],
      time: form.datetime.value.split("T")[1],
        };

        try{
            await axiosSecure.put(`/event/${id}`, updateEvent);
            swal({
                title: 'Success!',
            text: 'Event Update Successfully ',
            icon:'success',
            })
            navigate(-1);
        } catch(err){
            console.error("Error updating:", err);
        }

    };
    if (loading) return <p className="text-center mt-32">Loading...</p>;
   
    return (
        <div className="mt-20">
            <div className="flex justify-center items-center min-h-screen bg-gray-100    ">
        <form onSubmit={handleUpdate}  className="bg-cyan-100  rounded-lg p-6 w-full max-w-2xl lg:max-w-4xl xl:max-w-6xl my-10 lg:my-14 shadow-slate-700  ">
          <h2 className="text-4xl font-bold text-sky-700 mb-6 text-center mt-8  ">Update Event</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-16 mx-4 ">

            <div className="mb-4">
              <label  className="block text-base  font-semibold text-gray-600 mb-2 lg:text-xl ">Event Title:</label>
              <input
              type="text" name="title" placeholder="Enter Title"  
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500  focus:outline-none" defaultValue={myEvents?.title}
              />
            </div>

             <div className="mb-4">
              <label className="block text-base font-semibold text-gray-600 mb-2 lg:text-xl ">Your Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                defaultValue={myEvents.name}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500  focus:outline-none " 
              />
            </div>

            <div className="mb-4">
              <label className="block text-base font-semibold text-gray-600 mb-2 lg:text-xl ">Event Image:</label>
              <input
                type="url"
                name="image"
                placeholder="Enter Photo URL"
                 defaultValue={myEvents.image}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500  focus:outline-none " 
              />
            </div>


            <div className="mb-4">
              <label className="block text-base font-semibold text-gray-600 mb-2 lg:text-xl ">Location:</label>
              <input 
              
                type="text"
                name="location"
                placeholder="Enter Location"
               defaultValue={myEvents.location}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500  focus:outline-none " 
              />
            </div>


            <div className="mb-4">
              <label  className="block text-base font-semibold text-gray-600 mb-2 lg:text-xl ">Date and Time:</label>
              <input
              
                type="datetime-local" name="datetime"
                 defaultValue={`${myEvents.date}T${myEvents.time}`}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500    focus:outline-none" 
              />
            </div>



            <div className="mb-4 lg:col-span-2">
              <label className="block text-base font-semibold text-gray-600 mb-2 lg:text-xl  ">Description:</label>
              <textarea
               
                type="text" name="description"
                placeholder="Enter description"
                rows="6" defaultValue={myEvents.description}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500  focus:outline-none" 
              ></textarea>
            </div>




          </div>

          {/* Add Button */}
          <div className="mt-6 mb-4 text-center">

            <button
              type="submit"
              className="w-60 lg:w-5/12 text-lg bg-sky-600  text-white font-bold py-4 px-5 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110   "
            >
              Update Event
            </button>
          </div>
        </form>
      </div> 
        </div>
    );
};

export default UpdateEvent;