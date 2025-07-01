import  { useEffect, useState } from 'react';
import useAxios from '../hooks/useAxios';
import useAuth from '../hooks/useAuth';
import { LuMapPin,LuCalendarDays , LuUsers  } from "react-icons/lu";
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const MyEvent = () => {
    const axiosSecure = useAxios();
    const {user} = useAuth();
    const [myEvents, setMyEvents] = useState([]);
     const [loading, setLoading] = useState(true);

    const fetchMyEvents = async () => {
  try {
    setLoading(true);
    const res = await axiosSecure.get(`/my-events/${user._id}`);
    setMyEvents(res.data);
  } catch (error) {
    console.error("Error fetching your events:", error);
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
  if (user?._id) {
    fetchMyEvents();
  }
}, [user]);


const handleDelete = async (id) => {
    const confirm = await swal({
      title: "Are you sure?",
      text: "You won't be able to recover this event!",
      icon: "warning",
      buttons: ["Cancel", "Delete"],
      dangerMode: true,
    });

    if (!confirm) return;

    try {
      const res = await axiosSecure.delete(`/event/${id}`);
      if (res.data.deletedCount > 0) {
        swal({
                            
                              title: "Deleted!",
                              text: "Event has been deleted.",
                              icon: "success",
                              timer:1600,
                            
                          });
        
        setMyEvents(prev => prev.filter(event => event._id !== id));
      }
    } catch (err) {
      console.error("Error deleting event:", err);
      swal("Error", "Something went wrong while deleting!", "error");
    }
  };
    return (
         <div className="mt-32">
              <h2 className="text-4xl font-bold mb-4 text-center font-serif text-sky-700">My Events</h2>
        
            
        
              {/* Event Cards */}
              {loading ? (
              <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner text-black w-16 h-16"></span>
              </div>
            ) : myEvents.length === 0 ? (
                <p className="text-center text-gray-500 font-semibold text-xl mt-28">
                  No events found.
                </p>
              ) : (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7 mx-3 sm:mx-6 my-10">
                {myEvents.map(event =>(  <div key={event._id}  className="bg-slate-50  rounded-2xl shadow-lg overflow-hidden  flex flex-col h-full
                                     group hover:ring-2 hover:ring-blue-500  transform duration-500 hover:scale-105 hover:shadow-xl">
                            {/* Image */}
                            <img className="w-full h-52 object-cover" src={event.image} alt="Survey" />
                
                            {/* Content */}
                            <div className="p-5 flex-grow flex flex-col  ">
                              <h2 className=" text-gray-900  text-xl lg:text-lg xl:text-xl  font-bold mb-2">{event.title}</h2>
                               
                              
                          {/* Fixed Height Description */}
                              <p className="text-gray-600  mt-4 flex-grow h-[98px] font-medium ">
                                {event.description}
                              </p>
                
                
                          <h3 className="text-base mt-2 flex font-medium text-blue-600"><LuMapPin className='mt-1 mr-1 text-gray-500' /> Location: <span className='font-normal text-black ml-2'> {event.location}</span> </h3>
                
                              <h3 className={`text-base mt-2 flex font-medium  ${
                    new Date(`${event.date}T${event.time}`) < new Date()? "text-red-600" : "text-green-600"
                  }`}> <LuCalendarDays  className='mt-1 mr-1 text-gray-500' />Date and Time: <span className='font-normal text-black ml-2'>{new Date(`${event.date}T${event.time}`).toLocaleString('en-US', {
                    dateStyle: 'medium',
                    timeStyle: 'short',
                  })}</span>
                  
                </h3>
                
                             
                              <div className="flex justify-between items-center mt-4">
                                <div className="flex space-x-4">
                                  <div className="flex items-center space-x-1 text-gray-600">
                                    <h3 className='flex font-normal'> <LuUsers className='mt-1 mr-1' /> People Joining: </h3>
                                    <span className="font-medium text-green-600 ">{event.attendeeCount}</span>
                                  </div>
                  
                                </div>
                
                                <div className="flex items-center space-x-1 text-gray-600 text-base">
                                  <h3 className='font-normal'>Post by: </h3>
                                  <span className="font-medium "> {event.name} </span>
                                </div>
                              </div>
                
                           
                              <div className="flex items-center justify-between mt-4 p-4 border-t-2  border-gray-200">
      <Link to={`/update/${event._id}`}>
      <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 border-b-4 border-teal-700 rounded transform transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
      Update
            </button> </Link>


            <button onClick={() => handleDelete(event._id)} className="px-4 py-2 border-b-4 border border-red-500 text-red-500 hover:text-white hover:bg-red-500 transition-all duration-200">
            Delete
            </button>
        </div>
                               
                               
                          
                            </div>
                          </div>))}
              </div>)}
            </div>
    );
};

export default MyEvent;