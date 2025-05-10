import "./style.css";
import page1 from"../../assets/aboutus2.png"
import page2 from"../../assets/aboutus1.jpg"
const AboutUsPage = () => {
  return (
    <section className="bg-white text-gray-800">
    <br />
      {/* About Us Header Section */}
      <div className="container mx-auto px-6 py-12 md:flex md:items-center md:gap-6">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Our designs solve problems</h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src={page1}
            alt="Team working together"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      {/* Features Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Goal focussed</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Continuous improvement</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="mt-6">
          <img
            src={page2}
            alt="Team brainstorming ideas"
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
      </div>
    </section>
  )
};

export default AboutUsPage;
