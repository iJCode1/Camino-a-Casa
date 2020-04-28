import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";

import { auth } from "./firebase"; // importacion de Firebase
import Footer from "./components/Footer";
import Inicio from "./components/Inicio";
import Wikipet from "./components/Wikipet";
import Fundaciones from "./components/Fundaciones";
import Veterinarias from "./components/Veterinarias";
import Adopcion from "./components/Adopcion";
import Navbar2 from "./components/Navbar2";
import Navbar3 from "./components/Navbar3";

function App() {
  /* 
    onAuthStateChanged: va evaluando si existe el usuario, 
    por lo tanto si se cierra sesión se vuelve a ejecutar onAuthStateChanged()
*/
  const [firebaseUser, setFirebaseUser] = React.useState(false); // Estado: Hay usuario?

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setFirebaseUser(user);
      } else {
        setFirebaseUser(null);
      }
    });
  }, []);
  return firebaseUser !== false ? (
    <Router>
      <div>
        {/*<Navbar firebaseUser={firebaseUser} />*/}
        <Navbar3 firebaseUser={firebaseUser} />
        {/*  <Navbar2 firebaseUser={firebaseUser} /> */}
        {/* Componentes dinamicos : Rutas*/}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/adopcion">
            <Adopcion />
          </Route>
          <Route path="/wikipet">
            <Wikipet />
          </Route>
          <Route path="/fundaciones">
            <Fundaciones />
          </Route>
          <Route path="/veterinarias">
            <Veterinarias />
          </Route>
          <Route path="/">
            <Inicio />
          </Route>
        </Switch>
      </div>
      <div>
        <Footer />
      </div>
    </Router>
  ) : (
    <div>Cargando...</div>
  );
}

export default App;
