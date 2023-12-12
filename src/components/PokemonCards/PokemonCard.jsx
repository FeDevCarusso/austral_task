import React, { useState } from "react";
import { IonCard, IonCardTitle, IonList } from "@ionic/react";
import styles from "./PokemonCard.module.css";

const PokemonCard = ({ data }) => {
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data?.id}.png`;
  const types = data?.types?.map((t) => t?.type?.name);
  return (
    <IonCard className={`${styles.container} ${styles[types[0]]}`}>
      <div className={styles.cardContent}>
        <div className={`${styles.front} ${styles.cardFace}`}>
          <img
            src={imgUrl}
            alt={`${data?.name}_alt`}
            className={styles.cardImage}
          />
          <IonCardTitle className={styles.title}>{data?.name}</IonCardTitle>
        </div>

        <div className={`${styles.back} ${styles.cardFace}`}>
          <h4 className={styles.type}>Types:</h4>
          {types.map((t, i) => {
            return (
              <IonList
                style={{ marginTop: "3px" }}
                key={i}
                className={`${styles.type_name} ${styles[types[i]]}`}
              >
                {t}
              </IonList>
            );
          })}

          <div className={styles.data_container}>
            <span>Weight: {data?.weight}</span>
            <span>Height: {data?.height}</span>
            <span>Base Experience: {data?.base_experience}</span>
            <span>
              Abilities:{" "}
              {data?.abilities
                .map((ability) => ability.ability.name)
                .join(", ")}
            </span>
          </div>
        </div>
      </div>
    </IonCard>
  );
};

export default PokemonCard;
