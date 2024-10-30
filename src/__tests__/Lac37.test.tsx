import { render, screen, within } from "@testing-library/react";

import App from "../App";
import Lac37 from "../components/Lac37";


test("test negative cases", () => {
    render(<Lac37/>);
    // const button = screen.getByText("Login");
    const div = screen.getByText("Hello World");
    let subdiv = within(div).getByText("hey");
    expect(div).toBeInTheDocument();
    expect(subdiv).toBeInTheDocument();
    // expect(button).toHaveValue("Hello World");
});