import React from "react";
import { db } from "../firebase"; // Importamos el db:  database

const Wikipet = () => {
  // Estado: Datos del Perrito
  const [perritos, setPerritos] = React.useState([]);
  // Uso UseEffect para que se ejecute cuando se pinta el componente!
  React.useEffect(() => {
    // Funcion para obtener los datos de la DB
    const obtenerDatos = async () => {
      try {
        const data = await db
          .collection("perritos")
          .orderBy("raza", "asc")
          .get(); // Se obtiene datos de la collecion perritos (tabla)

        // Se recorre para obtener todos los datos!
        const arrayPerritos = data.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));
        console.log(arrayPerritos);
        setPerritos(arrayPerritos);
      } catch (error) {
        console.log(error); // Muestra si hay error
      }
    };
    obtenerDatos(); //Ejecutamos la Funcion
  }, []);
  //-------------------------------------- Elementos -----------------------------------------
  return (
    <div>
      <div className="container">
        <ul>
          {perritos.map((item) => (
            <div className="row">
              <div className="align-self-center p-2 bd-highlight col-12 col-sm-8 col-md-6 col-xl-4">
                <img
                  className="mx-auto d-block rounded-circle"
                  src={item.img}
                  alt="Perrito"
                />
              </div>
              <div className="col-12 col-sm-8 col-md-6 col-xl-4 m-4">
                <li className="list-group-item" key={item.id}>
                  <p>Raza: {item.raza}</p>
                  <p>Origen: {item.origen}</p>
                  {item.temperamento ? (
                    <p>Temperamento : {item.temperamento}</p>
                  ) : null}
                  <p>Altura: {item.altura}</p>
                  <p>Peso: {item.peso}</p>
                  <p>Color: {item.color}</p>
                  {item.esperanzaV ? (
                    <p>Esperanza Vida: {item.esperanzaV}</p>
                  ) : null}
                  {item.fut ? <p>fut si</p> : null}
                </li>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Wikipet;
