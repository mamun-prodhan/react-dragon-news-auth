import logo from "../../../assets/logo.png";
import moment from "moment";
const Header = () => {
  return (
    <div>
      <img className="mx-auto mt-12 mb-5" src={logo} alt="" />
      <h2 className="text-xl text-center mb-3">
        Journalism Without Fear or Favour
      </h2>
      <p className="text-center font-medium">
        {moment().format("dddd, MMMM D, YYYY")}
      </p>
    </div>
  );
};

export default Header;
