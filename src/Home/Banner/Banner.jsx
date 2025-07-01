import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div
      className="hero min-h-[500px] mt-20"
      style={{
        backgroundImage:
          'url(https://i.ibb.co/0F70htt/wepik-export-20231106060519-ISr-G.png)',
      }}
    >
      {/* ✅ Add proper overlay */}
      <div className="hero-overlay bg-black bg-opacity-60"></div>

      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md lg:min-w-[700px]">
          <h1 className="mb-5 text-5xl md:text-6xl font-bold text-center text-blue-300 drop-shadow-lg">
            Welcome to our EventNest
          </h1>

          <p className="mb-5 text-orange-200 font-medium drop-shadow-md">
            Plan, organize, and manage your events seamlessly. From creating to joining,
            our platform simplifies every step of the event experience.
          </p>

          <Link to="/about">
            <button className="btn bg-blue-500 hover:bg-blue-400 font-bold">
              Explore Now
            </button>
          </Link>
        </div>
      </div>
    </div>
    );
};

export default Banner;