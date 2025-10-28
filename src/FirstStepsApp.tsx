import { ItemCounter } from "./shopping-cart/ItemCounter.tsx";

export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de compra</h1>
      <ItemCounter name="Nintendo Switch 2" quantity={2}/>
      <ItemCounter name="Pro Controller" quantity={3}/>
      <ItemCounter name="Super Smash" quantity={4}/>
    </>
  );
}