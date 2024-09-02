import React, { useEffect, useState } from "react";
import ProductImageGallery from "../organisms/ProductImageGallery";
import SingleProductInfo from "../organisms/SingleProductInfo";
import { useParams } from "react-router-dom";
import axios from "axios";
const apiUrl = import.meta.env.VITE_BASE_URL;

const SingleProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${apiUrl}/api/v1/product/${id}`);
        setProduct(res.data);
        console.log(res.data);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div className="grid lg:grid-cols-7 grid-cols-4  gap-6">
      <div className="col-span-4">
        <ProductImageGallery product={product} />
      </div>
      <div className="col-span-3 lg:px-0 md:px-12 px-5">
        <SingleProductInfo product={product} />
      </div>
    </div>
  );
};

export default SingleProductDetails;
