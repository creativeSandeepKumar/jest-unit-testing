import { fireEvent, getByText, render, screen } from "@testing-library/react"
import App from "../App"

// test('demo', () => {
//     expect(true).toBe(true)
// })

// test("Renders the main page", () => {
//     render(<App />);
//     const linkElement = screen.getByText(/Vite + React/i);
//     expect (linkElement).toBeInTheDocument()

//     expect(true).toBeTruthy()
// })

test("Other Test first React app case", () => {
    render(<App />);
    const text = screen.getByText(/First React Test Case/i);
    const title = screen.getByTitle("this is image");
    expect(text).toBeInTheDocument();
    expect(title).toBeInTheDocument();
})


test("Other Test case for Input Box", () => {
    render(<App />);
    const inputbox = screen.getByRole("textbox");
    const inputboxPlaceholder = screen.getByPlaceholderText("this is input");
    expect(inputbox).toBeInTheDocument();
    expect(inputboxPlaceholder).toBeInTheDocument();
    expect(inputboxPlaceholder).toHaveAttribute("name", "input");
    expect(inputboxPlaceholder).toHaveAttribute("id", "inputId");
    expect(inputboxPlaceholder).toHaveAttribute("type", "text");
});

describe("UI Test case group", ()=> {
    test("test case I", () => {
        render(<App/>);
        const inputbox = screen.getByRole("textbox");
        expect(inputbox).toHaveAttribute("name", "input");
    })
    test("test case II", () => {
        render(<App/>);
        const inputbox = screen.getByRole("textbox");
        expect(inputbox).toHaveAttribute("name", "input");
    })
    test("test case II", () => {
        render(<App/>);
        const inputbox = screen.getByRole("textbox");
        expect(inputbox).toHaveAttribute("name", "input");
    })
})

describe.only("Api Test case group", ()=> {
    test("test case I", () => {
        render(<App/>);
        const inputbox = screen.getByRole("textbox");
        expect(inputbox).toHaveAttribute("name", "input");
    })
    test("test case II", () => {
        render(<App/>);
        const inputbox = screen.getByRole("textbox");
        expect(inputbox).toHaveAttribute("name", "input");
    })
    test("test case II", () => {
        render(<App/>);
        const inputbox = screen.getByRole("textbox");
        expect(inputbox).toHaveAttribute("name", "input");
    })
});



