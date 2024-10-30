import { render, screen } from "@testing-library/react";

import App from "../App";
import Lac36 from "../components/Lac36";

test("test negative cases", () => {
    render(<Lac36/>);
    // const button = screen.getByText("Login");
    const button = document.querySelector("#testid");
    expect(button).toBeInTheDocument();
    // expect(button).toHaveValue("Hello World");
});