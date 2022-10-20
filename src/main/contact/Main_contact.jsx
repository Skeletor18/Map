import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import "./contact.css";
const Main_contact = () => {
  return (
      <main>
        <YMaps>
          <Map width={"900px"} height={'350px'} defaultState={{ center: [43.324675, 45.692376], zoom: 17 }}>
            <Placemark geometry={[43.324675, 45.692376]} />
          </Map>
        </YMaps>
      </main>
  );
};

export default Main_contact;
