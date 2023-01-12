import Heading from "../core/Heading";
import ProductCard from "./ProductCard";

const AllProducts = ({ products }) => {
  return (
    <>
      <Heading>All Our Products</Heading>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mx-20">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default AllProducts;
