import React from "react";
import Image from "next/image";
import Link from "next/link";

const Products = ({ productData }) => {
  return (
    <div className="w-full px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {productData.map(
        ({
          _id,
          title,
          category,
          description,
          image,
          price,
        }) => (
          <div
            key={_id}
            className="w-full bg-white text-black p-4 border border-gray-300 rounded-lg group overflow-hidden"
          >
            <div className="w-full h-[260px] relative">
              <Link
                href="/"
              >
                <Image
                  className="w-full h-full object-cover scale-90 hover:scale-100 transition-transform duration-300"
                  width={300}
                  height={300}
                  src={image}
                  alt="productImage"
                />
              </Link>
            </div>
            <hr />
            <div className="px-4 py-3 flex flex-col gap-1">
              <p className="text-xs text-gray-500 tracking-wide">{category}</p>
              <p className="text-base font-medium">{title}</p>
              <p className="flex items-center gap-2">
                <span className="text-sky-500 font-semibold">
                  {price}
                </span>
              </p>
              <p className="text-xs text-gray-600 text-justify">
                {description.substring(0, 120)}
              </p>
              <button
                className="h-10 font-medium bg-sky-500 text-white rounded-md hover:bg-yellow-500 hover:text-black duration-300 mt-2"
              >
                Show More
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Products;