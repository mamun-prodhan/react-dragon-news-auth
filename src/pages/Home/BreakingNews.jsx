import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex p-4 bg-[#c1c1c1] my-12">
      <button className="px-6 py-2 bg-[#D72050] text-white">Latest</button>
      <Marquee
        className="text-[#403F3F] font-semibold"
        pauseOnHover={true}
        speed={100}
      >
        <Link to="/" className="mr-12">
          I can be a React component, multiple React components, or just some
          text.
        </Link>
        <Link to="/" className="mr-12">
          I can be a React component, multiple React components, or just some
          text.
        </Link>
        <Link to="/" className="mr-12">
          I can be a React component, multiple React components, or just some
          text.
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
