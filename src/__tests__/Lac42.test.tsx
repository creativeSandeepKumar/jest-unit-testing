import { act, render, screen, within } from "@testing-library/react";
import Lac41 from "../components/Lac41";
import userEvent from "@testing-library/user-event";
import Lac42 from "../components/Lac42";

test("test negative cases", async() => {
    const testFunction = jest.fn();
    userEvent.setup();
    render(<Lac42 testFunction={testFunction}/>);
    const button = screen.getByRole("button");
    await userEvent.click(button);
    expect(testFunction).toBeCalled()


});