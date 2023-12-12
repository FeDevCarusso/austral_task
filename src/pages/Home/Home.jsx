import {
  IonCol,
  IonContent,
  IonGrid,
  IonInfiniteScroll,
  IonRow,
} from "@ionic/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { ApiContext } from "../../context/ApiContext";
import PokemonCard from "../../components/PokemonCards/PokemonCard";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const apiContext = useContext(ApiContext);
  const pokemonsState = apiContext?.pokemonsState;
  const fetchPokemons = apiContext?.fetchPokemons;
  const renderPokemonCard = (pokemon, index) => (
    <PokemonCard data={pokemon} key={index} />
  );

  function infinite(e) {
    fetchPokemons(10, currentPage);
    setCurrentPage(currentPage + 1);
    e.target.complete();
  }

  return (
    <IonContent id="mainContent">
      <IonGrid>
        <IonRow>
          <IonCol
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {pokemonsState &&
              pokemonsState?.length > 0 &&
              pokemonsState?.map(renderPokemonCard)}
          </IonCol>
        </IonRow>
      </IonGrid>
      <IonInfiniteScroll onIonInfinite={(e) => infinite(e)}>
        <span
          style={{
            display: "block",
            padding: "10px",
            backgroundColor: "#f0f0f0",
            color: "#333",
            textAlign: "center",
            borderRadius: "5px",
            marginTop: "10px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          Cargando más contenido...
        </span>
      </IonInfiniteScroll>
    </IonContent>
  );
};

export default Home;
