import "./style.css";

const WorkPage = () => {
  return (
    <section className="bg-gray-50 py-12">
      {/* Portfolio Header */}
      <div className="text-center mb-12">
        <h4 className="text-sm uppercase tracking-wide text-gray-500">What we created</h4>
        <h2 className="text-3xl font-bold text-gray-800 mt-2">Our Work Portfolio</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          We help teams create great digital products by providing them with tools and technology to make the design-to-code process universally accessible.
        </p>
        <div className="flex justify-center space-x-4 mt-6">
          <a href="#" className="text-gray-500 hover:text-gray-800"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-gray-500 hover:text-gray-800"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-gray-500 hover:text-gray-800"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-gray-500 hover:text-gray-800"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>

      {/* Portfolio Filters */}
      <div className="text-center">
        <ul className="flex justify-center space-x-8 text-sm font-medium text-gray-600">
          <li className="cursor-pointer text-indigo-600">All</li>
          <li className="cursor-pointer hover:text-indigo-600">UI Design</li>
          <li className="cursor-pointer hover:text-indigo-600">Webflow Design</li>
          <li className="cursor-pointer hover:text-indigo-600">Figma Design</li>
        </ul>
      </div>
    </section>
  );
};

export default WorkPage;
