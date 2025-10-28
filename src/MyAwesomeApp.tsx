const firstname = 'Juan';
const lastName = 'Conde';

const favoriteGames = ['League of Legends', 'Valorant', 'Fortnite', 'Overwatch', 'Rocket League', 'Call of Duty'];
const isActive = true;

const address = {
  zipCode: 12345,
  country: 'Canada'
}

export function MyAwesomeApp() {
  return (
    <>
      <h1>{firstname}</h1>
      <h3>{lastName}</h3>

      <p>{favoriteGames.join(', ')}</p>
      <p>2+2</p>
      <h1>{isActive ? 'Activo' : 'No activo'}</h1>

      <p style={{
        backgroundColor: 'red',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid black'
      }}>{JSON.stringify(address)}</p>
    </>
  );
}