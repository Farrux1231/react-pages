import "./style.css";
import photo from "../../assets/blogpage.jpg"
const BlogPage = () => {
  return (
    <div className="p-[30px]">
      <div className="max-w-4xl mx-auto   p-6 rounded-xl bg-white">
        <h2 className="text-2xl font-bold text-center mb-2">
          A UX Case Study on Creating a Studious Environment for Students
        </h2>
        <p className="text-center text-sm text-gray-600 mb-4">
          Andrew Jonson Posted on 27th January 2021
        </p>
        
        <div className="mb-6">
          <img
            src={photo} 
            alt="Studious Environment"
            className="w-full h-auto rounded-lg"
          />
        </div>

        <p className="text-sm text-gray-700 mb-4">
          Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the
          stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the
          spectator on a hillside.
        </p>

        <div className="text-center">
          <a href="#" className="text-blue-500 underline text-sm">Read more</a>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
