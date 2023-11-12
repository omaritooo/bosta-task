import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "shipmentAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://tracking.bosta.co/shipments/track`,
  }),
  endpoints: (builder) => ({
    getShipment: builder.query<IData, number | string>({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useGetShipmentQuery } = api;
