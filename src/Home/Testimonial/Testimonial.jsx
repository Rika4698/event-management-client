import  { useState, useEffect } from "react";

// Testimonial data
const testimonials = [
  {
    quote:
      "EventNest streamlined our entire event planning process. From creating internal training sessions to public product launches—everything became easier and faster. The interface is intuitive and our team loves using it!",
    name: "Gregory Brock",
    position: "Corporate Client",
    image: "https://i.ibb.co/NmQpMC3/wepik-export-20231109102749h-Uhr.png/50",
  },
  {
    quote: "EventNest is a game-changer for our campus events. I can now manage registrations, update event details, and track attendance without endless spreadsheets. It’s modern, efficient, and student-friendly.",
    name: "David Johnson",
    position: "University Organizer",
    image: "https://i.ibb.co/0n6HfWq/wepik-export-20231109102824kuu-C.png/50",
  },
  {
    quote:
      "We hosted our largest tech conference ever using EventNest and it went flawlessly. From speaker sessions to attendee updates, everything ran like clockwork. We’ll definitely keep using it for future events.",
    name: "Jane Smith",
    position: "Tech Conference Host",
    image: "https://i.ibb.co/sF3x7dX/wepik-export-20231109102936x-Mh8.jpg/50",
  },
  {
    quote:
      "As someone who runs multiple community events every month, EventNest has been a lifesaver. The event creation flow is super smooth and the attendee tracking makes follow-up effortless. Highly recommend!",
    name: "Jarin Smith",
    position: "Independent Organizer",
    image: "https://i.ibb.co/j3x4d3R/wepik-export-20231109103145-I7-Pj.png/50",
  },
];

const Testimonial = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const totalTestimonials = testimonials.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % totalTestimonials);
        }, 5000); // Change testimonial every 5 seconds

        return () => clearInterval(interval);
    }, [totalTestimonials]);

    const fadeInUp = {
        animation: 'fadeInUp 0.8s ease-out'
    };

    return (
        <div className="py-16 bg-white dark:bg-zinc-700  ">
            <div className="flex flex-col items-center justify-center">
                <h2 className="font-semibold w-full text-center text-3xl md:text-3xl lg:text-5xl text-blue-600  font-serif">
                    Client <span className="text-sky-700 ">Testimonials</span>
                </h2>
                <p className="text-sm flex mt-3 text-center text-slate-800 dark:text-slate-300 font-serif">
                    Discover What Our Clients Say
                </p>
            </div>

            <div className="testimonial-carousel flex overflow-x-hidden relative mt-10 ">
                {testimonials.map((testimonial, index) => {
                    const isVisible = index === currentTestimonial;
                    return (
                        <div
                            key={index}
                            className="testimonial-card w-full flex-shrink-0 snap-start px-4"
                            style={{ display: isVisible ? 'block' : 'none' }}
                        >
                            <div className="bg-purple-100 p-8 rounded-lg shadow-md mx-auto max-w-xl  border">
                                <p
                                    className="text-gray-600 text-lg mb-4"
                                    style={isVisible ? fadeInUp : {}}
                                >
                                   <span className="text-xl  font-semibold ">"</span> <span className="font-bold text-blue-600">{testimonial.quote}</span> <span className="text-xl  font-semibold ">"</span> 
                                </p>
                                <div className="flex items-center">
                                    <img
                                        src={testimonial.image}
                                        alt={`Client ${index + 1}`}
                                        className="rounded-full w-12 h-12 mr-4"
                                    />
                                    <div>
                                        <h4 className="font-semibold">{testimonial.name}</h4>
                                        <p className="text-gray-500 font-medium text-sm">{testimonial.position}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Testimonial;
