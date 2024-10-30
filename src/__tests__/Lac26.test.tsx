import { render, screen, configure } from "@testing-library/react";
configure({testIdAttribute: "element-id"})
import App from "../App";


test("change test id", () => {
    // render(<App/>);
    // const testid = screen.getByTestId("div-test-id");

    // expect(testid).toBeInTheDocument();

});