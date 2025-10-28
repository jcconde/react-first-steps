interface Props {
  name: string;
  quantity: number;
}

export const ItemCounter = ({name}: Props) => {
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
      <button>+1</button>
      <span>10</span>
      <button>-1</button>
    </section>
  )
};