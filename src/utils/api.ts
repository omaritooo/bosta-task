import axios from "axios";

export const getData = async (
  id: number,
  signal: AbortSignal
): Promise<IResponse> => {
  return await axios.get(`${import.meta.env.VITE_BASE_URL}/track/${id}`, {
    signal: signal,
  });
};
