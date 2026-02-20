import AContainer from "@/components/AContainer";
import PageTitle from "@/components/others/PageTitle";
import StatCard from "@/components/others/StatCard";
import { Store } from "lucide-react";
import { ProductTable } from "./ProductTable";

const ProductContainer = () => {
  return (
    <AContainer>
      <PageTitle
        title="Product management"
        subTitle="Review, manage, and resolve user complaints to ensure a smooth and positive platform experience."
      />

      {/* stat cards */}
      <div className="grid grid-cols-5 gap-6 mt-8">
        <StatCard title="Total products" icon={<Store />} value={1205} />
        <StatCard title="Total Sales" icon={<Store />} value={"$12,245"} />
        <StatCard title="Total items sold" icon={<Store />} value={246} />
      </div>

      {/* product table */}
      <ProductTable />
    </AContainer>
  );
};

export default ProductContainer;
