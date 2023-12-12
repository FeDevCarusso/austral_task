import React, { useState } from "react";
import {
  IonApp,
  IonContent,
  IonRouterOutlet,
  setupIonicReact,
} from "@ionic/react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { Route } from "react-router-dom";
import ApiProvider from "./context/ApiContext";
import NotFound from "./components/404/NotFound";

setupIonicReact();

function App() {
  const [count, setCount] = useState(0);

  return (
    <IonApp>
      <Navbar />
      <IonContent>
        <IonRouterOutlet>
          <Route exact path="/">
            <ApiProvider>
              <Home></Home>
            </ApiProvider>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </IonRouterOutlet>
      </IonContent>
    </IonApp>
  );
}

export default App;
