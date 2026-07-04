import { Item } from "../components/Item/Item";

export function List({ data }) {
  return (
    <ul>
      {data.map(({ id, brand, model, year, color, mileage, price }) => {
        return (
          <Item key={id} brand={brand} model={model} year={year} color={color} mileage={mileage} price={price}
          />
        );
      })}
    </ul>
  );
}