import useAuth from '../hooks/useAuth';

import { LuMapPin,LuCalendarDays , LuUsers  } from "react-icons/lu";

const AllEventsCard = ({events,handleJoin}) => {
    const{_id,title,name, image, description, date, time, location, attendeeCount} = events || {};
    const {user} = useAuth();
    const isPast = new Date(`${events.date}T${events.time}`) < new Date();
    const joiner = events.joinedUsers?.includes(user?._id);
    const created = events.createdBy == user._id;
    return (
        <div className='mt-8'> 
            <div key={_id}  className="bg-slate-50  rounded-2xl shadow-lg overflow-hidden  flex flex-col h-full
                     group hover:ring-2 hover:ring-blue-500  transform duration-500 hover:scale-105 hover:shadow-xl">
            {/* Image */}
            <img className="w-full h-52 object-cover" src={image} alt="Survey" />

            {/* Content */}
            <div className="p-5 flex-grow flex flex-col  ">
              <h2 className=" text-gray-900  text-xl lg:text-lg xl:text-xl  font-bold mb-2">{title}</h2>
               
              
          {/* Fixed Height Description */}
              <p className="text-gray-600  mt-4 flex-grow h-[98px] font-medium ">
                {description}
              </p>


          <h3 className="text-base mt-2 flex font-medium text-blue-600"><LuMapPin className='mt-1 mr-1 text-gray-500' /> Location: <span className='font-normal text-black ml-2'> {location}</span> </h3>

              <h3 className={`text-base mt-2 flex font-medium  ${
    isPast ? "text-red-600" : "text-green-600"
  }`}> <LuCalendarDays  className='mt-1 mr-1 text-gray-500' />Date and Time: <span className='font-normal text-black ml-2'>{new Date(`${date}T${time}`).toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  })}</span>
  
</h3>

             
              <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-1 text-gray-600">
                    <h3 className='flex font-normal'> <LuUsers className='mt-1 mr-1' /> People Joining: </h3>
                    <span className="font-medium text-green-600 ">{attendeeCount}</span>
                  </div>
  
                </div>

                <div className="flex items-center space-x-1 text-gray-600 text-base">
                  <h3 className='font-normal'>Post by: </h3>
                  <span className="font-medium "> {name} </span>
                </div>
              </div>

           
              <button
              onClick={() => handleJoin(_id)}
              disabled={joiner || created}
                    className={`mt-8     rounded-lg font-semibold text-center  mx-auto  text-lg    flex border-2 bottom-0   p-2 px-6 capitalize   transform ease-in-out delay-75 opacity-85 hover:opacity-100 ${joiner || created ?"bg-gray-400 text-white border-gray-500 cursor-not-allowed":"border-blue-600 text-blue-600 group-hover:bg-blue-500 group-hover:text-white "}`}>
                Join Event
             
              </button>
               
               
          
            </div>
          </div>
        </div>
    );
};

export default AllEventsCard;