import { act, render, screen, within } from "@testing-library/react";

import Lac42 from "../components/Lac42";
import Lac46 from "../components/Lac46";

test("test negative cases", async() => {

    render(<Lac46/>);
    const el = await screen.findAllByRole("listitem");
    expect(el).toHaveLength(4);
  


});