import { render, screen, configure } from "@testing-library/react";
configure({testIdAttribute: "element-id"})
import App from "../App";


test("change test id", () => {
    // render(<App/>);
    // const titletg = screen.getByTitle("click me");
    // const spantg = screen.getAllByTitle("black spade suit");


    // expect(titletg).toBeInTheDocument();

    //     for(let i = 0; i < spantg.length; i++){
    //     expect(spantg[i]).toBeInTheDocument();
    //     // expect(h1tag[i]).toHaveValue("Sandeep");
    // }

});