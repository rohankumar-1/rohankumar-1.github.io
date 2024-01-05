import { Routes, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";

// layout and home
import Layout from "./Layout";
import Blog from "./blog/Blog";
import Home from "./Home";
import Error from "./components/Error";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <SnackbarProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blog" element={<Blog />} />
        	  <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </SnackbarProvider>
    </div>
  );
};

export default App
