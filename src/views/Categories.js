import React from "react";
import { Link } from "react-router-dom";
import CategoryDetails from "./CategoryDetails.js";
// import CategoryItem from "./CategoryItem.js";

const categories = [
  { id: "id-1", name: "development" },
  { id: "id-2", name: "design" },
  { id: "id-3", name: "automatization" },
  { id: "id-4", name: "art" },
];

function Categories({ match }) {
  // const { match } = this.props;

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((cat) => {
          return (
            <li key={cat.id}>
              <Link to={`${match.url}/${cat.id}`}>{cat.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Categories;
