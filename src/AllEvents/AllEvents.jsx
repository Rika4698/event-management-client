import React, { useEffect, useState } from 'react';
import { LuX } from "react-icons/lu";
import useAxios from '../hooks/useAxios';
import useAuth from '../hooks/useAuth';
import AllEventsCard from './AllEventsCard';
import swal from 'sweetalert';
const AllEvents = () => {
    const axiosSecure = useAxios();
    const {user} = useAuth();
    const [events, setEvents] = useState([]);
    const[search, setSearch] = useState('');
    const[selectDate, setSelectDate] = useState('');
    const [selected, setSelected] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const res = await axiosSecure.get("/events", {
          params: {
           search:search,
           date:selectDate,
           range:selected,
          },
        });
        setEvents(Array.isArray(res.data) ? res.data : []);
      } catch (error) {
        console.error("Error fetching events:", error);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, [search, selectDate, selected]);

  

    const handleClearFilters = () =>{
        setSearch('');
        setSelectDate('');
        setSelected('');
    };

    const handleJoin = async (id) => {
      try{
        await axiosSecure.post(`/join/${id}`, null,{
          headers:{
            userid: user._id,
          },
        });
        setEvents((prev) => 
        prev.map((event) => 
        event._id === id ? 
        {
          ...event,
          attendeeCount: event.attendeeCount + 1,
          joinedUsers: [...event.joinedUsers, user._id],
        }: event
      )
      );
      swal({
       title: 'okay!',
       text: 'Join Event Successfully ',
       icon: 'success',
                });
      } catch(err){
        console.log(err);
      }
    };

    if(loading){
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner text-black w-16 h-16"></span>
      </div>
    };

    return (
        <div className="mt-32">
      <h2 className="text-4xl font-bold mb-4 text-center font-serif text-sky-600">All Events</h2>

      {/* Filter UI */}
      <div className="flex gap-6 mb-6 mt-8 flex-wrap justify-center mx-auto  px-3">
        <input
          type="text"
          placeholder="Search by Title"
          className="border-2 px-3 py-2 rounded-lg w-[320px] border-sky-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          
        />
        <input
          type="date"
          className="border-2 px-3 py-2 rounded-lg w-[250px] border-sky-500"
          value={selectDate}
          onChange={(e)=> setSelectDate(e.target.value)}
          
        />
        <select
          className={`border-2 px-3 py-2 rounded-lg w-[250px] border-sky-600 ${selected ? "text-slate-900" : "text-slate-400"}` }
          value={selected}
          onChange={(e)=> setSelected(e.target.value)}
          
        
        >
          <option value ="" disabled className='text-gray-400'>Select a date range</option>
          <option value="today" className='text-gray-800'>Today</option>
          <option value="current-week" className='text-gray-800'>Current Week</option>
          <option value="last-week" className='text-gray-800'>Last Week</option>
          <option value="current-month" className='text-gray-800'>Current Month</option>
          <option value="last-month" className='text-gray-800'>Last Month</option>
        </select>


        <button onClick={handleClearFilters}  className="border-2 px-4 py-2 bg-white font-medium  rounded-lg hover:bg-gray-200 flex">
          Clear Filters
          <LuX  className='ml-4 mt-1 text-base text-gray-400'/>
        </button>
      </div>

      {/* Event Cards */}
      {loading ? (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner text-black w-16 h-16"></span>
      </div>
    ) : events.length === 0 ? (
        <p className="text-center text-gray-500 font-semibold text-xl mt-28">
          No events found.
        </p>
      ) : (
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mx-3 sm:mx-6 my-10 ">
        {events && events.map(event => <AllEventsCard key={event._id} events={event} handleJoin={handleJoin}></AllEventsCard>)}
      </div>)}
    </div>
    );
};

export default AllEvents;