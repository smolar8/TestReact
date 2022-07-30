import { cities } from "../data/cities";

export const Cities = () => {
  return (
    <ul>
      {cities.map((el) => (
        <li key={el.cities}>{`Country: ${el.country}, City: ${el.city}`}</li>
      ))}
    </ul>
  );
};
