function ProductCard({ product }) {
    return (
      <div className="border rounded-lg overflow-hidden shadow-sm">
        <img src={product.image} alt={product.title} className="w-full h-48 object-contain p-4" />
        <div className="p-4">
          <h3 className="font-semibold text-lg">{product.title.substring(0, 30)}...</h3>
          <p className="text-gray-600">${product.price}</p>
        </div>
      </div>
    );
  }
  
  export default ProductCard;
  