
import { useState } from "react";

function Filters() {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    "All",
    "Books",
    "Electronics",
    "Clothing",
    "Accessories",
    "Hostel Essentials",
    "Sports"
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="filter-wrapper">

      <button
        className="filter-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>☰</span>
        Filters
      </button>

      {isOpen && (
        <div className="filter-dropdown">

          <h3>Categories</h3>

          {categories.map((category) => (
            <label key={category} className="filter-option">

              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={() => setSelectedCategory(category)}
              />

              {category}

            </label>
          ))}

          <button
            className="apply-filter"
            onClick={() => setIsOpen(false)}
          >
            Apply Filters
          </button>

        </div>
      )}

    </div>
  );
}

export default Filters;
