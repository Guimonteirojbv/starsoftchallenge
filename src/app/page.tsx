'use client'

import { Header } from "@/Components/Header";


import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/Redux/store";
import React from "react";
import { fetchData } from "@/Redux/reducers/products";
import { ProducsList } from "@/Components/ProductsList";
import { useQuery } from "@tanstack/react-query";



export default function Home() {

  const dispatch = useDispatch<AppDispatch>()


 const {status, page, products} = useSelector((state: RootState) => state.products)

 const fetchData = async (page: number) => {
  const response = await fetch(`https://starsoft-challenge-7dfd4a56a575.herokuapp.com/v1/products?page=${page}&limit=${20}`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

function handleChangeAlertInputs({message, severity}: {message: string, severity: string}) {
  console.log(message, severity)
}

const { 
  data: fetchedProducts, 
  error: dadosError, 
  isLoading: loadingBackdrop 
} = useQuery({
  queryKey: ["products", page],
  queryFn: () => fetchData(page),
  onError: (error: unknown) => {
    handleChangeAlertInputs({
      message: "Data not fetched successfully from database",
      severity: "error",
    });
    console.error(error);
  },
});

React.useEffect(() => {
  if (products) {
    setAllowedTenders(products);
  }

}, [products]);

  React.useEffect(() => {
    if(status === 'idle') {
      dispatch(fetchData(1))
    }
  }, [dispatch, status])


  return (
      <>
        <Header />
        <main>
          {status === 'succeeded' && (
              <ProducsList />
         
          )}

          {status === 'failed' && (
            <div>Ocorreu um erro</div>
          )}
        </main>
      </>
  );
}
function setData(data: any): any {
  throw new Error("Function not implemented.");
}

