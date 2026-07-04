export function Item({ brand, model, year, color, mileage, price }) {
  return (
    <li>
      <p>{brand}</p>
      <p>{model}</p>
      <p>{year}</p>
      <p>{color}</p>
      <p>{mileage}</p>
      <p>{price}</p>
    </li>
  );
}