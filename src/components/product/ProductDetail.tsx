import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { WishlistIcon } from '../product/Wishlist'
import { useFetchProductById } from "../../api/queryClinet";
import { ProductProps } from "./ProductCard";


export function ProductDetail() {
  const navigate = useNavigate();
  const userId = window.localStorage.getItem("userId");
  const [count, setCount] = useState(1);

  const colors = [
    "bg-rose-500",
    "bg-emerald-500",
    "bg-yellow-500",
    "bg-gray-500",
    "bg-teal-500",
  ];

  const { id } = useParams();
  const { data, isLoading, error } = useFetchProductById(Number(id))
  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;
  console.log(data)
  const product: ProductProps = data

  return (
    <div className="w-full h-[90%] relative mb-10">
      {/* images && backward */}
      <div className=" w-full">
        <div>
          <img src={product?.images[0]} className="h-80 w-full object-cover"></img>
        </div>
      </div>
      <div className="px-5 pt-4 w-full">
        <div className=" h-1/4 relative mb-3 after:absolute pb-3 after:w-full after:h-full  after:top-0 after:left-0 after:border-b-2 after:border-b-solid after:border-b-slate-100 after:pointer-events-none">
          <div className="flex flex-row w-full justify-evently">
            <div className="flex flex-col space-y-3 w-full">
              <h1 className="font-bold text-3xl w-full ">{product?.name}</h1>
              <div className="flex flex-row space-x-5 w-full justify-start">
                <div className="w-1/4  bg-slate-200 rounded-lg flex justify-center items-center px-1 py-1">
                  <p className="font-bold text-xs text-slate-700">
                    {product?.order} sold
                  </p>
                </div>
                <div className="pl-3 flex flex-row justify-center items-center gap-2">
                  {userId && (
                    <WishlistIcon
                      productId={Number(id)}
                      userId={Number(userId)}
                    />
                  )}
                  <p className="font-semibold text-[14px] text-slate-700">
                  {product.rating}({product.sold_quantity})
                  </p>
                </div>
              </div>
            </div>
            <div className="heart w-1/12 hover:text-pink-600 active:text-pink-600 flex flex-row justify-start items-center h-2/3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="w-full h-1/4 relative mb-3 after:absolute pb-3 after:w-full after:h-full  after:top-0 after:left-0 after:border-b-2 after:border-b-solid after:border-b-slate-100 after:pointer-events-none">
          <div className="flex flex-col justify-between pb-3 h-2/4 ">
            <h1 className="font-bold">Description</h1>
            <p className="font-semibold text-sm text-slate-700">
              lorem ipsum dolor sit amet, consectatur adipiscing elit,sad do
              eiusmod tempor incididunt ut labore et
              <span className="font-bold"> view more...</span>
            </p>
          </div>
          <div className="flex flex-row justify-between space-y-1 items-center">
            <div className="flex flex-col space-y-2 justify-center">
              <h3 className="font-bold">Size</h3>
              <ul className="flex space-x-1">
                {product?.sizes.map((sizes, index) => (
                  <li
                    className="py-2 px-2 leading-none font-semibold text-xs rounded-full inline-flex border-2 border-slate-800 transition-all duration-300 hover:bg-slate-300 hover:border-slate-500"
                    key={index}
                  >
                    {sizes}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col space-y-2 justify-center ">
              <h3 className="font-bold">Color</h3>
              <ul className="flex space-x-1">
                {product?.colors.map((colors, index) => (
                  <li
                    className={`bg-${colors}-500 py-4 px-4 inline-flex rounded-full cursor-pointer transition-all duration-300 hover:bg-slate-400`}
                    key={index}
                  ></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-row space-x-2 justify-start items-center text-center mt-3">
            <div>
              <h3 className="font-bold mt-2 text-center">Quantity</h3>
            </div>
            <div className="w-1/3 rounded-2xl bg-slate-300 flex justify-center items-center px-2 py-[4.5px]">
              <div
                className="text-xs cursor-pointer"
                onClick={() => setCount((c) => (c !== 1 ? c - 1 : 1))}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14"
                  />
                </svg>
              </div>
              <p className=" w-2/4 text-center font-bold">{count}</p>
              <div
                className=" text-xs cursor-pointer"
                onClick={() => setCount((c) => c + 1)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full h-20 justify-between items-center">
          <div className="flex flex-col justify-center w-1/3 h-full">
            <h5 className="font-bold text-slate-500 text-xs">Total price</h5>
            <h5 className="font-bold text-xl">
              ${product?.price && product?.price * count}.00
            </h5>
          </div>
          <div className="bg-black w-2/3 h-4/5 rounded-[40px] flex justify-center items-center shadow-md shadow-slate-500/50 cursor-pointer">
            <div className="text-white flex justify-center items-center gap-3">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h3>Total price</h3>
            <h2>${(product?.price || 0) * count}.00</h2>
          </div>
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <h3>Add to Cart</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
