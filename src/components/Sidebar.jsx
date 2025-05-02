import { useState } from "react";

function Sidebar({
  selectedCategory,
  setSelectedCategory,
  categories,
  filters,
  setFilters,
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCheckboxChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
  };

  const handleIdealForChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      idealFor: {
        ...prev.idealFor,
        [e.target.name]: e.target.checked,
      },
    }));
  };

  const resetFilters = () => {
    setFilters({
      customizable: false,
      idealFor: {
        Men: false,
        Women: false,
        "Baby & Kids": false,
      },
    });
    setIsMobileMenuOpen(false); // Close the sidebar
  };

  return (
    <>
      {/* Hamburger for mobile */}
      <div className="p-4 lg:hidden">
        <button
          className="text-xl font-bold cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰ Filters
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`absolute top-10 left-0 h-full w-47 bg-white shadow-lg z-0 transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:relative lg:translate-x-0`}
      >
        <div className="p-6 overflow-y-auto">
          {/* Hide Button for Mobile */}
          <div className="flex justify-end lg:hidden">
            <button
              className="text-sm text-gray-500 hover:underline cursor-pointer"
            
              onClick={resetFilters}
            >
              Hide Filters
            </button>
          </div>

          <h2 className="text-xl font-bold mb-6">Filters</h2>

          {/* Customizable */}
          

          {/* Ideal For */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Ideal For</h3>
            <label className="flex items-center space-x-2 mb-2">
              <input
                type="checkbox"
                name="Men"
                checked={filters.idealFor?.Men || false}
                onChange={handleIdealForChange}
              />
              <span>Men</span>
            </label>
            <label className="flex items-center space-x-2 mb-2">
              <input
                type="checkbox"
                name="Women"
                checked={filters.idealFor?.Women || false}
                onChange={handleIdealForChange}
              />
              <span>Women</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="Baby & Kids"
                checked={filters.idealFor?.["Baby & Kids"] || false}
                onChange={handleIdealForChange}
              />
              <span>Baby & Kids</span>
            </label>
          </div>

          {/* Category */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Category</h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li
                  key={cat}
                  className={`cursor-pointer ${
                    selectedCategory === cat
                      ? "font-bold text-black"
                      : "text-gray-600"
                  }`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;