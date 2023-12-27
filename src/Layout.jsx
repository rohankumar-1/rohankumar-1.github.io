
import Header from "./components/Header";
import Home from "./Home";

// Layout element is the template for all other page: each has the header, then the Outlet (actual page rendered)
function Layout() {
  return (
    <div className="layout">
      <Header />
      <Home />
    </div>
  );
}

export default Layout;