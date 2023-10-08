import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="space-y-3">
      <h2 className="text-xl font-semibold">
        All Category {categories.length}
      </h2>
      {categories.map((category) => (
        <button
          className="block btn btn-ghost w-full text-start"
          key={category.id}
        >
          <Link to={`/category/${category.id}`}>{category.name}</Link>
        </button>
      ))}
    </div>
  );
};

export default LeftSideNav;
