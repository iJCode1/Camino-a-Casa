import React from "react";
import { db } from "../firebase"; // Importamos el db:  database
import "./estilos.css";

const Fundaciones = () => {
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
    <div className="container">
      <div className="row">
        {perritos.map((item) => (
          <div
            className="col-sm-4 col-12 col-sm-8 col-md-6 col-xl-4 mt-4 mb-4"
            key={item.id}
          >
            <div className="card tamaño mx-auto">
              <div className="card-body">
                <div className="align-self-center p-4 bd-highlight col-12 col-sm-8 col-md-6 col-xl-4">
                  <img
                    className="mx-auto d-block rounded-circle"
                    src={item.img}
                    alt="Perrito"
                  />
                </div>
                <div className="text-center">
                  {item.raza ? (
                    <p>
                      <strong>Raza:</strong> {item.raza}
                    </p>
                  ) : null}

                  {item.origen ? (
                    <p>
                      <strong>
                        <span>Origen:</span>
                      </strong>
                      {item.origen}
                    </p>
                  ) : null}

                  {item.temperamento ? (
                    <p>
                      <strong>Caracteristicas:</strong> {item.temperamento}
                    </p>
                  ) : null}

                  {item.altura ? (
                    <p>
                      <strong>Altura:</strong> {item.altura}
                    </p>
                  ) : null}

                  {item.peso ? (
                    <p>
                      <strong>Peso:</strong> {item.peso}
                    </p>
                  ) : null}

                  {item.color ? (
                    <p>
                      <strong>Color:</strong> {item.color}
                    </p>
                  ) : null}

                  {item.esperanzaV ? (
                    <p>
                      <strong>Esperanza Vida:</strong> {item.esperanzaV}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fundaciones;
