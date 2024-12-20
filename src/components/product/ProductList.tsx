import { ApiContext } from "../base/Api";
import { UserProps } from "../base/Interfaces";
import { ProductProps } from "./ProductCard";
import ProductCard from "./ProductCard";
import React, { useContext, useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";

interface FilterState {
  search: string;
  brand: string;
  wishList: string;
  mostPopular: string;
}

export type FilterAction = {
  type: "search" | "brand" | "wishList" | "mostPopular";
  value: string;
};

interface ProductListProps {
  products: ProductProps[];
  productSet: React.Dispatch<React.SetStateAction<ProductProps[]>>;
  dispatchCaller: FilterAction;
}

// export const UserContext = createContext("");

function filterReducer(state: FilterState, action: FilterAction) {
  console.log("action", action);
  const clone = {
    search: "",
    brand: "",
    wishList: "",
    mostPopular: "",
  };
  switch (action.type) {
    case "search":
      return { ...clone, search: action.value };
    case "brand":
      return { ...clone, brand: action.value };
    case "wishList":
      return { ...clone, wishList: action.value };
    case "mostPopular":
      return { ...clone, mostPopular: action.value };
  }
}

function ProductList({ dispatchCaller, products }: ProductListProps) {
  const apiContext = useContext(ApiContext);
  let brands: string[] = [];
  if (apiContext) {
    for (const i of apiContext.data) {
      if (!brands.includes(i.brand)) {
        brands = [...brands, i.brand];
      }
    }
  }

  const [filter, dispatch] = useReducer(filterReducer, {
    search: "",
    brand: "",
    wishList: "",
    mostPopular: "",
  });
  const [loginUser, setLoginUser] = useState<UserProps>();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const userId = window.localStorage.getItem("userId");
    console.log(userId);
    if (userId && apiContext) {
      console.log(apiContext.users);
      console.log(
        apiContext.users.find((user) => {
          console.log("Number(userId)", Number(userId));
          console.log("user.id", user.id);
          console.log("Number(userId) == user.id", Number(userId) == user.id);
          return Number(userId) == user.id;
        })
      );
      setLoginUser(apiContext.users.find(({ id }) => Number(userId) == id));
    }
  }, [apiContext]);

  console.log(dispatchCaller);
  // dispatch(dispatchCaller);
  useEffect(() => {
    dispatch(dispatchCaller);
  }, [dispatchCaller]);
  console.log(filter);
  console.log(loginUser);
  const filteredProducts = products
    .filter((product) => {
      console.log(typeof product.id);
      return (
        (product.brand == filter.brand || filter.brand == "") &&
        product.title.includes(filter.search) &&
        (loginUser?.wishlist.includes(Number(product.id)) ||
          filter.wishList == "")
      );
    })
    .sort((a, b) => (filter.mostPopular ? b.order - a.order : 0));
  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  console.log(filteredProducts);

  return (
    <div className="flex h-screen w-full flex-col" key={11}>
      {/* <Search
        testSearch={(value: string) => {
          dispatch({ type: "search", value });
        }}
      /> */}
      <div className=" mostContainer w-full flex flex-col items-center justify-center gap-5 ">
        <div className="w-full flex flex-row justify-between items-center text-start left-0">
          <h1 className="font-bold leading-5 text-xl">Most Popular</h1>
          <h1 className="font-semibold MostPopularpage cursor-pointer leading-5 text-lg hover:text-slate-500">
            See All
          </h1>
        </div>
      </div>
      <div className="w-full flex flex-row justify-start items-center gap-1 overflow-x-auto px-5">
        <div>
          <button
            key={"all"}
            className="font-bold leading-5 text-base h-10 flex justify-center items-center px-5 py-2.5 border-2 border-[#343A40] rounded-3xl cursor-pointer hover:bg-slate-700 hover:text-white"
            onClick={() =>
              
            }
          >
            All
          </button>
        </div>
        {brands.map((item, index) => {
          return (
            <div>
              <button
                key={index}
                className="font-bold leading-5 text-base h-10 flex justify-center items-center px-5 py-2.5 border-2 border-[#343A40] rounded-3xl cursor-pointer hover:bg-slate-700 hover:text-white"
                onClick={() =>
                  setDispatch((pervDispatch) => {
                    return { ...pervDispatch, value: item };
                  })
                }
              >
                {item}
              </button>
            </div>
          );
        })}
      </div>
      <div className="w-full flex flex-wrap  justify-center items-center gap-4">
        {paginatedProducts.length == 0 && (
          <div className="flex flex-col items-center justify-center mt-10">
            <div className="text-6xl font-bold text-slate-700">Oops!</div>
            <p className="text-lg text-gray-500 mt-2 mx-4 text-center">
              We couldn’t find any products matching your search.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-16 h-16 text-gray-300 mt-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4m0 4h.01M12 2.25a9.75 9.75 0 1 1-9.75 9.75A9.75 9.75 0 0 1 12 2.25Z"
              />
            </svg>
          </div>
        )}
        {paginatedProducts.map((item: ProductProps) => (
          <Link to={`/product/${item.id}`}>
            <ProductCard {...item} />
          </Link>
        ))}
      </div>
      {paginatedProducts.length != 0 && (
        <div className="flex justify-center items-center p-10 my-10">
          <button
            key={page}
            className={`px-4 py-2 mx-1 border rounded-full ${
              currentPage === 1
                ? "text-gray-300 cursor-not-allowed "
                : "text-gray-600 hover:bg-blue-100 font-bold"
            }`}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`px-4 py-2 mx-1 border rounded-full ${
                page === currentPage
                  ? "text-gray-300 cursor-not-allowed "
                  : "text-gray-600 hover:bg-blue-100 font-bold"
              }`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
          <button
            className={`px-4 py-2 mx-1 border rounded-full ${
              currentPage === totalPages || totalPages === 0
                ? "text-gray-300 cursor-not-allowed "
                : "text-gray-600 hover:bg-blue-100 font-bold"
            }`}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages || totalPages === 0}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductList;
