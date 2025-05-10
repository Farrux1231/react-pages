import "./style.css";

const PricingPage = () => {
  return (
    <section className="bg-white text-gray-800 py-12">
      {/* Pricing Plans Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Our Pricing Plans</h2>
        <p className="text-gray-600 mt-2">
          When you're ready to go beyond prototyping in Figma, we're ready to help you bring your designs to life — without coding them.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="border rounded-lg p-6 shadow-md text-center">
          <h3 className="text-xl font-bold text-gray-800">$299</h3>
          <p className="text-sm text-gray-500">Per Design</p>
          <h4 className="text-lg font-semibold mt-4">Landing Page</h4>
          <p className="text-gray-600 mt-2 mb-4">
            When you're ready to go beyond prototyping in Figma.
          </p>
          <ul className="text-gray-600 space-y-2">
            <li>✔️ All limited links</li>
            <li>✔️ Own analytics platform</li>
            <li>✔️ Chat support</li>
            <li>✔️ Optimize hashtags</li>
            <li>✔️ Unlimited users</li>
          </ul>
          <button className="mt-6 px-4 py-2 bg-black text-white rounded-lg">Get started</button>
        </div>

        {/* Card 2 */}
        <div className="border rounded-lg p-6 shadow-md bg-indigo-600 text-white text-center">
          <h3 className="text-xl font-bold">$399</h3>
          <p className="text-sm">Multi Design</p>
          <h4 className="text-lg font-semibold mt-4">Website Page</h4>
          <p className="mt-2 mb-4">
            When you're ready to go beyond prototyping in Figma.
          </p>
          <ul className="space-y-2">
            <li>✔️ All limited links</li>
            <li>✔️ Own analytics platform</li>
            <li>✔️ Chat support</li>
            <li>✔️ Optimize hashtags</li>
            <li>✔️ Unlimited users</li>
          </ul>
          <button className="mt-6 px-4 py-2 bg-yellow-400 text-black rounded-lg">Get started</button>
        </div>

        {/* Card 3 */}
        <div className="border rounded-lg p-6 shadow-md text-center">
          <h3 className="text-xl font-bold text-gray-800">$499+</h3>
          <p className="text-sm text-gray-500">Per Design</p>
          <h4 className="text-lg font-semibold mt-4">Complex Project</h4>
          <p className="text-gray-600 mt-2 mb-4">
            When you're ready to go beyond prototyping in Figma.
          </p>
          <ul className="text-gray-600 space-y-2">
            <li>✔️ All limited links</li>
            <li>✔️ Own analytics platform</li>
            <li>✔️ Chat support</li>
            <li>✔️ Optimize hashtags</li>
            <li>✔️ Unlimited users</li>
            <li>✔️ Assist and help</li>
          </ul>
          <button className="mt-6 px-4 py-2 bg-black text-white rounded-lg">Contact us</button>
        </div>
      </div>
    </section>
  );
};

export default PricingPage;
