import React from "react";
import { render } from "../core";
import { CardProfessor } from "../../src/core/components";


test("render of CardProfessor", () => {
  const photo = "https://images.generated.photos/Ra3atuRPvZSe0FkVXmykFEl-oiLNEuc_U1rTkZ3gZs8/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzI3MTAxLmpwZw.jpg";
  const areas = ["Tag1", "Tag2", "Tag3", "Tag4"];
  const shortbio = "Professor(a) da Universidade de Pernambuco."
  
  render(
    <CardProfessor 
        name="Nome do Professor" 
        photo={{ uri: photo }} 
        shortbio={shortbio} 
        areas={areas} 
      />
  );

});