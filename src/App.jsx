import { Routes, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";

// layout and home
import Layout from "./Layout";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <SnackbarProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
        	<Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </SnackbarProvider>
    </div>
  );
};

export default App
