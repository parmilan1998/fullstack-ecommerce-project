import React from "react";
import Heading from "../molecules/Heading";
import Title from "../atoms/Title";
import Pagination from "../organisms/Pagination";
import { Link } from "react-router-dom";
import ProductCard from "../organisms/ProductCard";
import useFetch from "../../hooks/useFetch";
import LoadingSpinner from "../atoms/LoadingSpinner";
const apiUrl = import.meta.env.VITE_BASE_URL;

const Product = () => {
  const { data: products, isLoading } = useFetch(
    `http://localhost:8080/api/v1/product`
  );
  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="py-6 font-poppins">
      <div>
        <Heading title="Our Products" />
        <Title props="Explore Our Products" />
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 py-8">
        {products && products.length > 0 ? (
          products.map((item) => (
            <Link
              className="flex justify-center items-center"
              to={`/products/${item._id}`}
              key={item._id}
            >
              <ProductCard
                id={item._id}
                image={`${apiUrl}/${item.productImage[0]}`}
                {...item}
              />
              {/* {console.log(`${baseUrl}/${item.productImage[0]}`)} */}
            </Link>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
      {products && products.length > 0 && (
        <div className="mx-auto flex justify-center items-center py-4">
          <Pagination />
        </div>
      )}
    </div>
  );
};

export default Product;
