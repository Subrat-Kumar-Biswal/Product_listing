import { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';

function ProductListingPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOption, setSortOption] = useState('recommended');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filters, setFilters] = useState({
    customizable: false,
    idealFor: {
      Men: false,
      Women: false,
      'Baby & Kids': false,
    },
  });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('https://fakestoreapi.com/products');
      setProducts(res.data);
      setFilteredProducts(res.data);

      const allCategories = ['All', ...new Set(res.data.map((p) => p.category))];
      setCategories(allCategories);
    } catch (error) {
      console.error('Failed to fetch products', error);
    }
  };

  useEffect(() => {
    handleFilterAndSort();
  }, [sortOption, selectedCategory, filters]);

  const handleFilterAndSort = () => {
    let updated = [...products];

    // Filter by category
    if (selectedCategory !== 'All') {
      updated = updated.filter((product) => product.category === selectedCategory);
    }

    // Filter by customizable
    if (filters.customizable) {
      updated = updated.filter((product) => product.title.toLowerCase().includes('custom'));
    }

    // Filter by "Ideal For"
    const selectedIdeals = Object.entries(filters.idealFor)
      .filter(([_, value]) => value)
      .map(([key, _]) => key);

    if (selectedIdeals.length > 0) {
      updated = updated.filter((product) =>
        selectedIdeals.some((ideal) => product.title.toLowerCase().includes(ideal.toLowerCase()))
      );
    }

    // Sort
    if (sortOption === 'lowest') {
      updated.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'highest') {
      updated.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'newest') {
      updated.sort((a, b) => b.id - a.id);
    }

    setFilteredProducts(updated);
  };

  return (
    <div className="flex">
      <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
        filters={filters}
        setFilters={setFilters}
      />

      {/* Products */}
      <div className="flex-1 p-8 ml-28 lg:ml-0">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Discover Our Products</h1>

          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="recommended">Recommended</option>
            <option value="newest">Newest</option>
            <option value="lowest">Price: Low to High</option>
            <option value="highest">Price: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="w-full border rounded p-4">
              <img
                src={product.image}
                alt={product.title}
                className="h-40 w-full object-contain mb-4"
              />
              <h2 className="font-semibold text-lg truncate">{product.title}</h2>
              <p className="text-gray-600 mt-2">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductListingPage;
