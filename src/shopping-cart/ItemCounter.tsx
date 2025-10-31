import { useState } from "react";

interface Props {
  name: string;
  quantity?: number;
}

export const ItemCounter = ({name, quantity = 0}: Props) => {
  const [count, setCount] = useState(quantity);

  const handleAdd = () => {
    setCount(count + 1);
  }
  const handleSubstract = () => {
    if (count === 0) return;
    setCount(count - 1);
  }

  // const handleClick = () => {
  //   console.log(`click en ${name}`);
  // };

  return (
    <section
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}
    >
      <span
        style={{
          width: '150px',
        }}
      >
        {name}
      </span>
      <button
        // onMouseEnter={() => {
        //   console.log(`mouse enter ${name}`);
        // }}
        onClick={handleAdd}
      >+1
      </button>
      <span>{count}</span>
      <button
        onClick={handleSubstract}
      >-1</button>
    </section>
  )
};