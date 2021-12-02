import { Accordion } from "../../src/core/components";
import { render } from "../core";


test('render of Acorddion', async () => {

  render(
    <Accordion
      title="Accordion"
      body="body"
      bold={false}
    />
  );

});
