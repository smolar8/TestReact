import { cities } from "../data/cities";
import { compute } from "../utils/compute";

export const Counter = () => {
  const count = compute(cities);
  return <p>Liczba miast: {count}</p>;
};
