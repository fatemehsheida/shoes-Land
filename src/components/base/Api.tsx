import React, { ReactNode } from "react";
import { useContext, createContext, useEffect } from "react";
import axios from "axios";
import { ProductProps,LogoProps  } from "../../component/product/ProductCard";
interface Children {
  children: React.ReactNode;
}
export interface TValueContext {
  data: ProductProps[];
  setData: React.Dispatch<React.SetStateAction<ProductProps[]>>;
  users: UserProps[];
  setUsers: React.Dispatch<React.SetStateAction<UserProps[]>>;
  Logos:LogoProps[];
  setLogs: React.Dispatch<React.SetStateAction<LogoProps[]>>;
}
export const ApiContext = createContext<TValueContext | null>(null);
function Api({ children }: Children) {
    const [users, setUsers] = React.useState<UserProps[]>([]);
    const [Logos, setLogs] = React.useState<LogoProps[]>([]);
      useEffect(() => {. axios
        .get("http://localhost:5173/productsLogo")
        .then((response)=>{
          setLogs(response.data);
          console.log(response)
        })
    axios
      .get("http://localhost:5173/Products")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <ApiContext.Provider value={{ data, setData, users, setUsers,Logos,setLogs }}>
      {children}
    </ApiContext.Provider>
  );
}
export default Api;