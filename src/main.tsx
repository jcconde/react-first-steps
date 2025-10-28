import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//<StrictMode>permite asegurarnos si la aplicación funciona como nosotros esperamos</StrictMode>
//<StrictMode>mantenerlo siempre</StrictMode>

/**
 * al retirar <StrictMode></StrictMode>, solo permite un elemento html.
 * con múltiples elementos, se genera un error.
 */
// createRoot(document.getElementById('root')!).render(
//     <h1>Hola Mundo!!</h1>
// );


/**
 * al retirar <StrictMode></StrictMode>, solo permite un elemento html.
 * se puede envolver los elementos en un div y funciona sin problemas.
 */
// createRoot(document.getElementById('root')!).render(
//   <div>
//     <h1>Hola Mundo!!</h1>
//     <p>Esto es un párrafo</p>
//     <button>Click me</button>
//     <div>
//       <h2>Hola dentro de un div</h2>
//     </div>
//   </div>,
// );

/**
 * se puedde usar el fragmento <> para envolver los elementos
 */
// createRoot(document.getElementById('root')!).render(
//   <>
//     <h1>Hola Mundo!!</h1>
//     <p>Esto es un párrafo</p>
//     <button>Click me</button>
//     <div>
//       <h2>Hola dentro de un div</h2>
//     </div>
//   </>,
// );

// import { FirstStepsApp } from "./FirstStepsApp.tsx";
import { MyAwesomeApp } from "./MyAwesomeApp.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*<FirstStepsApp/>*/}
    <MyAwesomeApp/>
  </StrictMode>,
);