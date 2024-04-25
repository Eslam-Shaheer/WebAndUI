import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./routes/Home";
import SignIn from "./routes/SignIn";
import { Provider } from "react-redux";
import { store } from "./store";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  console.log(import.meta.env.VITE_API_URL);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/login",
          element: <SignIn />,
        },
      ],
    },
  ]);

  return (
    <ThemeContextProvider>
      <Provider store={store}>
        <RouterProvider router={routes} />;
      </Provider>
    </ThemeContextProvider>
  );
}

export default App;
