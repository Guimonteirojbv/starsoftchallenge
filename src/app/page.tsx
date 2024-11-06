'use client';

import { Header } from "@/Components/Header";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/Redux/store";
import React from "react";
import { ProducsList } from "@/Components/ProductsList";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { addProducts } from "@/Redux/reducers/products";
import { ProductType } from "./type/itemType";

interface FetchDataResponse {
  data: ProductType[] ;
}

const fetchData = async (page: number): Promise<FetchDataResponse> => {
  const response = await fetch(`https://starsoft-challenge-7dfd4a56a575.herokuapp.com/v1/products?page=${page}&limit=${20}`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};



function handleChangeAlertInputs({ message, severity }: { message: string; severity: string }) {
  console.log(message, severity);
}

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const { page } = useSelector((state: RootState) => state.products);

  const { data, error, isLoading } = useQuery<any>({
    queryKey: ["productsData", page],
    queryFn: () => fetchData(page),
    onError: (error: Error) => {
      handleChangeAlertInputs({
        message: "Data not fetched successfully from database",
        severity: "error",
      });
      console.error(error);
    },

  }as UseQueryOptions);

  React.useEffect(() => {
    if (data?.data) {
      dispatch(addProducts(data.data));
    }
  }, [data, dispatch]);

  return (
    <>
      <Header />
      <main>
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Ocorreu um erro</div>
        ) : (
          <ProducsList/>
        )}
      </main>
    </>
  );
}