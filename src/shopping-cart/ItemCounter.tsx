import { useState } from "react";
import styles from './ItemCounter.module.css';

// import './ItemCounter.css';

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
      className={styles.itemRow}
      // style={{
      //   display: 'flex',
      //   alignItems: 'center',
      //   gap: '10px',
      //   marginTop: 10,
      // }}
    >
      <span
        className={styles['item-text']}
        style={{
          color: count == 1 ? 'red' : 'black'
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