import React, { useEffect, useState } from 'react';
import useAxios from '../hooks/useAxios';
import { Link } from 'react-router-dom';

const RecentEvent = () => {
     const axiosSecure = useAxios();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axiosSecure.get('/events'); // or use /events-limited if you added the backend one
        setEvents(res.data.slice(0, 4)); // Only keep first 4
      } catch (err) {
        console.error('Error fetching events', err);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="mt-20 px-6">
      <h2 className="text-4xl font-bold mb-10 text-center text-blue-700 font-serif">Latest Events</h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 mx-6 gap-6 mt-16">
        {events.length=== 0? (<p className="text-center text-gray-500 font-semibold text-xl mt-28">
                  No events found.
                </p>): (events.map((event) => (
          <div key={event._id}  className="bg-slate-50  rounded-2xl shadow-lg overflow-hidden  flex flex-col h-full
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
                
                
                          
                
                           
                              <div className="flex items-center justify-end mt-4 p-4 ">
      <Link to={`/events`}>
      <button className=" font-bold py-2 px-4 hover:underline text-sky-700 hover:text-sky-700  ">
      see more -
            </button> </Link>


            
        </div>
                               
                               
                          
                            </div>
                          </div>)))}
              </div>
    </div>
    );
};

export default RecentEvent;