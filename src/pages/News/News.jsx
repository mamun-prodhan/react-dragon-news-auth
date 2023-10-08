import { Link, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";

const News = () => {
  const { id } = useParams();
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <h2 className="text-xl font-bold gap-6 mt-8">
        <Link to="/">Dragon News</Link>
      </h2>
      <div className="grid md:grid-cols-4">
        <div className="col-span-3">News of {id}</div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default News;
