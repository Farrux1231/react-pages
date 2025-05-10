import "./style.css";
import { Headphones, Rocket, CheckCircle, Repeat, Palette } from "lucide-react";

const features = [
  { title: "Uses Client First", description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi.", icon: null },
  { title: "Two Free Revision Round", description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi.", icon: <Repeat className="text-blue-600 w-6 h-6" /> },
  { title: "Template Customization", description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi.", icon: <Palette className="text-blue-600 w-6 h-6" /> },
  { title: "24/7 Support", description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi.", icon: <Headphones className="text-blue-600 w-6 h-6" /> },
  { title: "Quick Delivery", description: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi.", icon: <Rocket className="text-blue-600 w-6 h-6" /> },
  { title: "Hands-on approach", description: "<em>Euismod faucibus</em> turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi.", icon: <CheckCircle className="text-blue-600 w-6 h-6" /> },
];

const HomePage = () => {
  return (
    <div className="bg-[#f8f9fc] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-gray-500">Features</p>
        <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-10">
          Design that solves problems, one product at a time
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              {feature.icon && <div className="mb-4">{feature.icon}</div>}
              <h3 className="font-semibold text-lg text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: feature.description }}></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
