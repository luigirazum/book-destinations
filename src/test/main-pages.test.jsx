import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store.js";
import Destinations from "../components/main-pages.jsx";
import { render } from "../utils/test-utils.jsx";
import { it, expect } from "vitest";

it("Should render Packages component correctly", () => {
  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Destinations />
      </BrowserRouter>
    </Provider>
  );

  const element = container.querySelector(".destinations-heading");
  expect(container).toMatchSnapshot();
  expect(element).toBeInTheDocument();
});
