import React from "react";
import { AssetCardCourseLogo } from "../../src/assets";
import { CardCourse } from "../../src/core/components";
import { render } from "../core";

test("render of CardCourse", () => {
  render(
    <CardCourse text="Engenharia de Software" banner={AssetCardCourseLogo}/>
  );
});