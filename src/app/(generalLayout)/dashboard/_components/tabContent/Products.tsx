import { ProductCard } from "../../products/_components/ProductCard";

const Products = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <ProductCard index={1} />
      <ProductCard index={2} />
      <ProductCard index={1} />
      <ProductCard index={2} />
      <ProductCard index={1} />
      <ProductCard index={2} />
      <ProductCard index={1} />
      <ProductCard index={2} />
    </div>
  );
};

export default Products;
