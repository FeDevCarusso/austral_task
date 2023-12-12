import React from "react";

import { IonHeader, IonToolbar, IonTitle } from "@ionic/react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            Federico Carusso | Agencia Austral Task
          </Link>
        </IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Navbar;
