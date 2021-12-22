import React from "react";
import { MapView } from "../../src/core/components";
import { render } from "../core";

test("render of MapView", () => {
  render(
    <MapView 
        region={{
          latitude: -8.8833723,
          longitude: -36.4970813,
          latitudeDelta: 0.003,
          longitudeDelta: 0.003,
        }}
        points={[
          {
            title: "Universidade de Pernambuco",
            description: "Campus Garanhuns",
            coords: {
              latitude: -8.8833723,
              longitude: -36.4970813
            }
          }
        ]}        
      />
  );
});