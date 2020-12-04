import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

test("Checked contact appears in list of contacts", async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const checkboxes = await screen.findAllByTestId("checkbox");

  fireEvent.click(checkboxes[0]);
  fireEvent.click(checkboxes[1]);

  const employees = await screen.findAllByTestId("employee");
  expect(checkboxes[0]).toBeChecked();
  expect(employees[0]).toHaveTextContent("Albert Toni - 23 March 2019 year");
  expect(await screen.findByText("March")).toBeInTheDocument();
});

test("Unchecked contact disappears from list of contacts", async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const checkboxes = await screen.findAllByTestId("checkbox");

  fireEvent.click(checkboxes[0]);

  const employees = await screen.findAllByTestId("employee");

  expect(checkboxes[0]).not.toBeChecked();
  expect(employees[0]).not.toHaveTextContent(
    "Albert Toni - 23 March 2019 year"
  );
});
