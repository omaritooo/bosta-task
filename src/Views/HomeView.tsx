import { Log } from "@/components/Log";
import { Shipment } from "@/components/Shipment";
import { useGetShipmentQuery } from "@/store/shipmentSlice";

export const HomeView = () => {
  const { data, isLoading, error } = useGetShipmentQuery(7234258);
  return (
    <body>
      {data && !isLoading ? (
        <>
          <Shipment data={data} />
          <Log data={data} />
        </>
      ) : (
        "Your data is loading..."
      )}
      {error ? "Error..." : null}
    </body>
  );
};
