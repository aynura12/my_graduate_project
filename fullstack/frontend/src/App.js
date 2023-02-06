import "./App.css";
import { HelmetProvider } from "react-helmet-async";
import ROUTES from "./routes/router";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter(ROUTES);
function App() {
  return (
    <div className="App">
      <HelmetProvider>
       
        <RouterProvider router={router}></RouterProvider>
      </HelmetProvider>
    </div>
  );
}

export default App;
