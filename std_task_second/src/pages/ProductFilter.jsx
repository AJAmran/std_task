import { useEffect, useState } from "react";
import { productData } from "../utils/data";
import ProductCard from "../components/ProductCard";

const ProductFilter = () => {
  const [filteredProduct, setFiltredProduct] = useState(productData);

  const [category, setCategory] = useState("all");

  const [price, setPrice] = useState(500);
  const handleFilter = () => {
    const filtred = productData.filter((product) => {
      return (
        (category === "all" || product.category === category) &&
        product.price <= price
      );
    });

    setFiltredProduct(filtred);
  };

  useEffect(() => {
    handleFilter();
  }, [category, price]);
  return (
    <div className="p-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="bg-white p-4 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-bold mb-4">Filter Product</h2>
          <div className="flex flex-wrap gap-4">
            {/* categroy filter */}
            <div className="flex flex-col w-1/2">
              <label htmlFor="category" className="text-lg font-semibold">
                Category
              </label>
              <select
                name="category"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-2 p-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              >
                <option value="all">All</option>
                <option value="electronics">Electronics</option>
                <option value="furniture">Furniture</option>
              </select>
            </div>

            {/* Price filter */}
            <div className="flex flex-col w-1/2">
              <label htmlFor="price" className="text-lg font-semibold">
                Max Price : ${price}
              </label>
              <input
                type="range"
                id="price"
                min="0"
                max="1000"
                step="50"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="mt-2"
              />
            </div>

            {/* Product List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProduct.length > 0 ? (
                filteredProduct.map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))
              ) : (
                <p>No products found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
