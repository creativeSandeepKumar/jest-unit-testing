import { act, logRoles, prettyDOM, render, screen, within } from "@testing-library/react";
import Lac41 from "../components/Lac41";
import userEvent from "@testing-library/user-event";
import Lac42 from "../components/Lac42";
import Lac43 from "../components/Lac43";

test("test negative cases", async() => {

    const {container, debug} = render(<Lac43/>);
    console.log(prettyDOM(container));
    debug();
    logRoles(container);


});