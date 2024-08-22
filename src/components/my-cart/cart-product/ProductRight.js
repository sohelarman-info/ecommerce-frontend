import Link from "next/link";
import CuponIcon from "./CuponIcon";
import { FaAngleRight } from "react-icons/fa";
import { useSelector } from "react-redux";
const ProductRight = () => {
  const price = useSelector((state) => state.totalPrice.Price);

  return (
    <div className="mt-5">
      <div className="w-100 pointer cupon-wrapper justify-content-center align-items-center border-red d-flex py-2 px-3 rounded-2">
        <CuponIcon />
        <h6 className="mx-3 font-weight-bold ">Have a coupon code?</h6>
        <FaAngleRight />
      </div>
      {/* Summary */}

      <div className="mt-5 border-red px-4 rounded-4 py-4">
        <h4>Summary</h4>
        <div className="d-flex my-4 align-items-center justify-content-between">
          <p className="m-0 text-gray ">Total</p>
          <h4 className="text-red">${price}</h4>
        </div>
        <Link href="/cart/checkout">
          <button className="w-100  border-0 bg-red text-white h5 py-3 rounded-3 ">
            Checkout
          </button>
        </Link>
        <div className="text-center mt-2">
          <Link
            href="/"
            className="text-c w-100 text-decoration-none text-red h5"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductRight;
