const About = () => {
  return (
    <div className="mt-20 px-6 py-12 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-sky-700 mb-6 font-serif">About Us</h1>
        <p className="text-lg text-gray-700 font-medium leading-relaxed">
          <span className="text-sky-600 font-semibold">EventNest</span> is your all-in-one event management platform, designed to simplify the process of planning, organizing, and attending events. Whether you're hosting a conference, workshop, concert, or community meet-up — our platform empowers you with intuitive tools to create impactful events.
        </p>
      </div>

      <div className="mt-14 grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h3 className="text-2xl font-semibold text-purple-700 mb-3">Our Mission</h3>
          <p className="text-gray-600">
            Our mission is to bridge the gap between event organizers and attendees by providing a user-friendly, efficient, and dynamic platform that enhances the overall event experience.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6">
          <h3 className="text-2xl font-semibold text-purple-700 mb-3">What We Offer</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Create and manage your own events</li>
            <li>Join events with one click</li>
            <li>Filter and search by date, category, and location</li>
            <li>Track attendees and engagement easily</li>
            <li>Secure authentication and user control</li>
          </ul>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Have questions or feedback?</h3>
        <p className="text-gray-600 mb-4">We're here to help. Reach out to our team anytime!</p>
        <a href="/contact" className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default About;