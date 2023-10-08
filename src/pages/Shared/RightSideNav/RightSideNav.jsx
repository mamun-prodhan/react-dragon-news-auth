import {
  FaGoogle,
  FaGithub,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import qzone1 from "../../../assets/qZone1.png";
import qzone2 from "../../../assets/qZone2.png";
import qzone3 from "../../../assets/qZone3.png";
const RightSideNav = () => {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Login With</h2>
        <button className="btn btn-outline btn-info w-full mb-2">
          <FaGoogle></FaGoogle> Login with Google
        </button>
        <button className="btn btn-outline btn-ghost w-full">
          <FaGithub></FaGithub> Login with Github
        </button>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Find Us On</h2>
        <a className="flex items-center gap-2 p-4 border rounded-t-lg" href="">
          <FaFacebookF></FaFacebookF>
          <span>Facebook</span>
        </a>
        <a className="flex items-center gap-2 p-4 border rounded-x" href="">
          <FaTwitter></FaTwitter>
          <span>Twitter</span>
        </a>
        <a className="flex items-center gap-2 p-4 border rounded-b-lg" href="">
          <FaInstagram></FaInstagram>
          <span>Instagram</span>
        </a>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Q-Zone</h2>
        <img src={qzone1} alt="" />
        <img className="my-5" src={qzone2} alt="" />
        <img src={qzone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
