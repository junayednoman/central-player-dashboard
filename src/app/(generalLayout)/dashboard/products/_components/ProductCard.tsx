import Image from "next/image";

interface ProductCardProps {
  name?: string;
  price?: number;
  image?: string;
  imageAlt?: string;
  index: number;
}

export function ProductCard({
  name = "PRO-TEC",
  price = 8.99,
  image = "https://i.postimg.cc/yNHdgffZ/hello.png",
  imageAlt = "PRO-TEC Sneaker",
  index,
}: ProductCardProps) {
  return (
    <div className="group relative w-full max-w-xs overflow-hidden rounded-2xl bg-gray-900 p-5 transition-transform hover:scale-105 cursor-pointer">
      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 ${
          index % 2 === 0
            ? "bg-linear-to-br from-[#EF4444] to-[#EC4899]"
            : "bg-linear-to-br from-[#CF6FE5] to-[#4300C3]"
        } group-hover:opacity-100 transition-opacity duration-300`}
      ></div>

      {/* Product Info */}
      <div className="relative z-10 mb-3">
        <h3 className="text-2xl font-bold text-white">{name}</h3>
        <p className="mt-2 text-2xl font-bold text-white">
          ${price.toFixed(2)}
        </p>
      </div>

      {/* Product Image */}
      <div className="relative z-10 flex items-center justify-center">
        <div className="relative h-28 w-[70%]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 250px"
          />
        </div>
      </div>
    </div>
  );
}
