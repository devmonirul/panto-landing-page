import React from "react";
import { getImgUrl } from "../../utils/getImgUrl";
import Rating from "../../components/Rating";
import { FiPlus } from "react-icons/fi";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";


const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div>
      <div className="bg-[#FAFAFA]">
        <img src={getImgUrl(`${product.imageUrl}`)} alt="" />
      </div>
      <div className="p-6 bg-white dark:bg-black shadow-sm">
        <h4 className="text-base mb-1">{product.category}</h4>
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <Rating rating={product.rating} />
        <div className="mt-5 flex justify-between items-center">
          <p className="text-secondary dark:text-white font-bold text-lg">
            <sup>$</sup>
            <span>{product.price}</span>
          </p>
          <button
            className="bg-secondary p-2 rounded-full text-white cursor-pointer"
            onClick={() => addToCart(product)}
          >
            <FiPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
