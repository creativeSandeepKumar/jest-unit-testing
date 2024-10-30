import { render, screen, configure } from "@testing-library/react";
configure({testIdAttribute: "element-id"})
import App from "../App";


test("change test id", () => {
    // render(<App/>);
    // const input = screen.getAllByDisplayValue("Sandeep");
    // const textbox = screen.getByDisplayValue("Sanjay");
    // const radiobtn = screen.getByDisplayValue("male");

    // // expect(input).toBeInTheDocument();
    // expect(textbox).toBeInTheDocument();
    // expect(radiobtn).toBeInTheDocument();
    //     for(let i = 0; i < input.length; i++){
    //     expect(input[i]).toBeInTheDocument();
    //     // expect(h1tag[i]).toHaveValue("Sandeep");
    // }

});