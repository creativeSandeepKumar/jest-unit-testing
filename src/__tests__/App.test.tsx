import { fireEvent, getByText, render, screen } from "@testing-library/react"
import App from "../App"
import { DBClean } from "../sum"

// test('demo', () => {
//     expect(true).toBe(true)
// })

// test("Renders the main page", () => {
//     render(<App />);
//     const linkElement = screen.getByText(/Vite + React/i);
//     expect (linkElement).toBeInTheDocument()

//     expect(true).toBeTruthy()
// })

// test("Test first React app case", () => {
//     render(<App />);
//     const text = screen.getByText(/First React Test Case/i);
//     const title = screen.getByTitle("this is image");
//     expect(text).toBeInTheDocument();
//     expect(title).toBeInTheDocument();
// })


// test("Test case for Input Box", () => {
//     render(<App />);
//     const inputbox = screen.getByRole("textbox");
//     const inputboxPlaceholder = screen.getByPlaceholderText("this is input");
//     expect(inputbox).toBeInTheDocument();
//     expect(inputboxPlaceholder).toBeInTheDocument();
//     expect(inputboxPlaceholder).toHaveAttribute("name", "input");
//     expect(inputboxPlaceholder).toHaveAttribute("id", "inputId");
//     expect(inputboxPlaceholder).toHaveAttribute("type", "text");
// })

// beforeAll(() => {
//     console.log("***** Before All Hook *****");
// })


// beforeEach(() => {
//     // console.log("***** Before Each Hook *****");
//     DBClean()
// })

// test("On Change event testing", () => {
//     render(<App/>);
//     console.log("123");
//     const input = screen.getByRole("textbox") as HTMLInputElement;
//     fireEvent.change(input, {target: {value: "ab"}});
//     expect(input.value).toBe("ab");
// })
test("On Change event testing", () => {
  
})


// test("Click Event test case", () => {
//     render(<App/>);
//     console.log("1234");
//     const btn = screen.getByRole("button");
//     fireEvent.click(btn);
//     expect(screen.getByText("updated data")).toBeInTheDocument();
// });

// afterAll(() => {
//     console.log("***** After All Hook *****");
// })
// afterEach(() => {
//     console.log("***** After Each Hook *****");
// })

